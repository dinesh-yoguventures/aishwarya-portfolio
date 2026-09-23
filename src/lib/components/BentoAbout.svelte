<script lang="ts">
	import { MapPin, Globe, Sparkles, TrendingUp, Layers, CheckCircle2, Award, Zap } from 'lucide-svelte';
	import { TECH_STACK, PERSONAL_INFO } from '$lib/data/portfolioData';

	let activeTechFilter = $state<string | null>(null);

	function toggleTechFilter(name: string) {
		activeTechFilter = activeTechFilter === name ? null : name;
	}
</script>

<section id="about" class="relative py-20 lg:py-28 bg-[#F8F9FA] border-b border-[#E5E7EB]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
			<div>
				<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#64748B]">
					<span class="inline-block h-2 w-2 rounded-full bg-[#0F172A]"></span>
					About &amp; Core Competencies
				</div>
				<h2 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0F172A]">
					Architectural Foundations
				</h2>
			</div>
			<p class="max-w-md text-sm sm:text-base text-[#64748B] font-normal leading-relaxed">
				Enterprise frontend engineering anchored in modularity, rigorous performance optimization, and mission-critical domain systems.
			</p>
		</div>

		<!-- Bento Grid -->
		<div class="grid grid-cols-1 md:grid-cols-12 gap-6">

			<!-- Card 1: Highlight Card (White Surface, High Contrast) [Span 5 cols] -->
			<div class="md:col-span-5 flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-7 sm:p-9 shadow-sm transition-all hover:border-[#CBD5E1] hover:shadow-md">
				<div>
					<div class="flex items-center justify-between">
						<span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-mono font-medium text-emerald-800">
							<TrendingUp class="h-3.5 w-3.5" />
							Performance Milestone
						</span>
						<span class="font-mono text-xs text-[#94A3B8]">METRIC &bull; 01</span>
					</div>

					<div class="mt-8">
						<div class="text-6xl sm:text-7xl font-bold tracking-tight text-[#0F172A]">
							25–30%
						</div>
						<div class="mt-2 text-sm font-semibold tracking-wide text-emerald-700 uppercase">
							Page Load Gains
						</div>
					</div>

					<div class="my-6 h-px w-full bg-[#E5E7EB]"></div>

					<p class="text-base text-[#334155] leading-relaxed">
						Measurable page load optimization achieved leading UI framework upgrades across enterprise portals at IBM. Modernized legacy Angular structures into modular architectures serving 50,000+ global users.
					</p>
				</div>

				<div class="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-[#F1F5F9] text-xs">
					<div class="rounded-lg bg-[#F8F9FA] p-2.5">
						<span class="font-mono text-[#64748B] block text-[11px]">Time to Interactive</span>
						<span class="font-semibold text-[#0F172A]">4.8s &rarr; 1.4s</span>
					</div>
					<div class="rounded-lg bg-[#F8F9FA] p-2.5">
						<span class="font-mono text-[#64748B] block text-[11px]">Enterprise Scale</span>
						<span class="font-semibold text-emerald-700">50K+ Active Users</span>
					</div>
				</div>
			</div>

			<!-- Card 2: Interactive Tech Matrix Card [Span 7 cols] -->
			<div class="md:col-span-7 flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-7 sm:p-9 shadow-sm transition-all hover:border-[#CBD5E1] hover:shadow-md">
				<div>
					<div class="flex items-center justify-between mb-4">
						<div class="flex items-center gap-2">
							<Layers class="h-4 w-4 text-[#0F172A]" />
							<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#0F172A]">
								CORE TECH STACK
							</h3>
						</div>
						<span class="font-mono text-xs text-[#94A3B8]">FRAMEWORKS &amp; TOOLS</span>
					</div>

					<p class="text-sm text-[#64748B] mb-6">
						Production-tested architectural stack specializing in scalable enterprise single-page applications:
					</p>

					<!-- Tags styled like code tags with clean monospaced accents -->
					<div class="flex flex-wrap gap-2.5">
						{#each TECH_STACK as tech}
							<button
								type="button"
								onclick={() => toggleTechFilter(tech.name)}
								class="group inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-mono transition-all cursor-pointer {activeTechFilter === tech.name ? 'border-[#0F172A] bg-[#0F172A] text-white shadow-sm' : tech.highlighted ? 'border-[#E2E8F0] bg-[#F8F9FA] text-[#0F172A] hover:border-[#94A3B8] hover:bg-white' : 'border-[#EEF2F6] bg-white text-[#475569] hover:border-[#CBD5E1]'}"
							>
								<span class="text-amber-500 group-hover:scale-110 transition-transform">✦</span>
								<span class="font-medium">{tech.name}</span>
							</button>
						{/each}
					</div>
				</div>

				<!-- Code-like architectural note at bottom of Tech card -->
				<div class="mt-8 rounded-xl border border-[#E2E8F0] bg-[#0F172A] p-4 text-xs font-mono text-neutral-300">
					<div class="flex items-center gap-2 text-emerald-400 mb-1.5">
						<Zap class="h-3.5 w-3.5" />
						<span class="font-semibold text-emerald-300">Angular (8–17+) &amp; Liferay DXP Modern Architecture</span>
					</div>
					<div class="text-[11px] text-neutral-400 leading-relaxed">
						Signals-driven reactive state &bull; Standalone Component APIs &bull; RxJS stream multicasting &bull; Liferay portlet &amp; theme customization &bull; Zero Zone.js overhead.
					</div>
				</div>
			</div>

			<!-- Card 3: Leadership & Domains Card [Span 7 cols] -->
			<div class="md:col-span-7 rounded-2xl border border-[#E5E7EB] bg-white p-7 sm:p-9 shadow-sm transition-all hover:border-[#CBD5E1] hover:shadow-md">
				<div class="flex items-center justify-between mb-6">
					<div class="flex items-center gap-2">
						<Award class="h-4 w-4 text-[#0F172A]" />
						<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#0F172A]">
							LEADERSHIP &amp; REGULATED DOMAINS
						</h3>
					</div>
					<span class="font-mono text-xs text-[#94A3B8]">EXPERTISE</span>
				</div>

				<div class="h-px w-full bg-[#E5E7EB] mb-6"></div>

				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<span class="text-amber-500 mt-0.5 text-base">✦</span>
						<div>
							<strong class="font-semibold text-[#0F172A]">Regulated Domains: Energy, Banking &amp; Healthcare:</strong>
							<p class="text-sm text-[#475569] mt-0.5">
								Architected Battery Energy Storage Systems (BESS) real-time dashboards for FPL (USA), Anti-Money Laundering (AML/FATF) rule engines, and Basel II/III risk-weighted asset platforms.
							</p>
						</div>
					</li>

					<li class="flex items-start gap-3">
						<span class="text-amber-500 mt-0.5 text-base">✦</span>
						<div>
							<strong class="font-semibold text-[#0F172A]">Frontend SPOC &amp; Release Leadership:</strong>
							<p class="text-sm text-[#475569] mt-0.5">
								Acted as frontend Single Point of Contact (SPOC) for feature planning, code reviews, technical estimations, cross-functional sprint alignment (Product, Architecture, QA), and release coordination in Agile environments.
							</p>
						</div>
					</li>

					<li class="flex items-start gap-3">
						<span class="text-amber-500 mt-0.5 text-base">✦</span>
						<div>
							<strong class="font-semibold text-[#0F172A]">Liferay DXP &amp; Scalable Component Governance:</strong>
							<p class="text-sm text-[#475569] mt-0.5">
								Developed custom enterprise portals with Liferay DXP, themes, and reusable UI components. Mentored junior developers and standardized Jasmine &amp; Karma test suites with 85%+ branch coverage.
							</p>
						</div>
					</li>
				</ul>
			</div>

			<!-- Card 4: Location & Availability Card [Span 5 cols] -->
			<div class="md:col-span-5 flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-7 sm:p-9 shadow-sm transition-all hover:border-[#CBD5E1] hover:shadow-md">
				<div>
					<div class="flex items-center justify-between mb-6">
						<div class="flex items-center gap-2">
							<MapPin class="h-4 w-4 text-[#0F172A]" />
							<h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#0F172A]">
								LOCATION &amp; CREDENTIALS
							</h3>
						</div>
						<span class="font-mono text-xs text-[#94A3B8]">STATUS</span>
					</div>

					<div class="h-px w-full bg-[#E5E7EB] mb-6"></div>

					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#0F172A]">
								<MapPin class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-[#0F172A]">Bangalore, Karnataka - 560032</div>
								<div class="text-xs text-[#64748B] font-mono">IST (UTC+5:30) &bull; IBM Manyata Tech Park</div>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1F5F9] text-[#0F172A]">
								<Globe class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-[#0F172A]">Open for Global &amp; Hybrid Roles</div>
								<div class="text-xs text-[#64748B]">Senior Frontend / Lead Angular Engineer</div>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
								<CheckCircle2 class="h-4 w-4" />
							</div>
							<div>
								<div class="text-sm font-semibold text-emerald-800">B.Tech &bull; Information Technology</div>
								<div class="text-xs text-emerald-700">Anna University, Chennai (2018)</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-8 pt-4 border-t border-[#F1F5F9]">
					<a
						href="#contact"
						class="w-full inline-flex items-center justify-center rounded-xl bg-[#0F172A] py-2.5 text-xs font-medium text-white transition-all hover:bg-black"
					>
						Get in Touch &rarr;
					</a>
				</div>
			</div>

		</div>
	</div>
</section>
