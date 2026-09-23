<script lang="ts">
	import { ArrowUpRight, Activity, ShieldCheck, Cpu } from 'lucide-svelte';
	import { CASE_STUDIES, type CaseStudy } from '$lib/data/portfolioData';

	let { onInspectSpec } = $props<{
		onInspectSpec: (study: CaseStudy) => void;
	}>();
</script>

<section id="projects" class="relative py-20 lg:py-28 bg-[#F8F9FA] border-b border-[#E5E7EB]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-[#E5E7EB] pb-6">
			<div>
				<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#64748B]">
					<span class="inline-block h-2 w-2 rounded-full bg-[#0F172A]"></span>
					Architectural Case Studies
				</div>
				<h2 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0F172A]">
					FEATURED WORK (01 — 03)
				</h2>
			</div>
			<div class="text-xs font-mono text-[#64748B]">
				MISSION-CRITICAL PORTALS &bull; REGTECH &bull; ENERGY
			</div>
		</div>

		<!-- Case Studies List -->
		<div class="space-y-8">
			{#each CASE_STUDIES as study}
				<div class="group relative rounded-2xl border border-[#E5E7EB] bg-white p-7 sm:p-10 shadow-sm transition-all duration-300 hover:border-[#0F172A] hover:shadow-xl">
					
					<!-- Top Row: Number, Title, Period -->
					<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F1F5F9] pb-6">
						<div class="flex items-baseline gap-3">
							<span class="font-mono text-2xl sm:text-3xl font-bold text-[#0F172A]">
								{study.number}.
							</span>
							<div>
								<h3 class="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] group-hover:text-black">
									{study.title}
								</h3>
								<div class="text-xs font-mono text-[#64748B] mt-0.5">
									{study.subtitle}
								</div>
							</div>
						</div>

						<div class="font-mono text-xs font-semibold tracking-wider text-[#64748B] bg-[#F1F5F9] px-3 py-1 rounded-md self-start sm:self-auto">
							[{study.period}]
						</div>
					</div>

					<!-- Tags Row with Starbursts -->
					<div class="mt-6 flex flex-wrap gap-2.5">
						{#each study.tags as tag}
							<span class="inline-flex items-center rounded-lg border border-[#E2E8F0] bg-[#F8F9FA] px-3 py-1 text-xs font-mono font-medium text-[#1E293B]">
								{tag}
							</span>
						{/each}
					</div>

					<!-- Summary Description -->
					<p class="mt-6 text-base sm:text-lg text-[#334155] leading-relaxed max-w-4xl">
						{study.summary}
					</p>

					<!-- Bottom Row: Metrics & Architecture Spec Action -->
					<div class="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#F1F5F9]">
						<!-- Key Metrics -->
						<div class="grid grid-cols-3 gap-4 sm:gap-8">
							{#each study.metrics as metric}
								<div>
									<div class="text-lg sm:text-xl font-bold text-[#0F172A] font-mono">{metric.value}</div>
									<div class="text-[11px] sm:text-xs text-[#64748B] mt-0.5">{metric.label}</div>
								</div>
							{/each}
						</div>

						<!-- Action Button: Inspect Architecture Spec -->
						<button
							type="button"
							onclick={() => onInspectSpec(study)}
							class="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-2.5 text-xs sm:text-sm font-medium text-white shadow-sm transition-all hover:bg-black hover:shadow-md active:scale-95 cursor-pointer self-start sm:self-auto shrink-0"
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
