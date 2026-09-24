<script lang="ts">
	import { X, CheckCircle2, Layers, Cpu, Network, FileCheck2, ArrowRight } from 'lucide-svelte';
	import type { CaseStudy } from '$lib/data/portfolioData';

	let { study, onClose } = $props<{
		study: CaseStudy | null;
		onClose: () => void;
	}>();

	let activeSpecTab = $state<'all' | 'state' | 'lazy' | 'api' | 'testing'>('all');

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

{#if study}
	<!-- Backdrop overlay -->
	<div
		class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity"
		onclick={onClose}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Enter' && onClose()}
	></div>

	<!-- Slide-over Drawer in Cherry Cola Noir -->
	<div class="fixed inset-y-0 right-0 z-50 flex max-w-full pl-10">
		<div class="w-screen max-w-2xl bg-[#1a0304] text-[#f7f3ee] shadow-2xl flex flex-col border-l border-[#9a0002]/40 animate-in slide-in-from-right duration-300">
			
			<!-- Drawer Header -->
			<div class="flex items-start justify-between border-b border-[#9a0002]/40 p-6 sm:p-8 bg-[#240608]">
				<div>
					<div class="flex items-center gap-2">
						<span class="font-mono text-xs font-semibold text-[#ff8082]">
							SPECIFICATION &bull; {study.number}
						</span>
						<span class="font-mono text-xs text-[#bca3a5]">[{study.period}]</span>
					</div>
					<h2 class="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#f7f3ee]">
						{study.title}
					</h2>
					<p class="mt-1 text-xs sm:text-sm text-[#dac8b7]">
						{study.subtitle}
					</p>
				</div>

				<button
					type="button"
					onclick={onClose}
					class="rounded-full p-2 text-[#dac8b7] hover:bg-[#9a0002] hover:text-[#f7f3ee] transition-colors cursor-pointer"
					title="Close (Esc)"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<!-- Spec Navigation Filter Tabs -->
			<div class="flex items-center gap-2 border-b border-[#9a0002]/40 bg-[#140203] px-6 sm:px-8 py-3 overflow-x-auto text-xs font-mono">
				<button
					type="button"
					onclick={() => activeSpecTab = 'all'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'all' ? 'bg-[#9a0002] text-[#f7f3ee] font-semibold' : 'text-[#dac8b7] hover:text-[#f7f3ee]'}"
				>
					Full Spec
				</button>
				<button
					type="button"
					onclick={() => activeSpecTab = 'state'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'state' ? 'bg-[#9a0002] text-[#f7f3ee] font-semibold' : 'text-[#dac8b7] hover:text-[#f7f3ee]'}"
				>
					State Management
				</button>
				<button
					type="button"
					onclick={() => activeSpecTab = 'lazy'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'lazy' ? 'bg-[#9a0002] text-[#f7f3ee] font-semibold' : 'text-[#dac8b7] hover:text-[#f7f3ee]'}"
				>
					Lazy Loading
				</button>
				<button
					type="button"
					onclick={() => activeSpecTab = 'api'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'api' ? 'bg-[#9a0002] text-[#f7f3ee] font-semibold' : 'text-[#dac8b7] hover:text-[#f7f3ee]'}"
				>
					API &amp; Telemetry
				</button>
				<button
					type="button"
					onclick={() => activeSpecTab = 'testing'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'testing' ? 'bg-[#9a0002] text-[#f7f3ee] font-semibold' : 'text-[#dac8b7] hover:text-[#f7f3ee]'}"
				>
					Testing Suite
				</button>
			</div>

			<!-- Drawer Body (Scrollable) -->
			<div class="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-[#dac8b7]">
				
				<!-- System Overview -->
				<div>
					<h4 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff8082] mb-2">
						System Overview &amp; Domain Impact
					</h4>
					<p class="text-sm sm:text-base text-[#f7f3ee] leading-relaxed bg-[#240608] p-4 rounded-xl border border-[#9a0002]/30">
						{study.spec.systemOverview}
					</p>
				</div>

				<!-- Architectural Pipeline Diagram -->
				<div>
					<h4 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff8082] mb-3 flex items-center gap-1.5">
						<Network class="h-3.5 w-3.5 text-[#ff8082]" />
						Data Flow &amp; Pipeline Architecture
					</h4>
					<div class="space-y-2 rounded-xl border border-[#9a0002]/30 bg-[#120203] p-4 font-mono text-xs">
						{#each study.spec.architecturalFlow as step, idx}
							<div class="flex items-center gap-3">
								<span class="flex h-5 w-5 items-center justify-center rounded bg-[#9a0002] text-[10px] text-[#f7f3ee] shrink-0 font-bold">
									0{idx + 1}
								</span>
								<span class="text-[#f7f3ee]">{step}</span>
								{#if idx < study.spec.architecturalFlow.length - 1}
									<ArrowRight class="h-3 w-3 text-[#ff8082] shrink-0 ml-auto hidden sm:block" />
								{/if}
							</div>
						{/each}
					</div>
				</div>

				<!-- Section: State Management -->
				{#if activeSpecTab === 'all' || activeSpecTab === 'state'}
					<div class="rounded-xl border border-[#9a0002]/30 bg-[#240608] p-5 space-y-2">
						<div class="flex items-center gap-2 text-[#ff8082] text-xs font-mono font-semibold">
							<Cpu class="h-4 w-4" />
							<span>STATE MANAGEMENT PATTERN</span>
						</div>
						<p class="text-xs sm:text-sm text-[#f7f3ee] leading-relaxed">
							{study.spec.stateManagement}
						</p>
					</div>
				{/if}

				<!-- Section: Lazy Loading & Bundling -->
				{#if activeSpecTab === 'all' || activeSpecTab === 'lazy'}
					<div class="rounded-xl border border-[#9a0002]/30 bg-[#240608] p-5 space-y-2">
						<div class="flex items-center gap-2 text-[#ff8082] text-xs font-mono font-semibold">
							<Layers class="h-4 w-4" />
							<span>LAZY LOADING &amp; BUNDLE PARTITIONING</span>
						</div>
						<p class="text-xs sm:text-sm text-[#f7f3ee] leading-relaxed">
							{study.spec.lazyLoading}
						</p>
					</div>
				{/if}

				<!-- Section: API Integration -->
				{#if activeSpecTab === 'all' || activeSpecTab === 'api'}
					<div class="rounded-xl border border-[#9a0002]/30 bg-[#240608] p-5 space-y-2">
						<div class="flex items-center gap-2 text-[#ff8082] text-xs font-mono font-semibold">
							<Network class="h-4 w-4" />
							<span>API &amp; REAL-TIME INTEGRATION</span>
						</div>
						<p class="text-xs sm:text-sm text-[#f7f3ee] leading-relaxed">
							{study.spec.apiIntegration}
						</p>
					</div>
				{/if}

				<!-- Section: Testing Suite -->
				{#if activeSpecTab === 'all' || activeSpecTab === 'testing'}
					<div class="rounded-xl border border-[#9a0002]/30 bg-[#240608] p-5 space-y-2">
						<div class="flex items-center gap-2 text-[#ff8082] text-xs font-mono font-semibold">
							<FileCheck2 class="h-4 w-4" />
							<span>TESTING SUITE &amp; AUTOMATED GATES</span>
						</div>
						<p class="text-xs sm:text-sm text-[#f7f3ee] leading-relaxed">
							{study.spec.testingSuite}
						</p>
					</div>
				{/if}

				<!-- Tech Highlights Badges -->
				<div>
					<h4 class="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff8082] mb-3">
						Architectural Guardrails
					</h4>
					<div class="flex flex-wrap gap-2">
						{#each study.spec.techHighlights as highlight}
							<span class="rounded-md border border-[#9a0002]/40 bg-[#240608] px-3 py-1 text-xs font-mono text-[#f7f3ee]">
								&bull; {highlight}
							</span>
						{/each}
					</div>
				</div>

			</div>

			<!-- Drawer Footer -->
			<div class="border-t border-[#9a0002]/40 p-6 bg-[#140203] flex items-center justify-between">
				<span class="text-xs font-mono text-[#dac8b7]">
					Aishwarya S &bull; Senior Frontend Engineer
				</span>
				<button
					type="button"
					onclick={onClose}
					class="rounded-full bg-[#9a0002] px-5 py-2 text-xs font-semibold text-[#f7f3ee] hover:bg-[#7a0002] transition-colors cursor-pointer"
				>
					Close Drawer
				</button>
			</div>

		</div>
	</div>
{/if}
