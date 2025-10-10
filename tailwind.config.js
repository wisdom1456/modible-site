/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Press Start 2P', 'Epilogue', 'system-ui', 'sans-serif'],
				interface: ['Epilogue', 'system-ui', 'sans-serif'],
				code: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
				label: ['IBM VGA', 'Epilogue', 'monospace']
			},
			colors: {
				'neon-purple': {
					900: '#1A0B2E',
					700: '#3D1F5C',
					500: '#7B2FBF',
					400: '#A855F7',
					200: '#D4A5FF'
				},
				'terminal-green': {
					DEFAULT: '#10B981',
					glow: '#34D399',
					dim: '#059669'
				},
				'crt': {
					black: '#0A0A0A',
					900: '#1C1C1E',
					800: '#2C2C2E',
					700: '#2C2C2E',
					500: '#48484A',
					300: '#8E8E93',
					white: '#F5F5F7'
				},
				'amber-warning': '#F59E0B',
				'cyan-info': '#06B6D4',
				'magenta-error': '#EC4899'
			}
		}
	},
	plugins: []
};

