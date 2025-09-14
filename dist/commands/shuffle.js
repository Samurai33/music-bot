import { SlashCommandBuilder } from 'discord.js';
export const data = new SlashCommandBuilder()
    .setName('shuffle')
    .setDescription('Embaralha as músicas da fila');
export async function execute(interaction, client) {
    const queue = client.player.nodes.get(interaction.guildId);
    if (!queue || queue.tracks.size < 2) {
        return interaction.reply({ content: 'Não há músicas suficientes na fila para embaralhar.', ephemeral: true });
    }
    queue.tracks.shuffle();
    return interaction.reply('🔀 Fila embaralhada.');
}
//# sourceMappingURL=shuffle.js.map