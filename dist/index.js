import 'dotenv/config';
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js';
import { createPlayer } from './player.js';
// Extend the Discord.js Client with custom properties for commands and the audio player.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages
    ],
    partials: [Partials.Channel]
});
// Initialise the audio player and command collection.
client.player = createPlayer(client);
client.commands = new Collection();
// Import each command module and register it in the collection.  When
// adding new commands you must also import them here.
import * as playCmd from './commands/play.js';
import * as skipCmd from './commands/skip.js';
import * as stopCmd from './commands/stop.js';
import * as queueCmd from './commands/queue.js';
import * as pauseCmd from './commands/pause.js';
import * as resumeCmd from './commands/resume.js';
import * as nowplayingCmd from './commands/nowplaying.js';
import * as shuffleCmd from './commands/shuffle.js';
import * as loopCmd from './commands/loop.js';
const commandModules = [
    playCmd,
    skipCmd,
    stopCmd,
    queueCmd,
    pauseCmd,
    resumeCmd,
    nowplayingCmd,
    shuffleCmd,
    loopCmd
];
for (const mod of commandModules) {
    client.commands.set(mod.data.name, mod);
}
client.on('clientReady', () => {
    console.log(`[BOT] Logged in as ${client.user?.tag}`);
});
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand())
        return;
    const command = client.commands.get(interaction.commandName);
    if (!command)
        return;
    try {
        await command.execute(interaction, client);
    }
    catch (err) {
        console.error(err);
        if (interaction.deferred || interaction.replied) {
            await interaction.editReply('⚠️ Erro ao executar o comando.');
        }
        else {
            await interaction.reply({ content: '⚠️ Erro ao executar o comando.', ephemeral: true });
        }
    }
});
// Log in to Discord using the bot token from the .env file.
client.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=index.js.map