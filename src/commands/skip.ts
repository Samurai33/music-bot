import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('skip')
  .setDescription('Skip the current track');

export async function execute(
  interaction: ChatInputCommandInteraction,
  client: any
) {
  const queue = client.player.nodes.get(interaction.guildId!);
  if (!queue || !queue.node.isPlaying()) {
    return interaction.reply({ content: 'Nothing is currently playing.', ephemeral: true });
  }
  const current = queue.currentTrack;
  await queue.node.skip();
  const embed = new EmbedBuilder()
    .setColor(0x1DB954)
    .setTitle('⏭️ Track Skipped')
    .setDescription(current
      ? `Skipped **[${current.title}](${current.url})**.`
      : 'Skipped to the next track.');
  return interaction.reply({ embeds: [embed] });
}