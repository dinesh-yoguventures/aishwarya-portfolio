<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { CASE_STUDIES, type CaseStudy } from '$lib/data/portfolioData';

	let { onInspectSpec } = $props<{
		onInspectSpec: (study: CaseStudy) => void;
	}>();
</script>

<section id="projects" class="relative py-20 lg:py-28 bg-[#efe6dd] border-b border-[#e2d5c7]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-[#e2d5c7] pb-6">
			<div>
				<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#7a665e]">
					<span class="inline-block h-2 w-2 rounded-full bg-[#9a0002]"></span>
					Architectural Case Studies
				</div>
				<h2 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#231510]">
					FEATURED WORK (01 — 03)
				</h2>
			</div>
			<div class="text-xs font-mono text-[#7a665e]">
				MISSION-CRITICAL PORTALS &bull; REGTECH &bull; ENERGY
			</div>
		</div>

		<!-- Case Studies List -->
		<div class="space-y-8">
			{#each CASE_STUDIES as study}
				<div class="group relative rounded-2xl border border-[#e2d5c7] bg-[#fbf8f5] p-7 sm:p-10 shadow-sm transition-all duration-300 hover:border-[#9a0002] hover:shadow-xl">
					
					<!-- Top Row: Number, Title, Period -->
					<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#e2d5c7] pb-6">
						<div class="flex items-baseline gap-3">
							<span class="font-serif text-3xl sm:text-4xl font-bold text-[#9a0002]">
								{study.number}.
							</span>
							<div>
								<h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#231510] group-hover:text-[#9a0002] transition-colors">
									{study.title}
								</h3>
								<div class="text-xs font-mono text-[#7a665e] mt-1">
									{study.subtitle}
								</div>
							</div>
						</div>

						<div class="font-mono text-xs font-semibold tracking-wider text-[#7a665e] bg-[#efe6dd] px-3 py-1 rounded-md self-start sm:self-auto border border-[#e2d5c7]/60">
							[{study.period}]
						</div>
					</div>

					<!-- Tags Row -->
					<div class="mt-6 flex flex-wrap gap-2.5">
						{#each study.tags as tag}
							<span class="inline-flex items-center rounded-lg border border-[#e2d5c7] bg-[#efe6dd] px-3 py-1 text-xs font-mono font-medium text-[#231510]">
								{tag}
							</span>
						{/each}
					</div>

					<!-- Summary Description -->
					<p class="mt-6 text-lg sm:text-[19px] text-[#3b271e] leading-relaxed max-w-4xl">
						{study.summary}
					</p>

					<!-- Bottom Row: Metrics & Architecture Spec Action -->
					<div class="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#e2d5c7]">
						<!-- Key Metrics -->
						<div class="grid grid-cols-3 gap-4 sm:gap-8">
							{#each study.metrics as metric}
								<div>
									<div class="text-2xl sm:text-3xl font-bold text-[#9a0002]">{metric.value}</div>
									<div class="text-xs sm:text-sm font-mono text-[#7a665e] mt-0.5">{metric.label}</div>
								</div>
							{/each}
						</div>

						<!-- Action Button: Inspect Architecture Spec in Cherry Cola -->
						<button
							type="button"
							onclick={() => onInspectSpec(study)}
							class="inline-flex items-center gap-2 rounded-full bg-[#9a0002] px-6 py-3 text-sm font-medium text-[#efe6dd] shadow-sm transition-all hover:bg-[#7a0002] hover:shadow-md active:scale-95 cursor-pointer self-start sm:self-auto shrink-0"
						>
							<span>Inspect Architecture Spec</span>
							<ArrowUpRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</button>
					</div>

				</div>
			{/each}
		</div>

	</div>
</section>
