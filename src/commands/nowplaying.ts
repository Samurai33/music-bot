

import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('nowplaying')
  .setDescription('Show the currently playing track');

/**
 * Shows the currently playing track in a modern Discord embed.
 * @param interaction The command interaction
 * @param client The Discord client (with .player)
 */
export async function execute(
  interaction: ChatInputCommandInteraction,
  client: any
) {
  const queue = client.player.nodes.get(interaction.guildId!);
  if (!queue || !queue.currentTrack) {
    return interaction.reply({ content: 'Nothing is currently playing.', ephemeral: true });
  }
  const track = queue.currentTrack;
  const requester = track.requestedBy
    ? (track.requestedBy.tag || track.requestedBy.username || track.requestedBy.id)
    : 'Unknown';

  const embed = new EmbedBuilder()
    .setColor(0x1DB954)
    .setTitle('🎧 Now Playing')
    .setDescription(`**[${track.title}](${track.url})**`)
    .setThumbnail(track.thumbnail || null)
    .addFields(
      { name: 'Duration', value: track.duration, inline: true },
      { name: 'Author', value: track.author, inline: true },
      { name: 'Requested by', value: requester, inline: true }
    )
    .setFooter({ text: 'Enjoy your music!', iconURL: interaction.client.user.displayAvatarURL() });

  return interaction.reply({ embeds: [embed] });
}