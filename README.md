<div align="center">
   <h1>🎵 Music Bot</h1>
   <p>
      <b>Open Source Discord Music Bot</b> <br/>
      Built with <a href="https://discord.js.org">discord.js</a>, <a href="https://discord-player.js.org">discord-player</a> & TypeScript
   </p>
   <p>
      <a href="https://www.npmjs.com/package/discord-player"><img src="https://img.shields.io/npm/v/discord-player?color=blue" alt="npm"></a>
      <a href="LICENSE"><img src="https://img.shields.io/github/license/SEU_USUARIO/music-bot?color=brightgreen" alt="license"></a>
      <a href="https://github.com/Samurai33/music-bot/issues"><img src="https://img.shields.io/github/issues/Samurai33/music-bot?color=yellow" alt="issues"></a>
      <a href="https://github.com/Samurai33/music-bot/pulls"><img src="https://img.shields.io/github/issues-pr/Samurai33/music-bot?color=orange" alt="pull requests"></a>
      <a href="https://github.com/Samurai33/music-bot/stargazers"><img src="https://img.shields.io/github/stars/Samurai33/music-bot?style=social" alt="stars"></a>
      <a href="https://discord.gg/discord-player"><img src="https://img.shields.io/discord/558328638911078401?label=discord&logo=discord&color=7289da" alt="discord"></a>
   </p>
      <img src="https://raw.githubusercontent.com/Samurai33/music-bot/main/.github/assets/demo.gif" alt="Music Bot Demo" width="600"/>
</div>

---

> **A modern, community-driven Discord music bot. Easy to deploy, extend, and contribute.**

---

## ✨ Features

- 🎶 **Play music from YouTube, SoundCloud, and more**
- 📝 **Slash commands** for all actions
- 🔁 Loop, shuffle, queue, pause, resume, now playing
- 🗑️ Auto-leave on empty
- 🛡️ Stable, up-to-date with Discord API
- 🧩 Easy to extend with your own commands
- 🌍 Open source & community-driven

---
# Music Bot

This project is a simple Discord music bot built with **Node.js**, **TypeScript**,
[`discord.js`](https://discord.js.org) and
[`discord-player`](https://github.com/discord-player/discord-player).  It
implements a handful of useful slash commands for playing and managing
music in your Discord guilds.

## Getting started

Follow these steps to run the bot locally:

1. **Clone** the repository and change into the project directory.
2. Copy the provided `.env.example` file to `.env` and fill in your
   own credentials:

   * `DISCORD_TOKEN` – your bot token from the Discord developer portal.
   * `DISCORD_APP_ID` – the application/client ID of your bot.
   * `GUILD_ID` – the ID of a test guild (server) where you can register
     slash commands during development.

3. **Install** dependencies with npm:

   ```bash
   npm install
   ```

4. **Register** slash commands for your development guild.  This writes
   the command definitions to Discord so you can use them immediately:

   ```bash
   ## 🚀 Quickstart

   ```bash
   # 1. Clone the repo
   git clone https://github.com/Samurai33/music-bot.git
   cd music-bot

   # 2. Configure your environment
   cp .env.example .env
   # Preencha DISCORD_TOKEN, DISCORD_APP_ID e GUILD_ID no arquivo .env

   # 3. Instale as dependências
   npm install

   # 4. Registre os comandos de barra (slash commands)
   npm run register

   # 5. Inicie o bot
   npm run dev
   ```

   O bot estará online e pronto para uso no seu servidor Discord!
## 🏗️ Build para produção

```bash
npm run build
npm start
```

---
## 🛠️ Comandos disponíveis

- `/play <query>` — Toca música por busca ou URL
- `/skip` — Pula a música atual
- `/stop` — Para a reprodução e limpa a fila
- `/queue` — Mostra a fila de reprodução
- `/pause` — Pausa a música atual
- `/resume` — Retoma a música se estiver pausada
- `/nowplaying` — Mostra a música que está tocando agora
- `/shuffle` — Embaralha as músicas da fila
- `/loop <off|track|queue>` — Define o modo de repetição

Sinta-se livre para modificar ou criar novos comandos!

---
## 🤝 Contribuindo

Contribuições são super bem-vindas! Veja o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

- Abra issues para bugs, ideias ou dúvidas
- Faça um fork, crie uma branch e envie seu PR
- Participe das discussões na [comunidade Discord](https://discord.gg/discord-player)

---
## 📸 Screenshots

<p align="center">
   <img src="https://raw.githubusercontent.com/Samurai33/music-bot/main/.github/assets/screenshot1.png" width="400"/>
   <img src="https://raw.githubusercontent.com/Samurai33/music-bot/main/.github/assets/screenshot2.png" width="400"/>
</p>

---
## 📚 Recursos úteis

- [Documentação do discord-player](https://discord-player.js.org/)
- [Documentação do discord.js](https://discord.js.org/#/docs)
- [Guia de bots Discord (2025)](https://discord.com/developers/docs/intro)

---
## 📝 Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---
<div align="center">
   <b>⭐️ Dê uma estrela no projeto e compartilhe! Pull requests são muito bem-vindos! ⭐️</b>
</div>
   ```

5. **Run** the bot in development mode:

   ```bash
   npm run dev
   ```

When the bot starts you should see a log message indicating it logged
in successfully.  You can then interact with it using slash commands
such as `/play`, `/skip`, etc., in your guild.

## Building for production

Compile the TypeScript sources into JavaScript and run the compiled
bundle:

```bash
npm run build
npm start
```

## Commands

The bot comes with the following slash commands:

- `/play <query>` – search for a track or playlist and add it to the queue.
- `/skip` – skip the current track.
- `/stop` – stop playback and clear the queue.
- `/queue` – display the current queue and what is playing.
- `/pause` – pause the currently playing track.
- `/resume` – resume playback.
- `/nowplaying` – show information about the current track.
- `/shuffle` – shuffle the remaining tracks in the queue.
- `/loop <off|track|queue>` – set the repeat mode.  Use `off` to
  disable looping, `track` to repeat the current track or `queue` to
  repeat the whole queue.

Feel free to modify or extend these commands to suit your needs.
