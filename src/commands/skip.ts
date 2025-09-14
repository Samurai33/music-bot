import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('skip')
  .setDescription('Pula a música atual');

export async function execute(
  interaction: ChatInputCommandInteraction,
  client: any
) {
  const queue = client.player.nodes.get(interaction.guildId!);
  if (!queue || !queue.node.isPlaying()) {
    return interaction.reply({ content: 'Nenhuma música está tocando.', ephemeral: true });
  }
  // Tente pular a faixa atual.
  const current = queue.currentTrack;
  queue.node.skip();
  return interaction.reply(
    current
      ? `⏭️ Pulando **${current.title}**...`
      : '⏭️ Pulando para a próxima faixa...'
  );
}