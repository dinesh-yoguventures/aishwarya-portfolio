<script lang="ts">
	import { ArrowUpRight, Search, Calendar, Copy, Check } from 'lucide-svelte';
	import { PERSONAL_INFO } from '$lib/data/portfolioData';

	let { onOpenBooking, onOpenCommandPalette } = $props<{
		onOpenBooking: () => void;
		onOpenCommandPalette: () => void;
	}>();

	let emailCopied = $state(false);

	function copyEmail() {
		navigator.clipboard.writeText(PERSONAL_INFO.email);
		emailCopied = true;
		setTimeout(() => {
			emailCopied = false;
		}, 2400);
	}
</script>

<header class="sticky top-0 z-40 w-full border-b border-[#E5E7EB] bg-[#F8F9FA]/95 backdrop-blur-md transition-all">
	<div class="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Brand Monogram & Name -->
		<div class="flex items-center gap-3">
			<a href="#hero" class="group flex items-center gap-2.5 focus:outline-none">
				<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F172A] text-xs font-bold tracking-wider text-white transition-transform group-hover:scale-105">
					{PERSONAL_INFO.monogram}
				</span>
				<span class="text-base font-semibold tracking-tight text-[#0F172A] group-hover:text-black">
					{PERSONAL_INFO.name}
				</span>
			</a>
			<span class="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800">
				<span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
				Open for Senior SDE Roles
			</span>
		</div>

		<!-- Desktop Navigation Links -->
		<nav class="hidden md:flex items-center gap-8 text-sm font-medium text-[#64748B]">
			<a href="#about" class="transition-colors hover:text-[#0F172A]">About</a>
			<a href="#experience" class="transition-colors hover:text-[#0F172A]">Experience</a>
			<a href="#projects" class="transition-colors hover:text-[#0F172A]">Projects</a>
			<a href="#performance-lab" class="transition-colors hover:text-[#0F172A]">Performance Lab</a>
			<a href="#contact" class="transition-colors hover:text-[#0F172A]">Contact</a>
		</nav>

		<!-- Right Action Buttons -->
		<div class="flex items-center gap-2.5 sm:gap-3">
			<!-- Quick Command Palette Pill -->
			<button
				type="button"
				onclick={onOpenCommandPalette}
				class="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs text-[#64748B] shadow-2xs hover:border-[#CBD5E1] hover:text-[#0F172A] transition-all cursor-pointer"
				title="Open Command Palette (⌘K)"
			>
				<Search class="h-3.5 w-3.5 text-[#64748B]" />
				<span class="font-mono text-[11px] bg-[#F1F5F9] px-1.5 py-0.5 rounded text-[#475569]">⌘K</span>
			</button>

			<!-- Quick Copy Email Button -->
			<button
				type="button"
				onclick={copyEmail}
				class="relative hidden lg:inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-xs font-medium text-[#0F172A] shadow-2xs hover:bg-[#F8F9FA] transition-all cursor-pointer"
			>
				{#if emailCopied}
					<Check class="h-3.5 w-3.5 text-emerald-600" />
					<span class="text-emerald-700 font-medium">Copied!</span>
				{:else}
					<Copy class="h-3.5 w-3.5 text-[#64748B]" />
					<span>Email</span>
				{/if}
			</button>

			<!-- Book Call Pill Button -->
			<button
				type="button"
				onclick={onOpenBooking}
				class="inline-flex items-center gap-1.5 rounded-full bg-[#0F172A] px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-sm transition-all hover:bg-black hover:shadow-md active:scale-95 cursor-pointer"
			>
				<span>Book Call</span>
				<ArrowUpRight class="h-4 w-4" />
			</button>
		</div>
	</div>
</header>
