<script lang="ts">
	import { spring } from 'svelte/motion';

	let coordsPoint = spring({ x: 0, y: 0 });
	let coordsCircle = spring({ x: 0, y: 0 }, { stiffness: 0.15, damping: 1.25 });

	function handleMouseMove(event: MouseEvent) {
		coordsPoint.set({ x: event.clientX, y: event.clientY });
		coordsCircle.set({ x: event.clientX, y: event.clientY });
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />
<svg class="w-full h-full fixed pointer-events-none select-none opacity-95 z-30">
	<circle
		cx={$coordsPoint.x}
		cy={$coordsPoint.y}
		fill="white"
		r="10px"
		filter="url(#blur)"
		viewBox="200 200 200 200"
	/>
	<circle
		cx={$coordsCircle.x}
		cy={$coordsCircle.y}
		fill="none"
		stroke="white"
		r="40px"
		filter="url(#blur)"
		viewBox="200 200 200 200"
	/>
</svg>
