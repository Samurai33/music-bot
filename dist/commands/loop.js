import { SlashCommandBuilder } from 'discord.js';
import { QueueRepeatMode } from 'discord-player';
export const data = new SlashCommandBuilder()
    .setName('loop')
    .setDescription('Define o modo de repetição da fila ou música atual')
    .addStringOption((option) => option
    .setName('mode')
    .setDescription('Modo de repetição')
    .setRequired(true)
    .addChoices({ name: 'off', value: 'off' }, { name: 'track', value: 'track' }, { name: 'queue', value: 'queue' }));
export async function execute(interaction, client) {
    const mode = interaction.options.getString('mode', true);
    const queue = client.player.nodes.get(interaction.guildId);
    if (!queue || !queue.currentTrack) {
        return interaction.reply({ content: 'Não há música tocando.', ephemeral: true });
    }
    let response = '';
    switch (mode) {
        case 'off':
            queue.setRepeatMode(QueueRepeatMode.OFF);
            response = '🔁 Repetição desativada.';
            break;
        case 'track':
            queue.setRepeatMode(QueueRepeatMode.TRACK);
            response = '🔂 Repetição de faixa ativada.';
            break;
        case 'queue':
            queue.setRepeatMode(QueueRepeatMode.QUEUE);
            response = '🔁 Repetição da fila ativada.';
            break;
        default:
            response = 'Modo inválido.';
    }
    return interaction.reply(response);
}
//# sourceMappingURL=loop.js.map