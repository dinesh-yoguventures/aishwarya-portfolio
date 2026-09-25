<script lang="ts">
	import { MapPin, Globe, Layers, CheckCircle2, Award, Zap, TrendingUp } from 'lucide-svelte';
	import { TECH_STACK } from '$lib/data/portfolioData';

	let activeTechFilter = $state<string | null>(null);

	function toggleTechFilter(name: string) {
		activeTechFilter = activeTechFilter === name ? null : name;
	}
</script>

<section id="about" class="relative py-20 lg:py-28 bg-transparent text-[#241916]">
	<!-- Background Accents: 2 Separated Dreamy Gradient Spreads (Seamless Flow) -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<!-- Spread 1: Primary Cherry Bloom on top-right -->
		<div class="dreamy-spread-primary -top-12 -right-16 opacity-45"></div>
		<!-- Spread 2: Secondary Amber/Peach Bloom on bottom-left -->
		<div class="dreamy-spread-secondary -bottom-16 -left-12 opacity-40"></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
			<div>
				<div class="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.22em] text-[#9a0002]">
					<span class="inline-block h-1.5 w-1.5 rounded-full bg-[#9a0002]"></span>
					About &amp; Core Competencies
				</div>
				<h2 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[-0.03em] text-[#241916]">
					Architectural Foundations
				</h2>
			</div>
			<p class="max-w-md text-base sm:text-lg text-[#4b3932] font-normal leading-relaxed">
				Enterprise frontend engineering anchored in modularity, rigorous performance optimization, and mission-critical domain systems.
			</p>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-6">

			<!-- Card 1: Highlight Card [Span 5 cols] -->
			<div class="md:col-span-5 flex flex-col justify-between rounded-2xl card-glass p-7 sm:p-9 shadow-sm transition-all duration-300">
				<div>
					<div class="flex items-center justify-between">
						<span class="inline-flex items-center gap-1.5 rounded-full border border-[#9a0002]/30 bg-[#9a0002]/10 px-3 py-1 text-xs font-mono font-medium text-[#9a0002]">
							<TrendingUp class="h-3.5 w-3.5" />
							Performance Milestone
						</span>
						<span class="font-mono text-xs text-[#897870]">METRIC &bull; 01</span>
					</div>

					<div class="mt-8">
						<div class="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-[#9a0002]">
							25–30%
						</div>
						<div class="mt-2 text-xs font-mono font-semibold tracking-wider text-[#9a0002] uppercase">
							Page Load Gains
						</div>
					</div>

					<div class="my-6 h-px w-full bg-[#e3dedb]"></div>

					<p class="text-base sm:text-[17px] text-[#4b3932] leading-relaxed">
						Measurable page load optimization achieved leading UI framework upgrades across enterprise portals at IBM. Modernized legacy Angular structures into modular architectures serving 50,000+ global users.
					</p>
				</div>

				<div class="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-[#e3dedb] text-xs">
					<div class="rounded-xl border border-[#e3dedb] bg-white/70 p-3">
						<span class="font-mono text-[#897870] block text-[11px] uppercase tracking-wider">Time to Interactive</span>
						<span class="font-semibold text-[#241916] text-sm mt-0.5 block">4.8s &rarr; 1.4s</span>
					</div>
					<div class="rounded-xl border border-[#e3dedb] bg-white/70 p-3">
						<span class="font-mono text-[#897870] block text-[11px] uppercase tracking-wider">Enterprise Scale</span>
						<span class="font-semibold text-[#9a0002] text-sm mt-0.5 block">50K+ Active Users</span>
					</div>
				</div>
			</div>

			<!-- Card 2: Interactive Tech Matrix Card [Span 7 cols] -->
			<div class="md:col-span-7 flex flex-col justify-between rounded-2xl card-glass p-7 sm:p-9 shadow-sm transition-all duration-300">
				<div>
					<div class="flex items-center justify-between mb-4">
						<div class="flex items-center gap-2">
							<Layers class="h-4 w-4 text-[#9a0002]" />
							<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#241916]">
								CORE TECH STACK
							</h3>
						</div>
						<span class="font-mono text-xs text-[#897870]">FRAMEWORKS &amp; TOOLS</span>
					</div>

					<p class="text-sm text-[#4b3932] mb-6">
						Production-tested architectural stack specializing in scalable enterprise single-page applications:
					</p>

					<!-- Tags styled with white glass and cherry accents -->
					<div class="flex flex-wrap gap-2.5">
						{#each TECH_STACK as tech}
							<button
								type="button"
								onclick={() => toggleTechFilter(tech.name)}
								class="group inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-mono transition-all cursor-pointer {activeTechFilter === tech.name ? 'border-[#9a0002] bg-[#9a0002] text-[#f7f3ee] shadow-sm' : tech.highlighted ? 'border-[#9a0002]/30 bg-white text-[#241916] hover:border-[#9a0002]' : 'border-[#e3dedb] bg-white/60 text-[#4b3932] hover:border-[#9a0002]'}"
							>
								<span class="text-[#9a0002] group-hover:scale-110 transition-transform">✦</span>
								<span class="font-medium">{tech.name}</span>
							</button>
						{/each}
					</div>
				</div>

				<!-- Code-like architectural note at bottom of Tech card in Cherry Cola Noir -->
				<div class="mt-8 rounded-xl border border-[#9a0002]/30 bg-[#1e1310] p-4 text-xs font-mono text-[#f7f3ee] shadow-sm">
					<div class="flex items-center gap-2 text-[#f7f3ee] mb-1.5">
						<Zap class="h-3.5 w-3.5 text-[#ff8a6b]" />
						<span class="font-semibold text-[#f7f3ee]">Angular (8–17+) &amp; Liferay DXP Modern Architecture</span>
					</div>
					<div class="text-[11px] text-[#dac8b7] leading-relaxed">
						Signals-driven reactive state &bull; Standalone Component APIs &bull; RxJS stream multicasting &bull; Liferay portlet &amp; theme customization &bull; Zero Zone.js overhead.
					</div>
				</div>
			</div>

			<!-- Card 3: Leadership & Domains Card [Span 7 cols] -->
			<div class="md:col-span-7 rounded-2xl card-glass p-7 sm:p-9 shadow-sm transition-all duration-300">
				<div class="flex items-center justify-between mb-6">
					<div class="flex items-center gap-2">
						<Award class="h-4 w-4 text-[#9a0002]" />
						<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#241916]">
							LEADERSHIP &amp; REGULATED DOMAINS
						</h3>
					</div>
					<span class="font-mono text-xs text-[#897870]">EXPERTISE</span>
				</div>

				<div class="h-px w-full bg-[#e3dedb] mb-6"></div>

				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<span class="text-[#9a0002] mt-0.5 text-base font-bold">✦</span>
						<div>
							<strong class="font-semibold text-[#241916]">Regulated Domains: Energy, Banking &amp; Healthcare:</strong>
							<p class="text-sm text-[#4b3932] mt-0.5">
								Architected Battery Energy Storage Systems (BESS) real-time dashboards for FPL (USA), Anti-Money Laundering (AML/FATF) rule engines, and Basel II/III risk-weighted asset platforms.
							</p>
						</div>
					</li>

					<li class="flex items-start gap-3">
						<span class="text-[#9a0002] mt-0.5 text-base font-bold">✦</span>
						<div>
							<strong class="font-semibold text-[#241916]">Frontend SPOC &amp; Release Leadership:</strong>
							<p class="text-sm text-[#4b3932] mt-0.5">
								Acted as frontend Single Point of Contact (SPOC) for feature planning, code reviews, technical estimations, cross-functional sprint alignment (Product, Architecture, QA), and release coordination in Agile environments.
							</p>
						</div>
					</li>

					<li class="flex items-start gap-3">
						<span class="text-[#9a0002] mt-0.5 text-base font-bold">✦</span>
						<div>
							<strong class="font-semibold text-[#241916]">Liferay DXP &amp; Scalable Component Governance:</strong>
							<p class="text-sm text-[#4b3932] mt-0.5">
								Developed custom enterprise portals with Liferay DXP, themes, and reusable UI components. Mentored junior developers and standardized Jasmine &amp; Karma test suites with 85%+ branch coverage.
							</p>
						</div>
					</li>
				</ul>
			</div>

			<!-- Card 4: Location & Availability Card [Span 5 cols] -->
			<div class="md:col-span-5 flex flex-col justify-between rounded-2xl card-glass p-7 sm:p-9 shadow-sm transition-all duration-300">
				<div>
					<div class="flex items-center justify-between mb-6">
						<div class="flex items-center gap-2">
							<MapPin class="h-4 w-4 text-[#9a0002]" />
							<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#241916]">
								LOCATION &amp; CREDENTIALS
							</h3>
						</div>
						<span class="font-mono text-xs text-[#897870]">STATUS</span>
					</div>

					<div class="h-px w-full bg-[#e3dedb] mb-6"></div>

					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9a0002]/10 text-[#9a0002]">
								<MapPin class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-[#241916]">Bangalore, Karnataka - 560032</div>
								<div class="text-xs text-[#897870] font-mono">IST (UTC+5:30) &bull; IBM Manyata Tech Park</div>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9a0002]/10 text-[#9a0002]">
								<Globe class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-[#241916]">Open for Global &amp; Hybrid Roles</div>
								<div class="text-xs text-[#897870]">Senior Frontend / Lead Angular Engineer</div>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9a0002]/10 text-[#9a0002]">
								<CheckCircle2 class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-[#9a0002]">B.Tech &bull; Information Technology</div>
								<div class="text-xs text-[#897870]">Anna University, Chennai (2018)</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-8 pt-4 border-t border-[#e3dedb]">
					<a
						href="#contact"
						class="btn-primary w-full justify-center rounded-xl py-3 text-xs font-medium text-[#f7f3ee]"
					>
						<span class="relative z-10">Get in Touch &rarr;</span>
					</a>
				</div>
			</div>

		</div>
	</div>
</section>
