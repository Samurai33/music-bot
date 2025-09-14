import { SlashCommandBuilder } from 'discord.js';
export const data = new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Para a reprodução e limpa a fila');
export async function execute(interaction, client) {
    const queue = client.player.nodes.get(interaction.guildId);
    if (!queue) {
        return interaction.reply({ content: 'Nada está tocando.', ephemeral: true });
    }
    queue.delete();
    return interaction.reply('⏹️ Reprodução parada e fila limpa.');
}
//# sourceMappingURL=stop.js.map