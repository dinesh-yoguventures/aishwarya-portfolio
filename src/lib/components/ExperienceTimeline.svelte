<script lang="ts">
	import { Briefcase, Calendar, MapPin, Award, CheckCircle, TrendingUp, Cpu, RefreshCw } from 'lucide-svelte';
	import { TIMELINE_CHRONO, TIMELINE_IMPACT, type ExperienceItem } from '$lib/data/portfolioData';

	let activeView = $state<'chronological' | 'impact'>('chronological');
</script>

<section id="experience" class="relative py-20 lg:py-28 bg-[#fbf9f6] border-b border-[#e3dedb] overflow-hidden">
	<!-- Atmospheric Dual Gradient Blobs & Drafting Grid Canvas (Hero Master Brand Style) -->
	<div class="dreamy-canvas">
		<!-- Spread 1: Secondary Warm Amber/Peach Bloom in top-right -->
		<div class="dreamy-spread-secondary absolute top-[-6%] right-[-4%] w-[24rem] h-[24rem] md:w-[30rem] md:h-[30rem]"></div>
		<!-- Spread 2: Primary Ruby/Cherry Bloom in bottom-left -->
		<div class="dreamy-spread-primary absolute bottom-[-6%] left-[-4%] w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem]"></div>
		<!-- Subtle Fine Architectural Grid & Tactile Airbrush Film-Grain -->
		<div class="dreamy-grid"></div>
		<div class="dreamy-grain"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header & Toggle Switch -->
		<div class="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#e3dedb] pb-8">
			<div>
				<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#7a665e]">
					<span class="inline-block h-2 w-2 rounded-full bg-[#9a0002]"></span>
					Track Record &bull; 7+ Years
				</div>
				<h2 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#241916]">
					Engineering Experience
				</h2>
			</div>

			<!-- Interactive Timeline Toggle Switch -->
			<div class="flex items-center rounded-full border border-[#e3dedb] bg-white/80 backdrop-blur-md p-1.5 shadow-2xs">
				<button
					type="button"
					onclick={() => activeView = 'chronological'}
					class="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono font-medium transition-all cursor-pointer {activeView === 'chronological' ? 'bg-[#9a0002] text-[#f7f3ee] shadow-xs' : 'text-[#695750] hover:text-[#9a0002]'}"
				>
					<Calendar class="h-3.5 w-3.5" />
					<span>Chronological View</span>
				</button>
				<button
					type="button"
					onclick={() => activeView = 'impact'}
					class="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono font-medium transition-all cursor-pointer {activeView === 'impact' ? 'bg-[#9a0002] text-[#f7f3ee] shadow-xs' : 'text-[#695750] hover:text-[#9a0002]'}"
				>
					<TrendingUp class="h-3.5 w-3.5" />
					<span>Impact View (Scale &bull; Migration)</span>
				</button>
			</div>
		</div>

		<!-- Chronological View List -->
		{#if activeView === 'chronological'}
			<div class="relative border-l-2 border-[#e3dedb] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
				{#each TIMELINE_CHRONO as item}
					<div class="relative group">
						<!-- Timeline Node Dot in Cherry Cola -->
						<div class="absolute -left-[33px] sm:-left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[#fbf9f6] bg-[#9a0002] shadow-xs group-hover:scale-125 transition-transform"></div>

						<div class="rounded-2xl card-glass p-6 sm:p-8 transition-all hover:border-[#9a0002]/40 hover:shadow-lg">
							
							<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#e3dedb] pb-4">
								<div>
									<h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-[#241916] group-hover:text-[#9a0002] transition-colors">
										{item.role}
									</h3>
									<div class="text-sm font-semibold text-[#9a0002] mt-0.5">
										{item.company} &bull; <span class="font-normal text-[#695750]">{item.location}</span>
									</div>
								</div>
								<span class="font-mono text-xs font-semibold text-[#7a665e] bg-[#f7f3ee] px-3 py-1 rounded-md self-start sm:self-auto border border-[#e3dedb]">
									{item.period}
								</span>
							</div>

							<!-- Metric pills in Cherry Cola palette -->
							<div class="mt-4 flex flex-wrap gap-2">
								{#each item.impactMetrics as metric}
									<span class="inline-flex items-center gap-1.5 rounded-md border border-[#9a0002]/25 bg-[#9a0002]/8 px-2.5 py-1 text-xs font-mono font-medium text-[#9a0002]">
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
							<div class="mt-6 pt-4 border-t border-[#e3dedb] flex flex-wrap gap-2">
								{#each item.skills as skill}
									<span class="font-mono text-xs rounded bg-[#f7f3ee] px-2.5 py-1 text-[#695750] border border-[#e3dedb]">
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
					<div class="flex flex-col justify-between rounded-2xl card-glass p-7 transition-all hover:border-[#9a0002]/40 hover:shadow-lg">
						<div>
							<div class="flex items-center justify-between mb-4">
								<span class="inline-flex items-center gap-1.5 rounded-full border border-[#9a0002]/25 bg-[#9a0002]/8 px-3 py-1 text-xs font-mono font-semibold text-[#9a0002]">
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

							<h3 class="text-xl sm:text-2xl font-bold tracking-tight text-[#241916]">
								{item.role}
							</h3>

							<div class="my-4 h-px w-full bg-[#e3dedb]"></div>

							<!-- Metric badges -->
							<div class="flex flex-wrap gap-2 mb-5">
								{#each item.impactMetrics as metric}
									<span class="rounded-md border border-[#e3dedb] bg-[#f7f3ee] px-2.5 py-1 font-mono text-xs font-medium text-[#241916]">
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

						<div class="mt-6 pt-4 border-t border-[#e3dedb] flex flex-wrap gap-1.5">
							{#each item.skills as skill}
								<span class="font-mono text-xs rounded bg-[#f7f3ee] px-2 py-0.5 text-[#695750] border border-[#e3dedb]">
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
