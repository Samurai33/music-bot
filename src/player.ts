import { Player } from 'discord-player';
import type { Client } from 'discord.js';
import { SoundCloudExtractor } from '@discord-player/extractor';
import { YoutubeiExtractor } from 'discord-player-youtubei';
import { EmbedBuilder } from 'discord.js';

/**
 * Create and configure a Discord Player instance.  This function
 * registers the extractors you want to support and sets up some
 * helpful event listeners for common scenarios such as a new track
 * starting or an error occurring.
 *
 * @param client The Discord.js client the player will use for
 *               websocket connections.
 */
export function createPlayer(client: Client) {
  const player = new Player(client, {
    // Player options (none needed for ytdlOptions in v7+)
  });

  // Register extractors for YouTube and SoundCloud.  You can add
  // additional extractors here if desired.
  // Use o extractor alternativo do youtubei para maior estabilidade
  player.extractors.unregister('youtube');
  player.extractors.register(YoutubeiExtractor, {});
  player.extractors.register(SoundCloudExtractor, {});



  // Announce when a new track starts
  player.events.on('playerStart', (queue: any, track: any) => {
    const embed = new EmbedBuilder()
      .setColor(0x1DB954)
      .setTitle('🎶 Now Playing')
      .setDescription(`**[${track.title}](${track.url})**`)
      .setThumbnail(track.thumbnail || null)
      .addFields(
        { name: 'Duration', value: track.duration, inline: true },
        { name: 'Author', value: track.author, inline: true },
        { name: 'Requested by', value: track.requestedBy?.tag || track.requestedBy?.username || 'Unknown', inline: true }
      )
      .setFooter({ text: 'Enjoy your music!' });
    queue.metadata?.channel?.send({ embeds: [embed] }).catch(() => {});
  });

  // Only supported events below. If you want to handle queue end, use 'emptyQueue' or 'disconnect' for logging.



  // Handle errors by logging them and notifying the channel with embeds
  player.events.on('error', (queue: any, err: any) => {
    console.error('Player error:', err);
    const embed = new EmbedBuilder()
      .setColor(0xED4245)
      .setTitle('⚠️ Player Error')
      .setDescription(String(err).slice(0, 200));
    queue.metadata?.channel?.send({ embeds: [embed] }).catch(() => {});
  });

  player.events.on('playerError', (queue: any, err: any) => {
    console.error('Player internal error:', err);
    const embed = new EmbedBuilder()
      .setColor(0xED4245)
      .setTitle('⚠️ Internal Player Error')
      .setDescription(String(err).slice(0, 200));
    queue.metadata?.channel?.send({ embeds: [embed] }).catch(() => {});
  });

  // Log disconnects and idle events for debugging
  player.events.on('disconnect', (queue: any) => {
    console.log('Disconnected from voice channel in guild:', queue.guild?.id);
  });
  player.events.on('emptyChannel', (queue: any) => {
    console.log('Voice channel is empty, will leave:', queue.guild?.id);
  });
  player.events.on('emptyQueue', (queue: any) => {
    console.log('Queue is empty, will leave soon:', queue.guild?.id);
  });
  player.events.on('debug', (queue: any, message: string) => {
    console.log(`[Player Debug] ${message}`);
  });

  return player;
}