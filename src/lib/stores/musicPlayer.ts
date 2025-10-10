import { writable, derived } from 'svelte/store';

export interface Track {
	id: string;
	title: string;
	artist: string;
	src: string;
	duration?: number;
}

export interface MusicPlayerState {
	currentTrack: Track | null;
	isPlaying: boolean;
	volume: number;
	currentTime: number;
	duration: number;
	playlist: Track[];
	currentIndex: number;
	shuffle: boolean;
	loop: 'none' | 'one' | 'all';
	isPausedByEmbedded: boolean; // Track if paused by embedded player
}

const initialState: MusicPlayerState = {
	currentTrack: null,
	isPlaying: false,
	volume: 0.7,
	currentTime: 0,
	duration: 0,
	playlist: [],
	currentIndex: -1,
	shuffle: false,
	loop: 'all',
	isPausedByEmbedded: false
};

function createMusicPlayer() {
	const { subscribe, set, update } = writable<MusicPlayerState>(initialState);

	return {
		subscribe,
		
		setPlaylist: (tracks: Track[]) => {
			update(state => ({
				...state,
				playlist: tracks,
				currentIndex: tracks.length > 0 ? 0 : -1,
				currentTrack: tracks.length > 0 ? tracks[0] : null
			}));
		},
		
		play: () => {
			update(state => ({ ...state, isPlaying: true, isPausedByEmbedded: false }));
		},
		
		pause: () => {
			update(state => ({ ...state, isPlaying: false }));
		},
		
		pauseByEmbedded: () => {
			update(state => ({ 
				...state, 
				isPlaying: false, 
				isPausedByEmbedded: true 
			}));
		},
		
		resumeFromEmbedded: () => {
			update(state => {
				// Only resume if it was paused by an embedded player
				if (state.isPausedByEmbedded) {
					return { ...state, isPlaying: true, isPausedByEmbedded: false };
				}
				return state;
			});
		},
		
		toggle: () => {
			update(state => ({ ...state, isPlaying: !state.isPlaying }));
		},
		
		next: () => {
			update(state => {
				if (state.playlist.length === 0) return state;
				
				let nextIndex: number;
				if (state.shuffle) {
					nextIndex = Math.floor(Math.random() * state.playlist.length);
				} else {
					nextIndex = (state.currentIndex + 1) % state.playlist.length;
				}
				
				return {
					...state,
					currentIndex: nextIndex,
					currentTrack: state.playlist[nextIndex],
					currentTime: 0
				};
			});
		},
		
		previous: () => {
			update(state => {
				if (state.playlist.length === 0) return state;
				
				// If more than 3 seconds into the song, restart it
				if (state.currentTime > 3) {
					return { ...state, currentTime: 0 };
				}
				
				let prevIndex: number;
				if (state.shuffle) {
					prevIndex = Math.floor(Math.random() * state.playlist.length);
				} else {
					prevIndex = state.currentIndex - 1;
					if (prevIndex < 0) prevIndex = state.playlist.length - 1;
				}
				
				return {
					...state,
					currentIndex: prevIndex,
					currentTrack: state.playlist[prevIndex],
					currentTime: 0
				};
			});
		},
		
		setVolume: (volume: number) => {
			update(state => ({ ...state, volume: Math.max(0, Math.min(1, volume)) }));
		},
		
		setCurrentTime: (time: number) => {
			update(state => ({ ...state, currentTime: time }));
		},
		
		setDuration: (duration: number) => {
			update(state => ({ ...state, duration }));
		},
		
		toggleShuffle: () => {
			update(state => ({ ...state, shuffle: !state.shuffle }));
		},
		
		toggleLoop: () => {
			update(state => {
				const loopModes: Array<'none' | 'one' | 'all'> = ['none', 'one', 'all'];
				const currentIndex = loopModes.indexOf(state.loop);
				const nextIndex = (currentIndex + 1) % loopModes.length;
				return { ...state, loop: loopModes[nextIndex] };
			});
		},
		
		reset: () => {
			set(initialState);
		}
	};
}

export const musicPlayer = createMusicPlayer();

// Derived store for progress percentage
export const progressPercentage = derived(
	musicPlayer,
	$player => {
		if ($player.duration === 0) return 0;
		return ($player.currentTime / $player.duration) * 100;
	}
);

