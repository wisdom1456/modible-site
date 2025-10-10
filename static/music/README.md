# Music Directory

This directory contains audio files for the global music player.

## Adding Music

1. **Add your MP3 files** to this directory (e.g., `retro-wave.mp3`, `digital-dreams.mp3`)

2. **Update `playlist.json`** with your track information:

```json
[
  {
    "id": "unique-track-id",
    "title": "Track Title",
    "artist": "Artist Name",
    "src": "/music/filename.mp3"
  }
]
```

## File Format Recommendations

- **Format**: MP3 (best browser compatibility)
- **Bitrate**: 128-192 kbps (balance quality and file size)
- **Sample Rate**: 44.1 kHz
- **Channels**: Stereo

## Notes

- The global music player will automatically load tracks from `playlist.json`
- The player supports play/pause, next/previous, shuffle, and loop modes
- The player will automatically pause when embedded blog music plays
- Tracks are lazy-loaded (only downloaded when played)

## Embedded Music in Blog Posts

To add music to individual blog posts/essays, use the `EmbeddedMusicPlayer` component:

```markdown
<script>
  import EmbeddedMusicPlayer from '$lib/components/content/EmbeddedMusicPlayer.svelte';
</script>

<EmbeddedMusicPlayer 
  src="/music/blog-track.mp3" 
  title="Behind the Scenes Track" 
/>
```

The embedded player will automatically pause the global player when it starts playing.

