<script lang="ts">
	import { Briefcase, Calendar, MapPin, Award, CheckCircle, TrendingUp, Cpu, RefreshCw } from 'lucide-svelte';
	import { TIMELINE_CHRONO, TIMELINE_IMPACT, type ExperienceItem } from '$lib/data/portfolioData';

	let activeView = $state<'chronological' | 'impact'>('chronological');
</script>

<section id="experience" class="relative py-20 lg:py-28 bg-[#F8F9FA] border-b border-[#E5E7EB]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header & Toggle Switch -->
		<div class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#E5E7EB] pb-8">
			<div>
				<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#64748B]">
					<span class="inline-block h-2 w-2 rounded-full bg-[#0F172A]"></span>
					Track Record &bull; 7+ Years
				</div>
				<h2 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0F172A]">
					Engineering Experience
				</h2>
			</div>

			<!-- Interactive Timeline Toggle Switch -->
			<div class="flex items-center rounded-full border border-[#CBD5E1] bg-white p-1.5 shadow-2xs">
				<button
					type="button"
					onclick={() => activeView = 'chronological'}
					class="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer {activeView === 'chronological' ? 'bg-[#0F172A] text-white shadow-xs' : 'text-[#64748B] hover:text-[#0F172A]'}"
				>
					<Calendar class="h-3.5 w-3.5" />
					<span>Chronological View</span>
				</button>
				<button
					type="button"
					onclick={() => activeView = 'impact'}
					class="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer {activeView === 'impact' ? 'bg-[#0F172A] text-white shadow-xs' : 'text-[#64748B] hover:text-[#0F172A]'}"
				>
					<TrendingUp class="h-3.5 w-3.5" />
					<span>Impact View (Performance &bull; Scale &bull; Migration)</span>
				</button>
			</div>
		</div>

		<!-- Chronological View List -->
		{#if activeView === 'chronological'}
			<div class="relative border-l border-[#CBD5E1] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
				{#each TIMELINE_CHRONO as item}
					<div class="relative group">
						<!-- Timeline Node Dot -->
						<div class="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-[#0F172A] shadow-sm group-hover:scale-125 transition-transform"></div>

						<div class="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-[#CBD5E1] hover:shadow-md">
							
							<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#F1F5F9] pb-4">
								<div>
									<h3 class="text-xl font-bold tracking-tight text-[#0F172A]">
										{item.role}
									</h3>
									<div class="text-sm font-semibold text-[#475569] mt-0.5">
										{item.company} &bull; <span class="font-normal text-[#64748B]">{item.location}</span>
									</div>
								</div>
								<span class="font-mono text-xs font-semibold text-[#64748B] bg-[#F1F5F9] px-3 py-1 rounded-md self-start sm:self-auto">
									{item.period}
								</span>
							</div>

							<!-- Metric pills -->
							<div class="mt-4 flex flex-wrap gap-2">
								{#each item.impactMetrics as metric}
									<span class="inline-flex items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-mono font-medium text-emerald-800">
										<CheckCircle class="h-3 w-3 text-emerald-600" />
										{metric}
									</span>
								{/each}
							</div>

							<!-- Description bullet points -->
							<ul class="mt-5 space-y-2.5 text-sm text-[#334155]">
								{#each item.description as desc}
									<li class="flex items-start gap-2.5">
										<span class="text-neutral-400 mt-1">&bull;</span>
										<span>{desc}</span>
									</li>
								{/each}
							</ul>

							<!-- Skills tags -->
							<div class="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap gap-2">
								{#each item.skills as skill}
									<span class="font-mono text-[11px] rounded bg-[#F8F9FA] px-2.5 py-1 text-[#475569] border border-[#E2E8F0]">
										{skill}
									</span>
								{/each}
							</div>

						</div>
					</div>
				{/each}
			</div>

		<!-- Impact View List -->
		{:else}
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{#each TIMELINE_IMPACT as item}
					<div class="flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-sm transition-all hover:border-[#0F172A] hover:shadow-lg">
						<div>
							<div class="flex items-center justify-between mb-4">
								<span class="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-[#F8F9FA] px-3 py-1 text-xs font-mono font-semibold text-[#0F172A]">
									{#if item.category === 'Performance'}
										<TrendingUp class="h-3.5 w-3.5 text-emerald-600" />
									{:else if item.category === 'Scale'}
										<Cpu class="h-3.5 w-3.5 text-blue-600" />
									{:else}
										<RefreshCw class="h-3.5 w-3.5 text-purple-600" />
									{/if}
									{item.category} Impact
								</span>
								<span class="font-mono text-xs text-[#94A3B8]">{item.company}</span>
							</div>

							<h3 class="text-lg font-bold tracking-tight text-[#0F172A]">
								{item.role}
							</h3>

							<div class="my-4 h-px w-full bg-[#E5E7EB]"></div>

							<!-- Metric badges -->
							<div class="flex flex-wrap gap-2 mb-5">
								{#each item.impactMetrics as metric}
									<span class="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 font-mono text-xs font-medium text-[#0F172A]">
										{metric}
									</span>
								{/each}
							</div>

							<!-- Key bullet points -->
							<ul class="space-y-2.5 text-xs sm:text-sm text-[#475569]">
								{#each item.description as desc}
									<li class="flex items-start gap-2">
										<span class="text-amber-500 font-bold">✦</span>
										<span>{desc}</span>
									</li>
								{/each}
							</ul>
						</div>

						<div class="mt-6 pt-4 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
							{#each item.skills as skill}
								<span class="font-mono text-[11px] rounded bg-[#F8F9FA] px-2 py-0.5 text-[#64748B] border border-[#E2E8F0]">
									{skill}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/if}

	</div>
</section>
