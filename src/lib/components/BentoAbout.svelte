<script lang="ts">
	import { MapPin, Globe, Layers, CheckCircle2, Award, Zap, TrendingUp } from 'lucide-svelte';
	import { TECH_STACK } from '$lib/data/portfolioData';

	let activeTechFilter = $state<string | null>(null);

	function toggleTechFilter(name: string) {
		activeTechFilter = activeTechFilter === name ? null : name;
	}
</script>

<section id="about" class="relative py-20 lg:py-28 bg-[#efe6dd] border-b border-[#e2d5c7]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
			<div>
				<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#7a665e]">
					<span class="inline-block h-2 w-2 rounded-full bg-[#9a0002]"></span>
					About &amp; Core Competencies
				</div>
				<h2 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#231510]">
					Architectural Foundations
				</h2>
			</div>
			<p class="max-w-md text-base sm:text-lg text-[#695750] font-normal leading-relaxed">
				Enterprise frontend engineering anchored in modularity, rigorous performance optimization, and mission-critical domain systems.
			</p>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-6">

			<!-- Card 1: Highlight Card [Span 5 cols] -->
			<div class="md:col-span-5 flex flex-col justify-between rounded-2xl border border-[#e2d5c7] bg-[#fbf8f5] p-7 sm:p-9 shadow-sm transition-all hover:border-[#9a0002]/50 hover:shadow-md">
				<div>
					<div class="flex items-center justify-between">
						<span class="inline-flex items-center gap-1.5 rounded-full border border-[#9a0002]/30 bg-[#9a0002]/10 px-3 py-1 text-xs font-mono font-medium text-[#9a0002]">
							<TrendingUp class="h-3.5 w-3.5" />
							Performance Milestone
						</span>
						<span class="font-mono text-xs text-[#7a665e]">METRIC &bull; 01</span>
					</div>

					<div class="mt-8">
						<div class="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#9a0002]">
							25–30%
						</div>
						<div class="mt-2 text-xs font-mono font-semibold tracking-wider text-[#9a0002] uppercase">
							Page Load Gains
						</div>
					</div>

					<div class="my-6 h-px w-full bg-[#e2d5c7]"></div>

					<p class="text-base sm:text-[17px] text-[#3b271e] leading-relaxed">
						Measurable page load optimization achieved leading UI framework upgrades across enterprise portals at IBM. Modernized legacy Angular structures into modular architectures serving 50,000+ global users.
					</p>
				</div>

				<div class="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-[#e2d5c7] text-xs">
					<div class="rounded-lg bg-[#efe6dd] p-2.5">
						<span class="font-mono text-[#695750] block text-[11px]">Time to Interactive</span>
						<span class="font-semibold text-[#231510]">4.8s &rarr; 1.4s</span>
					</div>
					<div class="rounded-lg bg-[#efe6dd] p-2.5">
						<span class="font-mono text-[#695750] block text-[11px]">Enterprise Scale</span>
						<span class="font-semibold text-[#9a0002]">50K+ Active Users</span>
					</div>
				</div>
			</div>

			<!-- Card 2: Interactive Tech Matrix Card [Span 7 cols] -->
			<div class="md:col-span-7 flex flex-col justify-between rounded-2xl border border-[#e2d5c7] bg-[#fbf8f5] p-7 sm:p-9 shadow-sm transition-all hover:border-[#9a0002]/50 hover:shadow-md">
				<div>
					<div class="flex items-center justify-between mb-4">
						<div class="flex items-center gap-2">
							<Layers class="h-4 w-4 text-[#9a0002]" />
							<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#231510]">
								CORE TECH STACK
							</h3>
						</div>
						<span class="font-mono text-xs text-[#7a665e]">FRAMEWORKS &amp; TOOLS</span>
					</div>

					<p class="text-sm text-[#695750] mb-6">
						Production-tested architectural stack specializing in scalable enterprise single-page applications:
					</p>

					<!-- Tags styled with cream vanilla and cherry cola accents -->
					<div class="flex flex-wrap gap-2.5">
						{#each TECH_STACK as tech}
							<button
								type="button"
								onclick={() => toggleTechFilter(tech.name)}
								class="group inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-mono transition-all cursor-pointer {activeTechFilter === tech.name ? 'border-[#9a0002] bg-[#9a0002] text-[#efe6dd] shadow-sm' : tech.highlighted ? 'border-[#e2d5c7] bg-[#efe6dd]/70 text-[#231510] hover:border-[#9a0002] hover:bg-[#fbf8f5]' : 'border-[#e2d5c7]/60 bg-[#fbf8f5] text-[#695750] hover:border-[#9a0002]'}"
							>
								<span class="text-[#9a0002] group-hover:scale-110 transition-transform">✦</span>
								<span class="font-medium">{tech.name}</span>
							</button>
						{/each}
					</div>
				</div>

				<!-- Code-like architectural note at bottom of Tech card in Cherry Cola Noir -->
				<div class="mt-8 rounded-xl border border-[#9a0002]/40 bg-[#1f0405] p-4 text-xs font-mono text-[#efe6dd]">
					<div class="flex items-center gap-2 text-[#efe6dd] mb-1.5">
						<Zap class="h-3.5 w-3.5 text-[#ff8080]" />
						<span class="font-semibold text-[#ffb3b3]">Angular (8–17+) &amp; Liferay DXP Modern Architecture</span>
					</div>
					<div class="text-[11px] text-[#dac8b7] leading-relaxed">
						Signals-driven reactive state &bull; Standalone Component APIs &bull; RxJS stream multicasting &bull; Liferay portlet &amp; theme customization &bull; Zero Zone.js overhead.
					</div>
				</div>
			</div>

			<!-- Card 3: Leadership & Domains Card [Span 7 cols] -->
			<div class="md:col-span-7 rounded-2xl border border-[#e2d5c7] bg-[#fbf8f5] p-7 sm:p-9 shadow-sm transition-all hover:border-[#9a0002]/50 hover:shadow-md">
				<div class="flex items-center justify-between mb-6">
					<div class="flex items-center gap-2">
						<Award class="h-4 w-4 text-[#9a0002]" />
						<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#231510]">
							LEADERSHIP &amp; REGULATED DOMAINS
						</h3>
					</div>
					<span class="font-mono text-xs text-[#7a665e]">EXPERTISE</span>
				</div>

				<div class="h-px w-full bg-[#e2d5c7] mb-6"></div>

				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<span class="text-[#9a0002] mt-0.5 text-base font-bold">✦</span>
						<div>
							<strong class="font-semibold text-[#231510]">Regulated Domains: Energy, Banking &amp; Healthcare:</strong>
							<p class="text-sm text-[#3b271e] mt-0.5">
								Architected Battery Energy Storage Systems (BESS) real-time dashboards for FPL (USA), Anti-Money Laundering (AML/FATF) rule engines, and Basel II/III risk-weighted asset platforms.
							</p>
						</div>
					</li>

					<li class="flex items-start gap-3">
						<span class="text-[#9a0002] mt-0.5 text-base font-bold">✦</span>
						<div>
							<strong class="font-semibold text-[#231510]">Frontend SPOC &amp; Release Leadership:</strong>
							<p class="text-sm text-[#3b271e] mt-0.5">
								Acted as frontend Single Point of Contact (SPOC) for feature planning, code reviews, technical estimations, cross-functional sprint alignment (Product, Architecture, QA), and release coordination in Agile environments.
							</p>
						</div>
					</li>

					<li class="flex items-start gap-3">
						<span class="text-[#9a0002] mt-0.5 text-base font-bold">✦</span>
						<div>
							<strong class="font-semibold text-[#231510]">Liferay DXP &amp; Scalable Component Governance:</strong>
							<p class="text-sm text-[#3b271e] mt-0.5">
								Developed custom enterprise portals with Liferay DXP, themes, and reusable UI components. Mentored junior developers and standardized Jasmine &amp; Karma test suites with 85%+ branch coverage.
							</p>
						</div>
					</li>
				</ul>
			</div>

			<!-- Card 4: Location & Availability Card [Span 5 cols] -->
			<div class="md:col-span-5 flex flex-col justify-between rounded-2xl border border-[#e2d5c7] bg-[#fbf8f5] p-7 sm:p-9 shadow-sm transition-all hover:border-[#9a0002]/50 hover:shadow-md">
				<div>
					<div class="flex items-center justify-between mb-6">
						<div class="flex items-center gap-2">
							<MapPin class="h-4 w-4 text-[#9a0002]" />
							<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#231510]">
								LOCATION &amp; CREDENTIALS
							</h3>
						</div>
						<span class="font-mono text-xs text-[#7a665e]">STATUS</span>
					</div>

					<div class="h-px w-full bg-[#e2d5c7] mb-6"></div>

					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9a0002]/10 text-[#9a0002]">
								<MapPin class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-[#231510]">Bangalore, Karnataka - 560032</div>
								<div class="text-xs text-[#695750] font-mono">IST (UTC+5:30) &bull; IBM Manyata Tech Park</div>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9a0002]/10 text-[#9a0002]">
								<Globe class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-[#231510]">Open for Global &amp; Hybrid Roles</div>
								<div class="text-xs text-[#695750]">Senior Frontend / Lead Angular Engineer</div>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#9a0002]/10 text-[#9a0002]">
								<CheckCircle2 class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-[#9a0002]">B.Tech &bull; Information Technology</div>
								<div class="text-xs text-[#7a665e]">Anna University, Chennai (2018)</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-8 pt-4 border-t border-[#e2d5c7]">
					<a
						href="#contact"
						class="w-full inline-flex items-center justify-center rounded-xl bg-[#9a0002] py-2.5 text-xs font-medium text-[#efe6dd] transition-all hover:bg-[#7a0002]"
					>
						Get in Touch &rarr;
					</a>
				</div>
			</div>

		</div>
	</div>
</section>
