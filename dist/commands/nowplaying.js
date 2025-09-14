import { SlashCommandBuilder } from 'discord.js';
export const data = new SlashCommandBuilder()
    .setName('nowplaying')
    .setDescription('Mostra a música que está tocando agora');
export async function execute(interaction, client) {
    const queue = client.player.nodes.get(interaction.guildId);
    if (!queue || !queue.currentTrack) {
        return interaction.reply({ content: 'Não há música tocando agora.', ephemeral: true });
    }
    const track = queue.currentTrack;
    // Mostrar quem requisitou a música, se disponível.
    const requester = track.requestedBy
        ? (track.requestedBy.tag || track.requestedBy.username || track.requestedBy.id)
        : 'desconhecido';
    return interaction.reply(`🎧 **Agora tocando:** ${track.title} [${track.duration}] — requisitada por ${requester}`);
}
//# sourceMappingURL=nowplaying.js.map