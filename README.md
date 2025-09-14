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
   ## 🚀 Quickstart

<div align="center">
   <h1>🎵 Music Bot</h1>
   <p>
      <b>Open Source Discord Music Bot</b> <br/>
      Built with <a href="https://discord.js.org">discord.js</a>, <a href="https://discord-player.js.org">discord-player</a> & TypeScript
   </p>
   <p>
      <a href="https://www.npmjs.com/package/discord-player"><img src="https://img.shields.io/npm/v/discord-player?color=blue" alt="npm"></a>
      <a href="LICENSE"><img src="https://img.shields.io/github/license/Samurai33/music-bot?color=brightgreen" alt="license"></a>
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

## 🚀 Quickstart

```bash
# 1. Clone the repository
git clone https://github.com/Samurai33/music-bot.git
cd music-bot

# 2. Configure your environment
cp .env.example .env
# Fill in DISCORD_TOKEN, DISCORD_APP_ID, and GUILD_ID in the .env file

# 3. Install dependencies
npm install

# 4. Register slash commands
npm run register

# 5. Start the bot
npm run dev
```

The bot will be online and ready to use in your Discord server!

---

## 🏗️ Production Build

```bash
npm run build
npm start
```

---

## 🛠️ Available Commands

- `/play <query>` — Play music by search or URL
- `/skip` — Skip the current track
- `/stop` — Stop playback and clear the queue
- `/queue` — Show the current queue
- `/pause` — Pause the current track
- `/resume` — Resume playback if paused
- `/nowplaying` — Show the currently playing track
- `/shuffle` — Shuffle the queue
- `/loop <off|track|queue>` — Set repeat mode

Feel free to modify or create new commands!

---

## 🤝 Contributing

Contributions are very welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

- Open issues for bugs, ideas, or questions
- Fork, create a branch, and submit your PR
- Join discussions in the [Discord community](https://discord.gg/discord-player)

---

## 📸 Screenshots

<p align="center">
   <img src="https://raw.githubusercontent.com/Samurai33/music-bot/main/.github/assets/screenshot1.png" width="400"/>
   <img src="https://raw.githubusercontent.com/Samurai33/music-bot/main/.github/assets/screenshot2.png" width="400"/>
</p>

---

## 📚 Useful Resources

- [discord-player documentation](https://discord-player.js.org/)
- [discord.js documentation](https://discord.js.org/#/docs)
- [Discord Bots Guide (2025)](https://discord.com/developers/docs/intro)

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

<div align="center">
   <b>⭐️ Star this project and share! Pull requests are very welcome! ⭐️</b>
</div>
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
