import { Player } from 'discord-player';
import { SoundCloudExtractor } from '@discord-player/extractor';
import { YoutubeiExtractor } from 'discord-player-youtubei';
/**
 * Create and configure a Discord Player instance.  This function
 * registers the extractors you want to support and sets up some
 * helpful event listeners for common scenarios such as a new track
 * starting or an error occurring.
 *
 * @param client The Discord.js client the player will use for
 *               websocket connections.
 */
export function createPlayer(client) {
    const player = new Player(client, {
        // Increase the buffer size for streams to reduce stuttering on slow
        // connections.  See https://github.com/discord-player/discord-player#ytdl
        ytdlOptions: { highWaterMark: 1 << 25 }
    });
    // Register extractors for YouTube and SoundCloud.  You can add
    // additional extractors here if desired.
    // Use o extractor alternativo do youtubei para maior estabilidade
    player.extractors.unregister('youtube');
    player.extractors.register(YoutubeiExtractor, {});
    player.extractors.register(SoundCloudExtractor, {});
    // When a new track starts playing announce it in the associated text channel.
    player.events.on('playerStart', (queue, track) => {
        queue.metadata?.channel?.send(`🎶 **Tocando:** ${track.title}`);
    });
    // Handle errors by logging them and notifying the channel.
    player.events.on('error', (queue, err) => {
        console.error('Player error:', err);
        queue.metadata?.channel?.send(`⚠️ Erro no player: ${String(err).slice(0, 200)}`);
    });
    // playerError cobre erros de conexão/voz e outros problemas internos
    player.events.on('playerError', (queue, err) => {
        console.error('Player internal error:', err);
        queue.metadata?.channel?.send(`⚠️ Erro interno do player: ${String(err).slice(0, 200)}`);
    });
    // Substitua o registro do YoutubeExtractor por:
    // (já feito acima)
    return player;
}
//# sourceMappingURL=player.js.map