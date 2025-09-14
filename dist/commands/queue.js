import { SlashCommandBuilder } from 'discord.js';
export const data = new SlashCommandBuilder()
    .setName('queue')
    .setDescription('Mostra a fila de reprodução');
export async function execute(interaction, client) {
    const queue = client.player.nodes.get(interaction.guildId);
    if (!queue || queue.tracks.size === 0) {
        return interaction.reply({ content: 'A fila está vazia.', ephemeral: true });
    }
    const tracks = queue.tracks.toArray();
    const current = queue.currentTrack;
    let response = `🎶 **Fila atual:**\n`;
    if (current) {
        response += `Agora tocando: **${current.title}** [${current.duration}]\n\n`;
    }
    // Mostra até 10 próximas faixas para evitar respostas muito longas.
    const lines = tracks
        .map((t, i) => `${i + 1}. ${t.title} [${t.duration}]`)
        .slice(0, 10)
        .join('\n');
    response += lines;
    if (tracks.length > 10) {
        response += `\n... e ${tracks.length - 10} mais.`;
    }
    return interaction.reply(response);
}
//# sourceMappingURL=queue.js.map