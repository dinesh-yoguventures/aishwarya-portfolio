<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import BentoAbout from '$lib/components/BentoAbout.svelte';
	import PerformanceSlider from '$lib/components/PerformanceSlider.svelte';
	import FeaturedWork from '$lib/components/FeaturedWork.svelte';
	import ArchitectureDrawer from '$lib/components/ArchitectureDrawer.svelte';
	import ExperienceTimeline from '$lib/components/ExperienceTimeline.svelte';
	import ContactFooter from '$lib/components/ContactFooter.svelte';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import BookingModal from '$lib/components/BookingModal.svelte';
	import type { CaseStudy } from '$lib/data/portfolioData';

	let isBookingOpen = $state(false);
	let isCommandPaletteOpen = $state(false);
	let selectedSpecStudy = $state<CaseStudy | null>(null);

	function openBooking() {
		isBookingOpen = true;
	}

	function closeBooking() {
		isBookingOpen = false;
	}

	function openCommandPalette() {
		isCommandPaletteOpen = true;
	}

	function closeCommandPalette() {
		isCommandPaletteOpen = false;
	}

	function inspectSpec(study: CaseStudy) {
		selectedSpecStudy = study;
	}

	function closeSpecDrawer() {
		selectedSpecStudy = null;
	}
</script>

<div class="min-h-screen bg-[#fbf9f6] text-[#241916] selection:bg-[#9a0002] selection:text-[#fbf9f6]">
	<!-- Top Navigation Bar -->
	<Navbar
		onOpenBooking={openBooking}
		onOpenCommandPalette={openCommandPalette}
	/>

	<main>
		<!-- 1. Hero Section: Asymmetrical Split Layout -->
		<Hero />

		<!-- 2. "About Me" & Competencies: Bento-Grid Layout -->
		<BentoAbout />

		<!-- 4. Interactive "Before/After" Modernization Slider Component -->
		<PerformanceSlider />

		<!-- 3. Featured Architectural Case Studies Section (01 — 03) -->
		<FeaturedWork onInspectSpec={inspectSpec} />

		<!-- 4. Interactive Experience Timeline (Chronological ⟷ Impact View) -->
		<ExperienceTimeline />

		<!-- 5. Contact Section & Editorial Footer -->
		<ContactFooter onOpenBooking={openBooking} />
	</main>

	<!-- Slide-over Architecture Spec Modal Drawer -->
	<ArchitectureDrawer
		study={selectedSpecStudy}
		onClose={closeSpecDrawer}
	/>

	<!-- Interactive Terminal / Command Palette (Cmd + K) -->
	<CommandPalette
		isOpen={isCommandPaletteOpen}
		onClose={closeCommandPalette}
		onOpenBooking={openBooking}
	/>

	<!-- Call Booking Modal -->
	<BookingModal
		isOpen={isBookingOpen}
		onClose={closeBooking}
	/>
</div>
