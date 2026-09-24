<script lang="ts">
	import { SlidersHorizontal, Sparkles, AlertTriangle, CheckCircle, Code, Cpu, Gauge } from 'lucide-svelte';

	let sliderPosition = $state(50); // percentage 0 to 100
	let isDragging = $state(false);
	let activeTab = $state<'metrics' | 'code'>('metrics');

	function handlePointerDown(e: PointerEvent) {
		isDragging = true;
		updateSlider(e);
	}

	function handlePointerMove(e: PointerEvent) {
		if (!isDragging) return;
		updateSlider(e);
	}

	function handlePointerUp() {
		isDragging = false;
	}

	function updateSlider(e: PointerEvent) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
		sliderPosition = Math.round((x / rect.width) * 100);
	}
</script>

<svelte:window onpointerup={handlePointerUp} onpointermove={(e) => isDragging && updateSlider(e)} />

<section id="performance-lab" class="relative py-20 lg:py-28 bg-[#fbf9f6] border-b border-[#e3dedb] overflow-hidden text-[#241916]">
	<!-- Background System: 2 Separated Dreamy Gradient Spreads + Grain -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
		<div class="dreamy-canvas absolute inset-0"></div>
		<!-- Spread 1: Secondary Amber/Peach Bloom on top-left -->
		<div class="dreamy-spread-secondary -top-12 -left-12 opacity-35"></div>
		<!-- Spread 2: Primary Cherry Bloom on bottom-right -->
		<div class="dreamy-spread-primary -bottom-16 -right-16 opacity-40"></div>
		<div class="dreamy-grid"></div>
		<div class="dreamy-grain"></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 border-b border-[#e3dedb] pb-6">
			<div>
				<div class="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.22em] text-[#9a0002]">
					<span class="inline-block h-1.5 w-1.5 rounded-full bg-[#9a0002]"></span>
					Interactive Architecture Lab
				</div>
				<h2 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-[-0.03em] text-[#241916]">
					Before / After Modernization
				</h2>
			</div>
			
			<div class="flex flex-wrap items-center gap-2">
				<button
					type="button"
					onclick={() => sliderPosition = 15}
					class="rounded-full px-3.5 py-1.5 text-xs font-mono border transition-all cursor-pointer {sliderPosition <= 20 ? 'bg-[#9a0002] border-[#9a0002] text-[#f7f3ee]' : 'border-[#e3dedb] bg-white text-[#4b3932] hover:border-[#9a0002] hover:text-[#9a0002]'}"
				>
					Legacy Portal
				</button>
				<button
					type="button"
					onclick={() => sliderPosition = 50}
					class="rounded-full px-3.5 py-1.5 text-xs font-mono border transition-all cursor-pointer {sliderPosition > 20 && sliderPosition < 80 ? 'bg-[#9a0002] border-[#9a0002] text-[#f7f3ee]' : 'border-[#e3dedb] bg-white text-[#4b3932] hover:border-[#9a0002] hover:text-[#9a0002]'}"
				>
					Split (50/50)
				</button>
				<button
					type="button"
					onclick={() => sliderPosition = 85}
					class="rounded-full px-3.5 py-1.5 text-xs font-mono border transition-all cursor-pointer {sliderPosition >= 80 ? 'bg-[#9a0002] border-[#9a0002] text-[#f7f3ee]' : 'border-[#e3dedb] bg-white text-[#4b3932] hover:border-[#9a0002] hover:text-[#9a0002]'}"
				>
					Modernized (98/100)
				</button>
			</div>
		</div>

		<p class="text-base sm:text-lg text-[#4b3932] max-w-3xl mb-8 leading-relaxed font-normal">
			Drag the interactive slider below to inspect the quantifiable impact of decomposing legacy monolithic Angular portals into reactive, Signal-driven standalone architectures.
		</p>

		<!-- Sub tabs for view types -->
		<div class="flex border-b border-[#e3dedb] mb-6 gap-6 text-sm font-medium">
			<button
				type="button"
				onclick={() => activeTab = 'metrics'}
				class="pb-3 flex items-center gap-2 transition-all cursor-pointer {activeTab === 'metrics' ? 'border-b-2 border-[#9a0002] text-[#9a0002] font-semibold' : 'text-[#897870] hover:text-[#9a0002]'}"
			>
				<Gauge class="h-4 w-4" />
				Core Web Vitals &amp; Audit Score
			</button>
			<button
				type="button"
				onclick={() => activeTab = 'code'}
				class="pb-3 flex items-center gap-2 transition-all cursor-pointer {activeTab === 'code' ? 'border-b-2 border-[#9a0002] text-[#9a0002] font-semibold' : 'text-[#897870] hover:text-[#9a0002]'}"
			>
				<Code class="h-4 w-4" />
				Code Architecture Diff
			</button>
		</div>

		<!-- Interactive Split Slider Container -->
		<div
			class="relative w-full overflow-hidden rounded-2xl border border-[#e3dedb] bg-[#fbf9f6] shadow-xl select-none cursor-ew-resize min-h-[440px]"
			role="slider"
			tabindex="0"
			aria-label="Before and after portal modernization comparison slider"
			aria-valuemin="0"
			aria-valuemax="100"
			aria-valuenow={sliderPosition}
			onkeydown={(e) => {
				if (e.key === 'ArrowLeft') sliderPosition = Math.max(0, sliderPosition - 5);
				if (e.key === 'ArrowRight') sliderPosition = Math.min(100, sliderPosition + 5);
			}}
			onpointerdown={handlePointerDown}
		>
			<!-- Modernized (Right / Full Background) Layer in Deep Cherry Cola Noir -->
			<div class="absolute inset-0 bg-[#1a0304] text-[#f7f3ee] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="flex h-3 w-3 rounded-full bg-[#ff4a4d] animate-pulse"></span>
						<span class="font-mono text-xs font-semibold tracking-wider uppercase text-[#ff8082]">
							Modernized Architecture (Angular 17)
						</span>
					</div>
					<div class="flex items-center gap-2 rounded-full border border-[#9a0002]/60 bg-[#9a0002]/25 px-3 py-1 font-mono text-xs text-[#f7f3ee]">
						<span>Lighthouse: 98 / 100</span>
						<CheckCircle class="h-3.5 w-3.5 text-[#ff8082]" />
					</div>
				</div>

				{#if activeTab === 'metrics'}
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
						<div class="rounded-xl border border-[#9a0002]/40 bg-[#2b080b]/90 p-4">
							<span class="block text-xs font-mono text-[#d6b8b9]">First Contentful Paint</span>
							<span class="text-3xl font-bold text-[#f7f3ee]">0.6s</span>
							<span class="block text-[11px] text-[#ff8082] mt-1">&check; Target &lt; 1.8s (Good)</span>
						</div>
						<div class="rounded-xl border border-[#9a0002]/40 bg-[#2b080b]/90 p-4">
							<span class="block text-xs font-mono text-[#d6b8b9]">Time to Interactive</span>
							<span class="text-3xl font-bold text-[#f7f3ee]">1.1s</span>
							<span class="block text-[11px] text-[#ff8082] mt-1">-78% reduction</span>
						</div>
						<div class="rounded-xl border border-[#9a0002]/40 bg-[#2b080b]/90 p-4">
							<span class="block text-xs font-mono text-[#d6b8b9]">Initial JS Bundle</span>
							<span class="text-3xl font-bold text-[#f7f3ee]">620 KB</span>
							<span class="block text-[11px] text-[#ff8082] mt-1">Route-level code splitting</span>
						</div>
						<div class="rounded-xl border border-[#9a0002]/40 bg-[#2b080b]/90 p-4">
							<span class="block text-xs font-mono text-[#d6b8b9]">Change Detection</span>
							<span class="text-3xl font-bold text-[#f7f3ee]">OnPush</span>
							<span class="block text-[11px] text-[#ff8082] mt-1">Signals + fine-grained</span>
						</div>
					</div>

					<div class="rounded-xl border border-[#9a0002]/40 bg-[#26070a]/90 p-4 font-mono text-xs text-[#dac8b7] space-y-1.5">
						<div class="text-[#ff8082] font-semibold">// Modernized Architecture Highlights:</div>
						<div>&bull; Standalone Components + Deferred Blocks (<span class="text-[#f7f3ee]">@defer</span>)</div>
						<div>&bull; Immutable RxJS Data Pipelines with <span class="text-[#f7f3ee]">takeUntilDestroyed()</span></div>
						<div>&bull; Zero Zone.js CD cycles on high-rate telemetry streams</div>
					</div>
				{:else}
					<div class="my-4 rounded-xl border border-[#9a0002]/40 bg-[#120203] p-4 font-mono text-xs text-[#f7f3ee] overflow-x-auto">
						<div class="text-[#ff8082] mb-2 font-semibold">// Modern Angular 17 Reactive Architecture</div>
						<pre class="text-[12px] leading-relaxed"><code>@Component(&#123;
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, TelemetryGraphComponent]
&#125;)
export class ModernTelemetryDashboard &#123;
  private readonly telemetryService = inject(TelemetryService);
  
  // Fine-grained Signal derived state
  readonly batteryNodes = this.telemetryService.activeNodes;
  readonly highAlertCount = computed(() =&gt; 
    this.batteryNodes().filter(n =&gt; n.temp &gt; 65).length
  );
&#125;</code></pre>
					</div>
				{/if}

				<div class="flex items-center justify-between text-[11px] font-mono text-[#bca3a5] border-t border-[#9a0002]/40 pt-3">
					<span>STATUS: PRODUCTION-DEPLOYED</span>
					<span>30% AVERAGE LOAD GAIN VERIFIED</span>
				</div>
			</div>

			<!-- Legacy (Left / Clipped Overlay) Layer in Warm Cream -->
			<div
				class="absolute inset-y-0 left-0 bg-[#fbf4ee] text-[#231510] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-r-2 border-[#9a0002] shadow-2xl"
				style="width: {sliderPosition}%;"
			>
				<div class="flex items-center justify-between min-w-[320px]">
					<div class="flex items-center gap-2">
						<span class="flex h-3 w-3 rounded-full bg-[#9a0002]"></span>
						<span class="font-mono text-xs font-semibold tracking-wider uppercase text-[#9a0002]">
							Legacy Portal (Before Refactor)
						</span>
					</div>
					<div class="flex items-center gap-1.5 rounded-full border border-[#9a0002]/30 bg-[#9a0002]/10 px-3 py-1 font-mono text-xs text-[#9a0002]">
						<span>Lighthouse: 42 / 100</span>
						<AlertTriangle class="h-3.5 w-3.5 text-[#9a0002]" />
					</div>
				</div>

				{#if activeTab === 'metrics'}
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 min-w-[500px]">
						<div class="rounded-xl border border-[#e3dedb] bg-[#f7f3ee] p-4">
							<span class="block text-xs font-mono text-[#7a665e]">First Contentful Paint</span>
							<span class="text-3xl font-bold text-[#9a0002]">3.4s</span>
							<span class="block text-[11px] text-[#7a665e] mt-1">High main-thread lock</span>
						</div>
						<div class="rounded-xl border border-[#e3dedb] bg-[#f7f3ee] p-4">
							<span class="block text-xs font-mono text-[#7a665e]">Time to Interactive</span>
							<span class="text-3xl font-bold text-[#9a0002]">5.2s</span>
							<span class="block text-[11px] text-[#7a665e] mt-1">Sluggish touch response</span>
						</div>
						<div class="rounded-xl border border-[#e3dedb] bg-[#f7f3ee] p-4">
							<span class="block text-xs font-mono text-[#7a665e]">Initial JS Bundle</span>
							<span class="text-3xl font-bold text-[#9a0002]">4.8 MB</span>
							<span class="block text-[11px] text-[#7a665e] mt-1">Monolithic unchunked JS</span>
						</div>
						<div class="rounded-xl border border-[#e3dedb] bg-[#f7f3ee] p-4">
							<span class="block text-xs font-mono text-[#7a665e]">Change Detection</span>
							<span class="text-3xl font-bold text-[#9a0002]">Default</span>
							<span class="block text-[11px] text-[#7a665e] mt-1">Full app tree dirty checking</span>
						</div>
					</div>

					<div class="rounded-xl border border-[#9a0002]/20 bg-[#f7f3ee] p-4 font-mono text-xs text-[#3b271e] space-y-1.5 min-w-[320px]">
						<div class="font-semibold text-[#9a0002]">// Legacy Portal Architectural Bottlenecks:</div>
						<div>&times; Giant monolithic NgModule loading unused enterprise features</div>
						<div>&times; Unsubscribed RxJS observables causing heap memory leakage</div>
						<div>&times; Heavy zone.js recalculations on high-frequency API responses</div>
					</div>
				{:else}
					<div class="my-4 rounded-xl border border-[#e3dedb] bg-[#f7f3ee] p-4 font-mono text-xs text-[#241916] overflow-x-auto min-w-[400px]">
						<div class="text-[#9a0002] mb-2 font-semibold">// Legacy Monolithic Code (Spaghetti Subscriptions)</div>
						<pre class="text-[12px] leading-relaxed"><code>export class LegacyDashboardComponent implements OnInit &#123;
  data: any[] = [];
  // Memory leak: Unmanaged subscription
  ngOnInit() &#123;
    setInterval(() =&gt; &#123;
      this.http.get('/api/telemetry').subscribe(res =&gt; &#123;
        this.data = res as any[];
        // Triggers full-tree dirty check across 400 DOM nodes
      &#125;);
    &#125;, 500);
  &#125;
&#125;</code></pre>
					</div>
				{/if}

				<div class="flex items-center justify-between text-[11px] font-mono text-[#897870] border-t border-[#e3dedb] pt-3 min-w-[320px]">
					<span>STATUS: LEGACY REFACTORED</span>
					<span>BOTTLENECK REMOVED</span>
				</div>
			</div>

			<!-- Draggable Divider Line & Handle in Cherry Cola -->
			<div
				class="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
				style="left: {sliderPosition}%;"
			>
				<div class="w-1 h-full bg-[#f7f3ee] shadow-2xl"></div>
				<div class="absolute flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#f7f3ee] bg-[#9a0002] text-[#f7f3ee] shadow-2xl pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
					<SlidersHorizontal class="h-4 w-4" />
				</div>
			</div>

		</div>

		<!-- Helpful Drag Tip -->
		<div class="mt-4 flex items-center justify-between text-xs font-mono text-[#7a665e]">
			<div class="flex items-center gap-2">
				<span class="font-bold text-[#9a0002]">&larr; Drag slider left/right &rarr;</span>
				<span>to compare architectural performance in real time</span>
			</div>
			<div>
				Position: {sliderPosition}%
			</div>
		</div>

	</div>
</section>
