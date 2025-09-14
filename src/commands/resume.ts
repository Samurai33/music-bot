import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('resume')
  .setDescription('Retoma a música se estiver pausada');

export async function execute(
  interaction: ChatInputCommandInteraction,
  client: any
) {
  const queue = client.player.nodes.get(interaction.guildId!);
  if (!queue || !queue.node.isPaused()) {
    return interaction.reply({ content: 'Não há música pausada para retomar.', ephemeral: true });
  }
  queue.node.resume();
  return interaction.reply('▶️ Música retomada.');
}