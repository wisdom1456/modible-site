// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	
	// Google Analytics
	interface Window {
		dataLayer: any[];
		gtag: (...args: any[]) => void;
	}
}

export {};

