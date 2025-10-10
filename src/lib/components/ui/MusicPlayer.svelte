<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { musicPlayer, progressPercentage } from '$lib/stores/musicPlayer';
	
	let audioElement: HTMLAudioElement;
	let isCollapsed = false;
	let reducedMotion = false;
	let isMobile = false;
	
	onMount(() => {
		// Check for reduced motion
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		reducedMotion = motionQuery.matches;
		
		// Check for mobile
		isMobile = window.innerWidth <= 768;
		
		const motionHandler = (e: MediaQueryListEvent) => {
			reducedMotion = e.matches;
		};
		
		const resizeHandler = () => {
			isMobile = window.innerWidth <= 768;
		};
		
		motionQuery.addEventListener('change', motionHandler);
		window.addEventListener('resize', resizeHandler);
		
		// Listen for embedded player events
		const handleEmbeddedPlay = () => {
			musicPlayer.pauseByEmbedded();
		};
		
		const handleEmbeddedPause = () => {
			musicPlayer.resumeFromEmbedded();
		};
		
		window.addEventListener('embedded-music:play', handleEmbeddedPlay);
		window.addEventListener('embedded-music:pause', handleEmbeddedPause);
		
		return () => {
			motionQuery.removeEventListener('change', motionHandler);
			window.removeEventListener('resize', resizeHandler);
			window.removeEventListener('embedded-music:play', handleEmbeddedPlay);
			window.removeEventListener('embedded-music:pause', handleEmbeddedPause);
		};
	});
	
	// Sync audio element with store
	$: if (audioElement) {
		if ($musicPlayer.isPlaying) {
			audioElement.play().catch(err => {
				console.warn('Audio playback failed:', err);
				musicPlayer.pause();
			});
		} else {
			audioElement.pause();
		}
		
		audioElement.volume = $musicPlayer.volume;
		
		if (Math.abs(audioElement.currentTime - $musicPlayer.currentTime) > 1) {
			audioElement.currentTime = $musicPlayer.currentTime;
		}
	}
	
	function handleTimeUpdate() {
		if (audioElement) {
			musicPlayer.setCurrentTime(audioElement.currentTime);
		}
	}
	
	function handleLoadedMetadata() {
		if (audioElement) {
			musicPlayer.setDuration(audioElement.duration);
		}
	}
	
	function handleEnded() {
		if ($musicPlayer.loop === 'one') {
			audioElement.currentTime = 0;
			audioElement.play();
		} else if ($musicPlayer.loop === 'all') {
			musicPlayer.next();
		} else {
			musicPlayer.pause();
		}
	}
	
	function handleProgressClick(e: MouseEvent) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const percentage = x / rect.width;
		const newTime = percentage * $musicPlayer.duration;
		musicPlayer.setCurrentTime(newTime);
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
	
	function handleKeyboard(e: KeyboardEvent) {
		if (e.key === ' ') {
			e.preventDefault();
			musicPlayer.toggle();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			musicPlayer.previous();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			musicPlayer.next();
		}
	}
</script>

{#if $musicPlayer.currentTrack}
	<div 
		class="music-player"
		class:collapsed={isCollapsed}
		class:mobile={isMobile}
		class:playing={$musicPlayer.isPlaying && !reducedMotion}
		role="region"
		aria-label="Music player"
	>
		<audio
			bind:this={audioElement}
			src={$musicPlayer.currentTrack.src}
			on:timeupdate={handleTimeUpdate}
			on:loadedmetadata={handleLoadedMetadata}
			on:ended={handleEnded}
		/>
		
		<button
			class="collapse-btn"
			on:click={() => isCollapsed = !isCollapsed}
			aria-label={isCollapsed ? 'Expand player' : 'Collapse player'}
		>
			{isCollapsed ? '▲' : '▼'}
		</button>
		
		<div class="cassette-body">
			<!-- Reels -->
			<div class="reels">
				<div class="reel left" class:spinning={$musicPlayer.isPlaying && !reducedMotion}>
					<div class="reel-center"></div>
					<div class="tape-spool" class:active={$musicPlayer.isPlaying && !reducedMotion}></div>
				</div>
				<div class="reel right" class:spinning={$musicPlayer.isPlaying && !reducedMotion}>
					<div class="reel-center"></div>
					<div class="tape-spool" class:active={$musicPlayer.isPlaying && !reducedMotion}></div>
				</div>
			</div>
			
			<!-- Tape Transport -->
			<div class="tape-transport" class:active={$musicPlayer.isPlaying && !reducedMotion}>
				<div class="tape-path"></div>
				<div class="tape-path"></div>
			</div>
			
			<!-- VU Meter -->
			<div class="vu-meter" class:active={$musicPlayer.isPlaying && !reducedMotion}>
				<div class="vu-bar"></div>
				<div class="vu-bar"></div>
				<div class="vu-bar"></div>
				<div class="vu-bar"></div>
				<div class="vu-bar"></div>
			</div>
			
			<!-- Track info -->
			<div class="track-info">
				<div class="track-title">{$musicPlayer.currentTrack.title}</div>
				<div class="track-artist">{$musicPlayer.currentTrack.artist}</div>
			</div>
			
			<!-- Progress bar -->
			<button
				class="progress-bar"
				on:click={handleProgressClick}
				role="slider"
				aria-label="Seek"
				aria-valuemin="0"
				aria-valuemax={$musicPlayer.duration}
				aria-valuenow={$musicPlayer.currentTime}
			>
				<div class="progress-fill" style="width: {$progressPercentage}%"></div>
			</button>
			
			<!-- Time display -->
			<div class="time-display">
				<span>{formatTime($musicPlayer.currentTime)}</span>
				<span>{formatTime($musicPlayer.duration)}</span>
			</div>
			
			<!-- Controls -->
			<div class="controls">
				<button
					class="control-btn"
					on:click={() => musicPlayer.previous()}
					aria-label="Previous track"
					title="Previous (←)"
				>
					⏮
				</button>
				
				<button
					class="control-btn play-btn"
					on:click={() => musicPlayer.toggle()}
					aria-label={$musicPlayer.isPlaying ? 'Pause' : 'Play'}
					title={$musicPlayer.isPlaying ? 'Pause (Space)' : 'Play (Space)'}
				>
					{$musicPlayer.isPlaying ? '⏸' : '▶'}
				</button>
				
				<button
					class="control-btn"
					on:click={() => musicPlayer.next()}
					aria-label="Next track"
					title="Next (→)"
				>
					⏭
				</button>
				
				<button
					class="control-btn"
					class:active={$musicPlayer.shuffle}
					on:click={() => musicPlayer.toggleShuffle()}
					aria-label="Toggle shuffle"
					aria-pressed={$musicPlayer.shuffle}
				>
					🔀
				</button>
				
				<button
					class="control-btn"
					class:active={$musicPlayer.loop !== 'none'}
					on:click={() => musicPlayer.toggleLoop()}
					aria-label="Toggle loop"
					aria-pressed={$musicPlayer.loop !== 'none'}
				>
					{$musicPlayer.loop === 'one' ? '🔂' : '🔁'}
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.music-player {
		position: fixed;
		bottom: var(--space-lg);
		right: var(--space-lg);
		z-index: var(--z-sticky);
		width: 320px;
		background: linear-gradient(135deg, var(--crt-gray-800) 0%, var(--crt-gray-900) 100%);
		border: 2px solid;
		border-color: var(--crt-gray-300) var(--crt-black) var(--crt-black) var(--crt-gray-300);
		border-radius: var(--radius-sm);
		padding: var(--space-md);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
		transition: transform var(--duration-normal) var(--ease-default), box-shadow var(--duration-normal) var(--ease-default);
	}
	
	.music-player.playing {
		box-shadow: 
			0 8px 32px rgba(0, 0, 0, 0.5),
			0 0 20px rgba(139, 69, 19, 0.3),
			inset 0 0 20px rgba(139, 69, 19, 0.1);
		animation: cassetteGlow 3s ease-in-out infinite;
	}
	
	.music-player:focus {
		outline: none;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), var(--focus-ring);
	}
	
	.music-player.collapsed {
		transform: translateY(calc(100% - 48px));
	}
	
	.music-player.mobile {
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		border-radius: 0;
		border-left: none;
		border-right: none;
		border-bottom: none;
	}
	
	.collapse-btn {
		position: absolute;
		top: var(--space-xs);
		right: var(--space-xs);
		background: transparent;
		border: none;
		color: var(--terminal-green);
		cursor: pointer;
		padding: var(--space-xs);
		font-size: 0.875rem;
		transition: color var(--duration-fast);
	}
	
	.collapse-btn:hover {
		color: var(--terminal-green-glow);
	}
	
	.cassette-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}
	
	.reels {
		display: flex;
		justify-content: space-between;
		padding: var(--space-sm) var(--space-lg);
	}
	
	.reel {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--crt-gray-700);
		border: 2px solid var(--crt-gray-500);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	
	.reel.spinning {
		animation: spin 2s linear infinite;
	}
	
	.reel-center {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--crt-gray-900);
		border: 1px solid var(--crt-gray-500);
	}
	
	.tape-spool {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: transparent;
		border: 2px solid var(--crt-gray-600);
		opacity: 0.7;
		transition: opacity var(--duration-fast);
	}
	
	.tape-spool.active {
		animation: tapeSpool 3s linear infinite;
		opacity: 1;
	}
	
	.tape-transport {
		position: relative;
		height: 8px;
		margin: var(--space-xs) var(--space-lg);
		opacity: 0.3;
		transition: opacity var(--duration-fast);
	}
	
	.tape-transport.active {
		opacity: 0.8;
	}
	
	.tape-path {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, 
			transparent 0%, 
			var(--terminal-green) 20%, 
			var(--terminal-green-glow) 50%, 
			var(--terminal-green) 80%, 
			transparent 100%
		);
		background-size: 200% 100%;
		animation: tapeFlow 2s linear infinite;
	}
	
	.tape-path:nth-child(2) {
		top: 6px;
		animation-delay: 1s;
		animation-direction: reverse;
	}
	
	.vu-meter {
		display: flex;
		justify-content: center;
		align-items: end;
		gap: 2px;
		height: 20px;
		margin: var(--space-xs) var(--space-lg);
		opacity: 0.3;
		transition: opacity var(--duration-fast);
	}
	
	.vu-meter.active {
		opacity: 0.8;
	}
	
	.vu-bar {
		width: 3px;
		background: var(--terminal-green);
		border-radius: 1px;
		transition: height var(--duration-fast);
	}
	
	.vu-bar:nth-child(1) {
		height: 4px;
		animation: vuPulse1 1.5s ease-in-out infinite;
	}
	
	.vu-bar:nth-child(2) {
		height: 8px;
		animation: vuPulse2 1.2s ease-in-out infinite;
	}
	
	.vu-bar:nth-child(3) {
		height: 12px;
		animation: vuPulse3 1.8s ease-in-out infinite;
	}
	
	.vu-bar:nth-child(4) {
		height: 16px;
		animation: vuPulse4 1.1s ease-in-out infinite;
	}
	
	.vu-bar:nth-child(5) {
		height: 20px;
		animation: vuPulse5 1.6s ease-in-out infinite;
	}
	
	@keyframes spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
	
	@keyframes tapeSpool {
		0% { transform: translate(-50%, -50%) rotate(0deg); }
		100% { transform: translate(-50%, -50%) rotate(360deg); }
	}
	
	@keyframes tapeFlow {
		0% { background-position: -200% 0; }
		100% { background-position: 200% 0; }
	}
	
	@keyframes cassetteGlow {
		0%, 100% { 
			box-shadow: 
				0 8px 32px rgba(0, 0, 0, 0.5),
				0 0 20px rgba(139, 69, 19, 0.3),
				inset 0 0 20px rgba(139, 69, 19, 0.1);
		}
		50% { 
			box-shadow: 
				0 8px 32px rgba(0, 0, 0, 0.5),
				0 0 30px rgba(139, 69, 19, 0.5),
				inset 0 0 30px rgba(139, 69, 19, 0.2);
		}
	}
	
	@keyframes vuPulse1 {
		0%, 100% { height: 4px; opacity: 0.6; }
		50% { height: 8px; opacity: 1; }
	}
	
	@keyframes vuPulse2 {
		0%, 100% { height: 8px; opacity: 0.7; }
		50% { height: 12px; opacity: 1; }
	}
	
	@keyframes vuPulse3 {
		0%, 100% { height: 12px; opacity: 0.8; }
		50% { height: 16px; opacity: 1; }
	}
	
	@keyframes vuPulse4 {
		0%, 100% { height: 16px; opacity: 0.9; }
		50% { height: 18px; opacity: 1; }
	}
	
	@keyframes vuPulse5 {
		0%, 100% { height: 20px; opacity: 1; }
		50% { height: 20px; opacity: 0.8; }
	}
	
	.track-info {
		text-align: center;
		padding: var(--space-xs);
	}
	
	.track-title {
		font-family: var(--font-interface);
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--crt-white);
		margin-bottom: var(--space-xs);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.track-artist {
		font-family: var(--font-interface);
		font-size: 0.75rem;
		color: var(--crt-gray-300);
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
		background: linear-gradient(90deg, var(--neon-purple-700), var(--neon-purple-400));
		transition: width 0.1s linear;
		box-shadow: 0 0 8px var(--neon-purple-400);
	}
	
	.time-display {
		display: flex;
		justify-content: space-between;
		font-family: var(--font-code);
		font-size: 0.625rem;
		color: var(--terminal-green);
		padding: 0 var(--space-xs);
	}
	
	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: var(--space-sm);
		padding-top: var(--space-xs);
	}
	
	.control-btn {
		background: var(--surface-2);
		border: 1px solid var(--crt-gray-500);
		border-radius: var(--radius-sm);
		color: var(--crt-white);
		cursor: pointer;
		padding: var(--space-xs) var(--space-sm);
		font-size: 1rem;
		transition: all var(--duration-fast);
		min-width: 36px;
		min-height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.control-btn:hover {
		background: var(--surface-3);
		border-color: var(--terminal-green);
		transform: translateY(-1px);
	}
	
	.control-btn:active {
		transform: translateY(0);
	}
	
	.control-btn:focus {
		outline: none;
		box-shadow: var(--focus-ring);
	}
	
	.control-btn.play-btn {
		font-size: 1.25rem;
		min-width: 44px;
		min-height: 44px;
		background: var(--neon-purple-700);
		border-color: var(--neon-purple-500);
	}
	
	.control-btn.play-btn:hover {
		background: var(--neon-purple-500);
		box-shadow: 0 0 12px var(--neon-purple-400);
	}
	
	.control-btn.active {
		color: var(--terminal-green);
		border-color: var(--terminal-green);
	}
	
	@media (max-width: 768px) {
		.reels {
			padding: var(--space-xs) var(--space-md);
		}
		
		.reel {
			width: 32px;
			height: 32px;
		}
		
		.reel-center {
			width: 10px;
			height: 10px;
		}
		
		.controls {
			gap: var(--space-xs);
		}
		
		.control-btn {
			min-width: 32px;
			min-height: 32px;
			font-size: 0.875rem;
		}
		
		.control-btn.play-btn {
			min-width: 40px;
			min-height: 40px;
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		.reel.spinning,
		.tape-spool.active,
		.tape-path,
		.music-player.playing,
		.vu-bar {
			animation: none;
		}
		
		.music-player.playing {
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
		}
		
		.vu-bar {
			height: 8px !important;
			opacity: 0.7;
		}
	}
</style>

