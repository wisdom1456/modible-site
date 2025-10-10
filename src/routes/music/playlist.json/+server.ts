import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const playlist = [
		{
			"id": "dancing-sunlight",
			"title": "Dancing Sunlight",
			"artist": "Modible",
			"src": "/music/dancing-sunlight.mp3"
		},
		{
			"id": "echo",
			"title": "Echo",
			"artist": "Modible",
			"src": "/music/Echo.mp3"
		},
		{
			"id": "echoes-of-the-deep",
			"title": "Echoes of the Deep",
			"artist": "Modible",
			"src": "/music/echoes-of-the-deep.mp3"
		},
		{
			"id": "let-the-memories-go",
			"title": "Let the Memories Go",
			"artist": "Modible",
			"src": "/music/let-the-memories-go.mp3"
		},
		{
			"id": "my-heartbeat",
			"title": "My Heartbeat",
			"artist": "Modible",
			"src": "/music/my-heartbeat.mp3"
		},
		{
			"id": "my-heartbeat-alt",
			"title": "My Heartbeat (Alternative)",
			"artist": "Modible",
			"src": "/music/my-heartbeat-alt.mp3"
		},
		{
			"id": "untitled",
			"title": "Untitled",
			"artist": "Modible",
			"src": "/music/Untitled.mp3"
		},
		{
			"id": "bcb",
			"title": "BCB",
			"artist": "Modible",
			"src": "/music/bcb.mp3"
		},
		{
			"id": "lofi-green",
			"title": "Lofi Green",
			"artist": "Modible",
			"src": "/music/lofi-green.mp3"
		},
		{
			"id": "quarter",
			"title": "Quarter",
			"artist": "Modible",
			"src": "/music/quarter.mp3"
		},
		{
			"id": "quarter-alt",
			"title": "Quarter (Alternative)",
			"artist": "Modible",
			"src": "/music/quarter-alt.mp3"
		}
	];

	return new Response(JSON.stringify(playlist), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'max-age=3600'
		}
	});
};
