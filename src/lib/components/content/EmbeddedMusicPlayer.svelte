<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	
	export let src: string;
	export let title: string = 'Audio Track';
	
	let audioElement: HTMLAudioElement;
	let isPlaying = false;
	let currentTime = 0;
	let duration = 0;
	let volume = 0.7;
	
	function dispatchMusicEvent(type: 'play' | 'pause') {
		window.dispatchEvent(new CustomEvent(`embedded-music:${type}`));
	}
	
	function handlePlay() {
		isPlaying = true;
		dispatchMusicEvent('play');
	}
	
	function handlePause() {
		isPlaying = false;
		dispatchMusicEvent('pause');
	}
	
	function handleTimeUpdate() {
		if (audioElement) {
			currentTime = audioElement.currentTime;
		}
	}
	
	function handleLoadedMetadata() {
		if (audioElement) {
			duration = audioElement.duration;
		}
	}
	
	function handleEnded() {
		isPlaying = false;
		dispatchMusicEvent('pause');
	}
	
	function togglePlay() {
		if (audioElement) {
			if (isPlaying) {
				audioElement.pause();
			} else {
				audioElement.play();
			}
		}
	}
	
	function handleProgressClick(e: MouseEvent) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const percentage = x / rect.width;
		const newTime = percentage * duration;
		if (audioElement) {
			audioElement.currentTime = newTime;
		}
	}
	
	function formatTime(seconds: number): string {
		if (isNaN(seconds)) return '0:00';
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}
	
	onDestroy(() => {
		if (isPlaying) {
			dispatchMusicEvent('pause');
		}
	});
</script>

<div class="embedded-player" role="region" aria-label="Embedded audio player">
	<audio
		bind:this={audioElement}
		{src}
		on:play={handlePlay}
		on:pause={handlePause}
		on:timeupdate={handleTimeUpdate}
		on:loadedmetadata={handleLoadedMetadata}
		on:ended={handleEnded}
		preload="metadata"
	/>
	
	<div class="player-container">
		<button
			class="play-button"
			on:click={togglePlay}
			aria-label={isPlaying ? 'Pause' : 'Play'}
		>
			{isPlaying ? '⏸' : '▶'}
		</button>
		
		<div class="player-info">
			<div class="track-title">{title}</div>
			
			<button
				class="progress-bar"
				on:click={handleProgressClick}
				role="slider"
				aria-label="Seek"
				aria-valuemin="0"
				aria-valuemax={duration}
				aria-valuenow={currentTime}
			>
				<div 
					class="progress-fill" 
					style="width: {duration > 0 ? (currentTime / duration) * 100 : 0}%"
				></div>
			</button>
			
			<div class="time-display">
				<span>{formatTime(currentTime)}</span>
				<span>{formatTime(duration)}</span>
			</div>
		</div>
	</div>
</div>

<style>
	.embedded-player {
		margin: var(--space-lg) 0;
		padding: var(--space-md);
		background: var(--surface-2);
		border: 2px solid;
		border-color: var(--crt-gray-300) var(--crt-black) var(--crt-black) var(--crt-gray-300);
		border-radius: var(--radius-sm);
	}
	
	.player-container {
		display: flex;
		align-items: center;
		gap: var(--space-md);
	}
	
	.play-button {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--neon-purple-700);
		border: 2px solid var(--neon-purple-500);
		color: var(--crt-white);
		font-size: 1.25rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--duration-fast);
	}
	
	.play-button:hover {
		background: var(--neon-purple-500);
		box-shadow: 0 0 12px var(--neon-purple-400);
		transform: scale(1.05);
	}
	
	.play-button:active {
		transform: scale(0.98);
	}
	
	.play-button:focus {
		outline: none;
		box-shadow: var(--focus-ring);
	}
	
	.player-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		min-width: 0;
	}
	
	.track-title {
		font-family: var(--font-interface);
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--crt-white);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.progress-bar {
		width: 100%;
		height: 6px;
		background: var(--crt-black);
		border: 1px solid var(--crt-gray-500);
		border-radius: 3px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		padding: 0;
		display: block;
	}
	
	.progress-bar:focus {
		outline: none;
		box-shadow: var(--focus-ring);
	}
	
	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--terminal-green-dim), var(--terminal-green));
		transition: width 0.1s linear;
		box-shadow: 0 0 6px var(--terminal-green);
	}
	
	.time-display {
		display: flex;
		justify-content: space-between;
		font-family: var(--font-code);
		font-size: 0.625rem;
		color: var(--terminal-green);
	}
	
	@media (max-width: 768px) {
		.embedded-player {
			padding: var(--space-sm);
		}
		
		.player-container {
			gap: var(--space-sm);
		}
		
		.play-button {
			width: 40px;
			height: 40px;
			font-size: 1rem;
		}
	}
</style>

