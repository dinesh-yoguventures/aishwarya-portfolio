<script lang="ts">
	import { ArrowUpRight, Menu, X, Search, Sparkles } from 'lucide-svelte';
	import { PERSONAL_INFO } from '$lib/data/portfolioData';

	let { onOpenBooking, onOpenCommandPalette } = $props<{
		onOpenBooking?: () => void;
		onOpenCommandPalette?: () => void;
	}>();

	let mobileMenuOpen = $state(false);

	const navItems = [
		{
			label: 'About',
			href: '#about',
			number: '01'
		},
		{
			label: 'Experience',
			href: '#experience',
			number: '02'
		},
		{
			label: 'Projects',
			href: '#projects',
			number: '03'
		},
		{
			label: 'Performance Lab',
			href: '#performance-lab',
			number: '04'
		},
		{
			label: 'Contact',
			href: '#contact',
			number: '05'
		}
	];

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleActionClick(e: MouseEvent) {
		if (onOpenBooking) {
			e.preventDefault();
			onOpenBooking();
		}
	}
</script>

<!-- =========================================================
	ARCHITECTURAL NAVBAR — CREAM VANILLA & CHERRY COLA
========================================================= -->

<header
	class="sticky top-0 z-50 border-b border-[#241916]/[0.06] bg-[#fbf9f6]/85 backdrop-blur-xl transition-all duration-300 shadow-2xs"
>
	<!-- Top Hairline Accent in Cherry Cola -->
	<div
		class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#9a0002]/40 to-transparent"
	></div>

	<nav
		class="relative mx-auto flex h-[82px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16"
		aria-label="Main navigation"
	>
		<!-- =================================================
			LEFT — BRAND MONOGRAM & IDENTITY
		================================================= -->
		<a
			href="#hero"
			class="group flex shrink-0 items-center gap-3.5 focus:outline-none"
			aria-label="Aishwarya S — Home"
		>
			<!-- AS Monogram Tile -->
			<div
				class="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-[#9a0002]/40 bg-[#9a0002] font-serif text-[13px] font-bold tracking-tight text-[#f7f3ee] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#7d0002] group-hover:shadow-md"
			>
				<span class="relative z-10">AS</span>

				<!-- Architectural geometric corner accent -->
				<span class="absolute right-0 bottom-0 h-2.5 w-2.5 border-t border-l border-[#f7f3ee]/50"
				></span>
			</div>

			<!-- Name & Discipline -->
			<div>
				<div class="flex items-center gap-2">
					<span
						class="font-serif text-[18px] font-semibold tracking-[-0.015em] text-[#241916] transition-colors group-hover:text-[#9a0002]"
					>
						Aishwarya S
					</span>
					<span class="hidden h-1.5 w-1.5 animate-pulse rounded-full bg-[#9a0002] xl:inline-block"
					></span>
				</div>

				<div
					class="font-mono text-[10px] tracking-[0.2em] text-[#7a6a63] uppercase transition-colors group-hover:text-[#241916]"
				>
					Senior SDE &bull; Bangalore
				</div>
			</div>
		</a>

		<!-- =================================================
			CENTER — EDITORIAL DESKTOP LINKS (ENLARGED & ENHANCED HOVER)
		================================================= -->
		<div class="hidden items-center gap-1 lg:flex xl:gap-2">
			{#each navItems as item}
				<a
					href={item.href}
					class="group relative flex items-center gap-2.5 rounded-full px-4 py-2 font-serif text-[15px] font-medium text-[#5c4a43] transition-all duration-300 hover:bg-[#9a0002]/8 hover:text-[#9a0002] hover:shadow-2xs active:scale-98 xl:text-[16px]"
				>
					<!-- Index Number Badge -->
					<span
						class="font-mono text-[10px] font-semibold tracking-wider text-[#9a0002]/75 transition-all duration-300 group-hover:scale-110 group-hover:text-[#9a0002]"
					>
						{item.number}
					</span>

					<!-- Label -->
					<span
						class="tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5"
					>
						{item.label}
					</span>

					<!-- Micro Accent Indicator on Hover -->
					<span
						class="inline-block scale-0 text-[10px] text-[#9a0002] transition-transform duration-300 group-hover:scale-100"
					>
						✦
					</span>

					<!-- Bottom Hover Line Bar -->
					<span
						class="absolute right-4 bottom-1 left-4 h-[2px] scale-x-0 rounded-full bg-[#9a0002] transition-transform duration-300 ease-out group-hover:scale-x-100"
					></span>
				</a>
			{/each}
		</div>

		<!-- =================================================
			RIGHT — ACTIONS (SEARCH CMD+K & CTA)
		================================================= -->
		<div class="flex items-center gap-2.5 sm:gap-3.5">
			<!-- Interactive Command Palette Trigger (Cmd + K) -->
			<button
				type="button"
				onclick={onOpenCommandPalette}
				class="group hidden h-10 cursor-pointer items-center gap-2.5 rounded-full border border-[#241916]/[0.08] bg-white/70 px-3.5 text-[#5c4a43] shadow-2xs backdrop-blur-md transition-all duration-300 hover:border-[#9a0002]/40 hover:bg-white hover:text-[#9a0002] sm:inline-flex"
				title="Open Terminal Command Palette (⌘K)"
			>
				<Search
					class="h-3.5 w-3.5 text-[#7a6a63] transition-transform duration-300 group-hover:scale-115 group-hover:text-[#9a0002]"
				/>

				<span class="font-mono text-[11px] font-medium tracking-wider text-[#241916]">
					SEARCH
				</span>

				<kbd
					class="shadow-3xs rounded border border-[#241916]/[0.08] bg-[#fbf9f6] px-1.5 py-0.5 font-mono text-[10px] text-[#7a6a63] transition-colors group-hover:border-[#9a0002]/40 group-hover:text-[#9a0002]"
				>
					⌘K
				</kbd>
			</button>

			<!-- Primary Action Button: "Let's Talk" / "Book Call" -->
			<a
				href="#contact"
				onclick={handleActionClick}
				class="group relative inline-flex h-10 cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-[#9a0002] px-5 text-[13px] font-medium text-[#f7f3ee] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-[#7a0002] hover:shadow-md active:scale-95 sm:px-6 sm:text-[14px]"
			>
				<span class="relative z-10 tracking-tight">Let's talk</span>

				<ArrowUpRight
					class="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
				/>

				<!-- Shimmer hover overlay -->
				<span
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
				></span>
			</a>

			<!-- Mobile Menu Hamburger Button -->
			<button
				type="button"
				class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#241916]/[0.08] bg-white/70 text-[#5c4a43] shadow-2xs backdrop-blur-md transition-colors hover:border-[#9a0002] hover:text-[#9a0002] lg:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={mobileMenuOpen}
			>
				{#if mobileMenuOpen}
					<X class="h-5 w-5 text-[#9a0002]" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</nav>

	<!-- =====================================================
		MOBILE NAVIGATION ACCORDION / DRAWER
	===================================================== -->
	{#if mobileMenuOpen}
		<div class="animate-in slide-in-from-top-2 border-t border-[#241916]/[0.06] bg-[#fbf9f6]/95 backdrop-blur-xl duration-200">
			<div class="mx-auto max-w-[1440px] space-y-4 px-5 py-6 sm:px-8">
				<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
					{#each navItems as item}
						<a
							href={item.href}
							onclick={closeMobileMenu}
							class="group flex items-center justify-between rounded-xl border border-[#241916]/[0.08] bg-white/80 px-5 py-4 transition-all duration-200 hover:border-[#9a0002]/40 hover:bg-[#9a0002]/8"
						>
							<div class="flex items-center gap-3">
								<span class="font-mono text-xs font-semibold text-[#9a0002]">
									{item.number}
								</span>
								<span
									class="font-serif text-[17px] font-medium text-[#241916] group-hover:text-[#9a0002]"
								>
									{item.label}
								</span>
							</div>

							<ArrowUpRight
								class="h-4 w-4 text-[#7a6a63] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#9a0002]"
							/>
						</a>
					{/each}
				</div>

				<!-- Mobile Command Palette & Contact CTA Quick Actions -->
				<div class="grid grid-cols-1 gap-2 border-t border-[#ded6ce] pt-2 sm:grid-cols-2">
					{#if onOpenCommandPalette}
						<button
							type="button"
							onclick={() => {
								closeMobileMenu();
								onOpenCommandPalette?.();
							}}
							class="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#d2c7bf] bg-[#fbf8f5] py-3 font-mono text-xs font-medium text-[#241916] hover:border-[#9a0002]"
						>
							<Search class="h-4 w-4 text-[#9a0002]" />
							<span>Search Architecture (⌘K)</span>
						</button>
					{/if}

					<a
						href="#contact"
						onclick={(e) => {
							closeMobileMenu();
							handleActionClick(e);
						}}
						class="flex items-center justify-center gap-2 rounded-xl bg-[#9a0002] py-3 text-xs font-medium text-[#f7f3ee] hover:bg-[#7a0002] sm:text-sm"
					>
						<span>Schedule Architecture Call</span>
						<ArrowUpRight class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
