import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  ChannelType
} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('play')
  .setDescription('Toca música por busca ou URL')
  .addStringOption((option) =>
    option
      .setName('query')
      .setDescription('O termo de busca ou URL de uma faixa/playlist')
      .setRequired(true)
  );

export async function execute(
  interaction: ChatInputCommandInteraction,
  client: any
) {
  const query = interaction.options.getString('query', true);

  // Certifique-se de que o usuário está em um canal de voz.
  const member = await interaction.guild!.members.fetch(interaction.user.id);
  const voiceChannel = member.voice.channel;
  if (!voiceChannel || voiceChannel.type !== ChannelType.GuildVoice) {
    return interaction.reply({
      content: 'Você precisa estar em um canal de voz primeiro.',
      ephemeral: true
    });
  }

  await interaction.deferReply();

  // Pesquise a música/playlist usando o cliente do player.
  const res = await client.player.search(query, { requestedBy: interaction.user });
  if (!res || !res.tracks || res.tracks.length === 0) {
    return interaction.editReply('Nenhum resultado encontrado.');
  }

  // Crie ou recupere a fila para esta guilda.
  const queue = client.player.nodes.create(interaction.guild!, {
    metadata: { channel: interaction.channel },
    volume: 80,
    leaveOnEnd: true,
    leaveOnStop: true,
    leaveOnEmpty: true
  });

  // Conecte ao canal de voz se ainda não conectado.
  if (!queue.connection) await queue.connect(voiceChannel);

  // Se a busca retornou uma playlist, adicione todas as faixas; caso contrário, adicione a primeira.
  if (res.playlist) {
    queue.addTrack(res.tracks);
  } else {
    queue.addTrack(res.tracks[0]);
  }

  // Inicie a reprodução se não estiver tocando nada.
  if (!queue.node.isPlaying() && !queue.node.isPaused()) await queue.node.play();

  if (res.playlist) {
    return interaction.editReply(
      `📑 Playlist **${res.playlist.title}** adicionada à fila com ${res.tracks.length} faixas.`
    );
  } else {
    return interaction.editReply(`🎵 Enfileirada: **${res.tracks[0].title}**`);
  }
}