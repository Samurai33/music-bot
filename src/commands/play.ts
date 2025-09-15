import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  ChannelType,
  EmbedBuilder
} from 'discord.js';


export const data = new SlashCommandBuilder()
  .setName('play')
  .setDescription('Play music by search or URL')
  .addStringOption((option) =>
    option
      .setName('query')
      .setDescription('The search term or URL of a track/playlist')
      .setRequired(true)
  );

export async function execute(
  interaction: ChatInputCommandInteraction,
  client: any
) {
  const query = interaction.options.getString('query', true);

  // Ensure the user is in a voice channel.
  const member = await interaction.guild!.members.fetch(interaction.user.id);
  const voiceChannel = member.voice.channel;
  if (!voiceChannel || voiceChannel.type !== ChannelType.GuildVoice) {
    return interaction.reply({
      content: 'You must be in a voice channel first.',
      ephemeral: true
    });
  }

  await interaction.deferReply();

  // Search for the track/playlist using the player client.
  const res = await client.player.search(query, { requestedBy: interaction.user });
  if (!res || !res.tracks || res.tracks.length === 0) {
    return interaction.editReply('No results found.');
  }

  // Create or get the queue for this guild.
  const queue = client.player.nodes.create(interaction.guild!, {
    metadata: { channel: interaction.channel },
    volume: 80,
  leaveOnEnd: 2000, // leave 2 seconds after the last track ends
    leaveOnStop: true,
    leaveOnEmpty: true
  });

  // Connect to the voice channel if not already connected.
  if (!queue.connection) await queue.connect(voiceChannel);

  // If the search returned a playlist, add all tracks; otherwise, add the first track.
  if (res.playlist) {
    queue.addTrack(res.tracks);
  } else {
    queue.addTrack(res.tracks[0]);
  }

  // Start playback if nothing is playing.
  if (!queue.node.isPlaying() && !queue.node.isPaused()) await queue.node.play();

  // Build a modern embed for the response
  let embed;
  if (res.playlist) {
    embed = new EmbedBuilder()
      .setColor(0x1DB954)
      .setTitle('📑 Playlist added to queue')
      .setDescription(`**[${res.playlist.title}](${res.playlist.url})** with ${res.tracks.length} tracks.`)
      .setThumbnail(res.playlist.thumbnail || null)
      .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });
  } else {
    const track = res.tracks[0];
    embed = new EmbedBuilder()
      .setColor(0x1DB954)
      .setTitle('🎵 Added to queue')
      .setDescription(`**[${track.title}](${track.url})**`)
      .setThumbnail(track.thumbnail || null)
      .addFields(
        { name: 'Duration', value: track.duration, inline: true },
        { name: 'Author', value: track.author, inline: true }
      )
      .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });
  }
  return interaction.editReply({ embeds: [embed] });
}