import 'dotenv/config';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';
import type { APIApplicationCommand } from 'discord.js';

// Import command definitions.  When you add new commands you must
// import them here and include them in the array below.
import { data as play } from './commands/play.js';
import { data as skip } from './commands/skip.js';
import { data as stop } from './commands/stop.js';
import { data as queueCmd } from './commands/queue.js';
import { data as pauseCmd } from './commands/pause.js';
import { data as resumeCmd } from './commands/resume.js';
import { data as nowplayingCmd } from './commands/nowplaying.js';
import { data as shuffleCmd } from './commands/shuffle.js';
import { data as loopCmd } from './commands/loop.js';

const commands = [
  play,
  skip,
  stop,
  queueCmd,
  pauseCmd,
  resumeCmd,
  nowplayingCmd,
  shuffleCmd,
  loopCmd
].map((cmd) => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

async function register() {
  try {
    console.log('🔃 Registrando comandos de barra...');
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_APP_ID!,
        process.env.GUILD_ID!
      ),
      { body: commands }
    );
    console.log('✅ Comandos registrados com sucesso.');
  } catch (error) {
    console.error('Erro ao registrar comandos:', error);
  }
}

register();