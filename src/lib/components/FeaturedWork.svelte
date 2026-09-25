<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { CASE_STUDIES, type CaseStudy } from '$lib/data/portfolioData';

	let { onInspectSpec } = $props<{
		onInspectSpec: (study: CaseStudy) => void;
	}>();
</script>

<section id="projects" class="relative py-20 lg:py-28 bg-transparent text-[#241916]">
	<!-- Background Accents: 2 Separated Dreamy Gradient Spreads (Seamless Flow) -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<!-- Spread 1: Primary Cherry Bloom on top-right -->
		<div class="dreamy-spread-primary -top-16 -right-16 opacity-45"></div>
		<!-- Spread 2: Secondary Amber/Peach Bloom on bottom-left -->
		<div class="dreamy-spread-secondary bottom-10 -left-14 opacity-40"></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-[#e3dedb] pb-6">
			<div>
				<div class="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.22em] text-[#9a0002]">
					<span class="inline-block h-1.5 w-1.5 rounded-full bg-[#9a0002]"></span>
					Architectural Case Studies
				</div>
				<h2 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[-0.03em] text-[#241916]">
					Featured Work (01 — 03)
				</h2>
			</div>
			<div class="text-xs font-mono tracking-wider text-[#897870] uppercase">
				MISSION-CRITICAL PORTALS &bull; REGTECH &bull; ENERGY
			</div>
		</div>

		<!-- Case Studies List -->
		<div class="space-y-8">
			{#each CASE_STUDIES as study}
				<div class="group relative rounded-2xl card-glass p-7 sm:p-10 shadow-sm transition-all duration-300">
					
					<!-- Top Row: Number, Title, Period -->
					<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#e3dedb] pb-6">
						<div class="flex items-baseline gap-3">
							<span class="font-serif text-3xl sm:text-4xl font-bold text-[#9a0002]">
								{study.number}.
							</span>
							<div>
								<h3 class="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#241916] group-hover:text-[#9a0002] transition-colors">
									{study.title}
								</h3>
								<div class="text-xs font-mono text-[#897870] mt-1 uppercase tracking-wider">
									{study.subtitle}
								</div>
							</div>
						</div>

						<div class="font-mono text-xs font-semibold tracking-wider text-[#897870] bg-white/80 px-3 py-1 rounded-md self-start sm:self-auto border border-[#e3dedb]">
							[{study.period}]
						</div>
					</div>

					<!-- Tags Row -->
					<div class="mt-6 flex flex-wrap gap-2.5">
						{#each study.tags as tag}
							<span class="inline-flex items-center rounded-lg border border-[#e3dedb] bg-white/70 px-3 py-1 text-xs font-mono font-medium text-[#241916]">
								{tag}
							</span>
						{/each}
					</div>

					<!-- Summary Description -->
					<p class="mt-6 text-lg sm:text-[19px] text-[#4b3932] leading-relaxed max-w-4xl font-normal">
						{study.summary}
					</p>

					<!-- Bottom Row: Metrics & Architecture Spec Action -->
					<div class="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#e3dedb]">
						<!-- Key Metrics -->
						<div class="grid grid-cols-3 gap-4 sm:gap-8">
							{#each study.metrics as metric}
								<div>
									<div class="text-2xl sm:text-3xl font-serif font-bold text-[#9a0002]">{metric.value}</div>
									<div class="text-xs sm:text-sm font-mono text-[#897870] mt-0.5 uppercase tracking-wider">{metric.label}</div>
								</div>
							{/each}
						</div>

						<!-- Action Button: Inspect Architecture Spec in Cherry Cola -->
						<button
							type="button"
							onclick={() => onInspectSpec(study)}
							class="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium text-[#f7f3ee] shadow-sm cursor-pointer self-start sm:self-auto shrink-0"
						>
							<span class="relative z-10">Inspect Architecture Spec</span>
							<ArrowUpRight class="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</button>
					</div>

				</div>
			{/each}
		</div>

	</div>
</section>
