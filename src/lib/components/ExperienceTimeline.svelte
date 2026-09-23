<script lang="ts">
	import { Briefcase, Calendar, MapPin, Award, CheckCircle, TrendingUp, Cpu, RefreshCw } from 'lucide-svelte';
	import { TIMELINE_CHRONO, TIMELINE_IMPACT, type ExperienceItem } from '$lib/data/portfolioData';

	let activeView = $state<'chronological' | 'impact'>('chronological');
</script>

<section id="experience" class="relative py-20 lg:py-28 bg-[#efe6dd] border-b border-[#e2d5c7]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header & Toggle Switch -->
		<div class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#e2d5c7] pb-8">
			<div>
				<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#7a665e]">
					<span class="inline-block h-2 w-2 rounded-full bg-[#9a0002]"></span>
					Track Record &bull; 7+ Years
				</div>
				<h2 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#231510]">
					Engineering Experience
				</h2>
			</div>

			<!-- Interactive Timeline Toggle Switch -->
			<div class="flex items-center rounded-full border border-[#e2d5c7] bg-[#fbf8f5] p-1.5 shadow-2xs">
				<button
					type="button"
					onclick={() => activeView = 'chronological'}
					class="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono font-medium transition-all cursor-pointer {activeView === 'chronological' ? 'bg-[#9a0002] text-[#efe6dd] shadow-xs' : 'text-[#695750] hover:text-[#9a0002]'}"
				>
					<Calendar class="h-3.5 w-3.5" />
					<span>Chronological View</span>
				</button>
				<button
					type="button"
					onclick={() => activeView = 'impact'}
					class="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono font-medium transition-all cursor-pointer {activeView === 'impact' ? 'bg-[#9a0002] text-[#efe6dd] shadow-xs' : 'text-[#695750] hover:text-[#9a0002]'}"
				>
					<TrendingUp class="h-3.5 w-3.5" />
					<span>Impact View (Scale &bull; Migration)</span>
				</button>
			</div>
		</div>

		<!-- Chronological View List -->
		{#if activeView === 'chronological'}
			<div class="relative border-l-2 border-[#d8c7b5] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
				{#each TIMELINE_CHRONO as item}
					<div class="relative group">
						<!-- Timeline Node Dot in Cherry Cola -->
						<div class="absolute -left-[33px] sm:-left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[#efe6dd] bg-[#9a0002] shadow-sm group-hover:scale-125 transition-transform"></div>

						<div class="rounded-2xl border border-[#e2d5c7] bg-[#fbf8f5] p-6 sm:p-8 shadow-sm transition-all hover:border-[#9a0002] hover:shadow-md">
							
							<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#e2d5c7] pb-4">
								<div>
									<h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#231510] group-hover:text-[#9a0002] transition-colors">
										{item.role}
									</h3>
									<div class="text-sm font-semibold text-[#9a0002] mt-0.5">
										{item.company} &bull; <span class="font-normal text-[#695750]">{item.location}</span>
									</div>
								</div>
								<span class="font-mono text-xs font-semibold text-[#7a665e] bg-[#efe6dd] px-3 py-1 rounded-md self-start sm:self-auto border border-[#e2d5c7]/60">
									{item.period}
								</span>
							</div>

							<!-- Metric pills in Cherry Cola palette -->
							<div class="mt-4 flex flex-wrap gap-2">
								{#each item.impactMetrics as metric}
									<span class="inline-flex items-center gap-1.5 rounded-md border border-[#9a0002]/30 bg-[#9a0002]/10 px-2.5 py-1 text-xs font-mono font-medium text-[#9a0002]">
										<CheckCircle class="h-3 w-3 text-[#9a0002]" />
										{metric}
									</span>
								{/each}
							</div>

							<!-- Description bullet points -->
							<ul class="mt-5 space-y-2.5 text-base sm:text-[17px] text-[#3b271e] leading-relaxed">
								{#each item.description as desc}
									<li class="flex items-start gap-2.5">
										<span class="text-[#9a0002] font-bold mt-1">&bull;</span>
										<span>{desc}</span>
									</li>
								{/each}
							</ul>

							<!-- Skills tags -->
							<div class="mt-6 pt-4 border-t border-[#e2d5c7] flex flex-wrap gap-2">
								{#each item.skills as skill}
									<span class="font-mono text-xs rounded bg-[#efe6dd] px-2.5 py-1 text-[#695750] border border-[#e2d5c7]">
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
					<div class="flex flex-col justify-between rounded-2xl border border-[#e2d5c7] bg-[#fbf8f5] p-7 shadow-sm transition-all hover:border-[#9a0002] hover:shadow-lg">
						<div>
							<div class="flex items-center justify-between mb-4">
								<span class="inline-flex items-center gap-1.5 rounded-full border border-[#9a0002]/30 bg-[#9a0002]/10 px-3 py-1 text-xs font-mono font-semibold text-[#9a0002]">
									{#if item.category === 'Performance'}
										<TrendingUp class="h-3.5 w-3.5 text-[#9a0002]" />
									{:else if item.category === 'Scale'}
										<Cpu class="h-3.5 w-3.5 text-[#9a0002]" />
									{:else}
										<RefreshCw class="h-3.5 w-3.5 text-[#9a0002]" />
									{/if}
									{item.category} Impact
								</span>
								<span class="font-mono text-xs text-[#7a665e]">{item.company}</span>
							</div>

							<h3 class="text-xl sm:text-2xl font-bold tracking-tight text-[#231510]">
								{item.role}
							</h3>

							<div class="my-4 h-px w-full bg-[#e2d5c7]"></div>

							<!-- Metric badges -->
							<div class="flex flex-wrap gap-2 mb-5">
								{#each item.impactMetrics as metric}
									<span class="rounded-md border border-[#e2d5c7] bg-[#efe6dd] px-2.5 py-1 font-mono text-xs font-medium text-[#231510]">
										{metric}
									</span>
								{/each}
							</div>

							<!-- Key bullet points -->
							<ul class="space-y-2.5 text-sm sm:text-base text-[#3b271e] leading-relaxed">
								{#each item.description as desc}
									<li class="flex items-start gap-2">
										<span class="text-[#9a0002] font-bold">✦</span>
										<span>{desc}</span>
									</li>
								{/each}
							</ul>
						</div>

						<div class="mt-6 pt-4 border-t border-[#e2d5c7] flex flex-wrap gap-1.5">
							{#each item.skills as skill}
								<span class="font-mono text-xs rounded bg-[#efe6dd] px-2 py-0.5 text-[#695750] border border-[#e2d5c7]">
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
