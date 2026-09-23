<script lang="ts">
	import { ArrowDownRight, Copy, Check, ExternalLink, ArrowDown } from 'lucide-svelte';
	import { PERSONAL_INFO } from '$lib/data/portfolioData';

	let copied = $state(false);

	function copyEmail() {
		navigator.clipboard.writeText(PERSONAL_INFO.email);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2600);
	}
</script>

<section id="hero" class="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between overflow-hidden border-b border-[#E5E7EB] bg-[#F8F9FA] pt-8 pb-8 lg:pt-14 lg:pb-12">
	<!-- Background subtle grid pattern -->
	<div class="pointer-events-none absolute inset-0 bg-grid-pattern opacity-60"></div>

	<div class="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
			
			<!-- Left Margin Framing: Rotated Vertical Text (hidden on tiny screens, prominent on lg) -->
			<div class="hidden lg:flex lg:col-span-1 items-start justify-center pt-8">
				<div class="flex flex-col items-center gap-6">
					<div class="w-px h-16 bg-[#CBD5E1]"></div>
					<div class="origin-center -rotate-90 whitespace-nowrap text-[11px] font-mono uppercase tracking-[0.3em] text-[#64748B] select-none">
						{PERSONAL_INFO.role} &bull; {PERSONAL_INFO.year}
					</div>
					<div class="w-px h-24 bg-[#CBD5E1]"></div>
				</div>
			</div>

			<!-- Center/Left Column Typography & Metrics -->
			<div class="col-span-1 lg:col-span-6 flex flex-col justify-center">
				<!-- Top Floating Metric Badges -->
				<div class="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-lg">
					<div class="rounded-xl border border-[#E5E7EB] bg-white p-3.5 shadow-2xs transition-all hover:border-[#CBD5E1] hover:shadow-sm">
						<div class="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">{PERSONAL_INFO.stats.experience}</div>
						<div class="text-[11px] sm:text-xs font-medium text-[#64748B] leading-tight mt-0.5">{PERSONAL_INFO.stats.experienceLabel}</div>
					</div>
					<div class="rounded-xl border border-[#E5E7EB] bg-white p-3.5 shadow-2xs transition-all hover:border-[#CBD5E1] hover:shadow-sm">
						<div class="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A]">{PERSONAL_INFO.stats.users}</div>
						<div class="text-[11px] sm:text-xs font-medium text-[#64748B] leading-tight mt-0.5">{PERSONAL_INFO.stats.usersLabel}</div>
					</div>
					<div class="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5 shadow-2xs transition-all hover:border-emerald-300">
						<div class="text-xl sm:text-2xl font-bold tracking-tight text-emerald-800">{PERSONAL_INFO.stats.optimization}</div>
						<div class="text-[11px] sm:text-xs font-medium text-emerald-700 leading-tight mt-0.5">{PERSONAL_INFO.stats.optimizationLabel}</div>
					</div>
				</div>

				<!-- Large Geometric Headline -->
				<h1 class="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[#0F172A] leading-none mb-6">
					{PERSONAL_INFO.headline}
				</h1>

				<!-- Sub-headline -->
				<p class="text-lg sm:text-xl lg:text-[22px] font-normal text-[#334155] leading-relaxed max-w-xl mb-8">
					<span class="text-[#0F172A] font-semibold">&mdash; I'm Aishwarya S</span>, a Senior Frontend Engineer based in Bangalore. With 7+ years of experience building enterprise web portals across Energy, Banking &amp; RegTech domains.
				</p>

				<!-- Action Buttons & Micro-Interactions -->
				<div class="flex flex-wrap items-center gap-3.5 sm:gap-4">
					<!-- Primary View Architecture Button -->
					<a
						href="#projects"
						class="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-black hover:shadow-lg active:scale-95"
					>
						<span>View Architecture</span>
						<ArrowDownRight class="h-4 w-4" />
					</a>

					<!-- Copy Email Button with Animated State -->
					<button
						type="button"
						onclick={copyEmail}
						class="relative inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-medium text-[#0F172A] shadow-2xs transition-all hover:border-[#0F172A] hover:bg-[#F8F9FA] active:scale-95 cursor-pointer"
						title="Click to copy email address"
					>
						{#if copied}
							<Check class="h-4 w-4 text-emerald-600 animate-bounce" />
							<span class="text-emerald-700 font-semibold">[ Email Copied to Clipboard &check; ]</span>
						{:else}
							<Copy class="h-4 w-4 text-[#64748B]" />
							<span>Copy Email</span>
							<span class="hidden sm:inline text-xs font-mono text-[#94A3B8]">({PERSONAL_INFO.email})</span>
						{/if}
					</button>

					<!-- LinkedIn Profile Link -->
					<a
						href={PERSONAL_INFO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 rounded-full border border-transparent px-3 py-3 text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-white/60 transition-all"
					>
						<span>LinkedIn</span>
						<ExternalLink class="h-3.5 w-3.5" />
					</a>
				</div>
			</div>

			<!-- Right Column Visual: High-Contrast Grayscale Portrait -->
			<div class="col-span-1 lg:col-span-5 flex justify-center lg:justify-end">
				<div class="relative w-full max-w-md">
					<!-- Frame with subtle shadow and border -->
					<div class="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-xl transition-all duration-500 hover:shadow-2xl">
						
						<!-- Grayscale portrait image with crisp cut-out framing -->
						<div class="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-neutral-100">
							<img
								src="/aishwarya-portrait.jpg"
								alt="Aishwarya S — Senior Frontend Engineer"
								class="h-full w-full object-cover object-top grayscale contrast-110 filter transition-transform duration-700 ease-out group-hover:scale-103"
								loading="eager"
							/>
							
							<!-- Subtle gradient overlay at bottom -->
							<div class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

							<!-- In-photo floating caption tags -->
							<div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
								<div class="flex items-center gap-2">
									<span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
									<span class="text-xs font-medium tracking-wide">Application Developer</span>
								</div>
								<span class="rounded bg-black/60 px-2 py-0.5 font-mono text-[11px] backdrop-blur-sm text-neutral-200">
									Angular 17 • Liferay DXP
								</span>
							</div>
						</div>

						<!-- Bottom Sub-card Info -->
						<div class="mt-3 flex items-center justify-between px-1 py-1 text-xs text-[#64748B]">
							<div class="flex items-center gap-1.5">
								<span class="font-mono text-[#0F172A] font-medium">Bangalore, IN</span>
								<span>&bull;</span>
								<span>IBM Senior SDE</span>
							</div>
							<div class="font-mono text-[11px] text-[#94A3B8]">
								7+ YOE &bull; REGULATED DOMAINS
							</div>
						</div>
					</div>

					<!-- Decorative background accent card -->
					<div class="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-[#CBD5E1]/60 bg-white/40"></div>
				</div>
			</div>

		</div>
	</div>

	<!-- Bottom Section Divider & Scroll Indicator -->
	<div class="relative mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between border-t border-[#E5E7EB] pt-4 text-xs font-mono text-[#64748B]">
			<a href="#about" class="group flex items-center gap-2 hover:text-[#0F172A] transition-colors">
				<span>Scroll down</span>
				<ArrowDown class="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
			</a>
			<div class="hidden sm:block text-[11px] tracking-widest uppercase">
				Enterprise Portal Modernization &bull; RegTech &bull; Energy Storage
			</div>
			<div>
				REF: AIS-SDE-2026
			</div>
		</div>
	</div>
</section>
