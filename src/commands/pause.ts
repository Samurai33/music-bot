import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('pause')
  .setDescription('Pausa a música atual');

export async function execute(
  interaction: ChatInputCommandInteraction,
  client: any
) {
  const queue = client.player.nodes.get(interaction.guildId!);
  if (!queue || !queue.node.isPlaying()) {
    return interaction.reply({ content: 'Nenhuma música está tocando.', ephemeral: true });
  }
  if (queue.node.isPaused()) {
    return interaction.reply({ content: 'A música já está pausada.', ephemeral: true });
  }
  queue.node.pause();
  return interaction.reply('⏸️ Música pausada.');
}