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

	<!-- Slide-over Drawer (Dark Mode) -->
	<div class="fixed inset-y-0 right-0 z-50 flex max-w-full pl-10">
		<div class="w-screen max-w-2xl bg-[#0B0F19] text-white shadow-2xl flex flex-col border-l border-neutral-800 animate-in slide-in-from-right duration-300">
			
			<!-- Drawer Header -->
			<div class="flex items-start justify-between border-b border-neutral-800 p-6 sm:p-8 bg-[#0F172A]/80">
				<div>
					<div class="flex items-center gap-2">
						<span class="font-mono text-xs font-semibold text-emerald-400">
							SPECIFICATION &bull; {study.number}
						</span>
						<span class="font-mono text-xs text-neutral-400">[{study.period}]</span>
					</div>
					<h2 class="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white">
						{study.title}
					</h2>
					<p class="mt-1 text-xs sm:text-sm text-neutral-400">
						{study.subtitle}
					</p>
				</div>

				<button
					type="button"
					onclick={onClose}
					class="rounded-full p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
					title="Close (Esc)"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<!-- Spec Navigation Filter Tabs -->
			<div class="flex items-center gap-2 border-b border-neutral-800 bg-[#070A10] px-6 sm:px-8 py-3 overflow-x-auto text-xs font-mono">
				<button
					type="button"
					onclick={() => activeSpecTab = 'all'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'all' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-neutral-200'}"
				>
					Full Spec
				</button>
				<button
					type="button"
					onclick={() => activeSpecTab = 'state'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'state' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-neutral-200'}"
				>
					State Management
				</button>
				<button
					type="button"
					onclick={() => activeSpecTab = 'lazy'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'lazy' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-neutral-200'}"
				>
					Lazy Loading
				</button>
				<button
					type="button"
					onclick={() => activeSpecTab = 'api'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'api' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-neutral-200'}"
				>
					API &amp; Telemetry
				</button>
				<button
					type="button"
					onclick={() => activeSpecTab = 'testing'}
					class="px-3 py-1 rounded-md transition-all cursor-pointer {activeSpecTab === 'testing' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-neutral-200'}"
				>
					Testing Suite
				</button>
			</div>

			<!-- Drawer Body (Scrollable) -->
			<div class="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-neutral-300">
				
				<!-- System Overview -->
				<div>
					<h4 class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400 mb-2">
						System Overview &amp; Domain Impact
					</h4>
					<p class="text-sm text-neutral-200 leading-relaxed bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
						{study.spec.systemOverview}
					</p>
				</div>

				<!-- Architectural Pipeline Diagram -->
				<div>
					<h4 class="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-1.5">
						<Network class="h-3.5 w-3.5" />
						Data Flow &amp; Pipeline Architecture
					</h4>
					<div class="space-y-2 rounded-xl border border-neutral-800 bg-[#070A10] p-4 font-mono text-xs">
						{#each study.spec.architecturalFlow as step, idx}
							<div class="flex items-center gap-3">
								<span class="flex h-5 w-5 items-center justify-center rounded bg-neutral-800 text-[10px] text-neutral-300 shrink-0">
									0{idx + 1}
								</span>
								<span class="text-neutral-200">{step}</span>
								{#if idx < study.spec.architecturalFlow.length - 1}
									<ArrowRight class="h-3 w-3 text-neutral-600 shrink-0 ml-auto hidden sm:block" />
								{/if}
							</div>
						{/each}
					</div>
				</div>

				<!-- Section: State Management -->
				{#if activeSpecTab === 'all' || activeSpecTab === 'state'}
					<div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-2">
						<div class="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
							<Cpu class="h-4 w-4" />
							<span>STATE MANAGEMENT PATTERN</span>
						</div>
						<p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
							{study.spec.stateManagement}
						</p>
					</div>
				{/if}

				<!-- Section: Lazy Loading & Bundling -->
				{#if activeSpecTab === 'all' || activeSpecTab === 'lazy'}
					<div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-2">
						<div class="flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold">
							<Layers class="h-4 w-4" />
							<span>LAZY LOADING &amp; BUNDLE PARTITIONING</span>
						</div>
						<p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
							{study.spec.lazyLoading}
						</p>
					</div>
				{/if}

				<!-- Section: API Integration -->
				{#if activeSpecTab === 'all' || activeSpecTab === 'api'}
					<div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-2">
						<div class="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
							<Network class="h-4 w-4" />
							<span>API &amp; REAL-TIME INTEGRATION</span>
						</div>
						<p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
							{study.spec.apiIntegration}
						</p>
					</div>
				{/if}

				<!-- Section: Testing Suite -->
				{#if activeSpecTab === 'all' || activeSpecTab === 'testing'}
					<div class="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-2">
						<div class="flex items-center gap-2 text-purple-400 text-xs font-mono font-semibold">
							<FileCheck2 class="h-4 w-4" />
							<span>TESTING SUITE &amp; AUTOMATED GATES</span>
						</div>
						<p class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
							{study.spec.testingSuite}
						</p>
					</div>
				{/if}

				<!-- Tech Highlights Badges -->
				<div>
					<h4 class="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400 mb-3">
						Architectural Guardrails
					</h4>
					<div class="flex flex-wrap gap-2">
						{#each study.spec.techHighlights as highlight}
							<span class="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs font-mono text-neutral-200">
								&bull; {highlight}
							</span>
						{/each}
					</div>
				</div>

			</div>

			<!-- Drawer Footer -->
			<div class="border-t border-neutral-800 p-6 bg-[#070A10] flex items-center justify-between">
				<span class="text-xs font-mono text-neutral-400">
					Aishwarya S &bull; Senior Frontend Engineer
				</span>
				<button
					type="button"
					onclick={onClose}
					class="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors cursor-pointer"
				>
					Close Drawer
				</button>
			</div>

		</div>
	</div>
{/if}
