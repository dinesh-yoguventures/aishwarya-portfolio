<script lang="ts">
	import { SlidersHorizontal, Sparkles, AlertTriangle, CheckCircle, Code, Cpu, Gauge } from 'lucide-svelte';

	let sliderPosition = $state(50); // percentage 0 to 100
	let isDragging = $state(false);
	let activeTab = $state<'metrics' | 'code' | 'audit'>('metrics');

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

<section id="performance-lab" class="relative py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
			<div>
				<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#64748B]">
					<span class="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
					Interactive Architecture Lab
				</div>
				<h2 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0F172A]">
					Before / After Modernization
				</h2>
			</div>
			
			<div class="flex flex-wrap items-center gap-2">
				<button
					type="button"
					onclick={() => sliderPosition = 15}
					class="rounded-full px-3 py-1 text-xs font-mono border border-[#E2E8F0] hover:bg-[#F8F9FA] transition-all cursor-pointer {sliderPosition <= 20 ? 'bg-[#0F172A] text-white' : 'text-[#64748B]'}"
				>
					Legacy Portal
				</button>
				<button
					type="button"
					onclick={() => sliderPosition = 50}
					class="rounded-full px-3 py-1 text-xs font-mono border border-[#E2E8F0] hover:bg-[#F8F9FA] transition-all cursor-pointer {sliderPosition > 20 && sliderPosition < 80 ? 'bg-[#0F172A] text-white' : 'text-[#64748B]'}"
				>
					Split (50/50)
				</button>
				<button
					type="button"
					onclick={() => sliderPosition = 85}
					class="rounded-full px-3 py-1 text-xs font-mono border border-[#E2E8F0] hover:bg-[#F8F9FA] transition-all cursor-pointer {sliderPosition >= 80 ? 'bg-[#0F172A] text-white' : 'text-[#64748B]'}"
				>
					Modernized (98/100)
				</button>
			</div>
		</div>

		<p class="text-sm sm:text-base text-[#64748B] max-w-3xl mb-8">
			Drag the interactive slider below to inspect the quantifiable impact of decomposing legacy monolithic Angular portals into reactive, Signal-driven standalone architectures.
		</p>

		<!-- Sub tabs for view types -->
		<div class="flex border-b border-[#E5E7EB] mb-6 gap-6 text-xs sm:text-sm font-medium">
			<button
				type="button"
				onclick={() => activeTab = 'metrics'}
				class="pb-3 flex items-center gap-2 transition-all cursor-pointer {activeTab === 'metrics' ? 'border-b-2 border-[#0F172A] text-[#0F172A] font-semibold' : 'text-[#64748B] hover:text-[#0F172A]'}"
			>
				<Gauge class="h-4 w-4" />
				Core Web Vitals &amp; Audit Score
			</button>
			<button
				type="button"
				onclick={() => activeTab = 'code'}
				class="pb-3 flex items-center gap-2 transition-all cursor-pointer {activeTab === 'code' ? 'border-b-2 border-[#0F172A] text-[#0F172A] font-semibold' : 'text-[#64748B] hover:text-[#0F172A]'}"
			>
				<Code class="h-4 w-4" />
				Code Architecture Diff
			</button>
		</div>

		<!-- Interactive Split Slider Container -->
		<div
			class="relative w-full overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#F8F9FA] shadow-lg select-none cursor-ew-resize min-h-[440px]"
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
			<!-- Modernized (Right / Full Background) Layer -->
			<div class="absolute inset-0 bg-[#0F172A] text-white p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-2">
						<span class="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>
						<span class="font-mono text-xs font-semibold tracking-wider uppercase text-emerald-400">
							Modernized Architecture (Angular 17)
						</span>
					</div>
					<div class="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-3 py-1 font-mono text-xs text-emerald-300">
						<span>Lighthouse: 98 / 100</span>
						<CheckCircle class="h-3.5 w-3.5 text-emerald-400" />
					</div>
				</div>

				{#if activeTab === 'metrics'}
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
						<div class="rounded-xl border border-neutral-800 bg-neutral-900/90 p-4">
							<span class="block text-xs font-mono text-neutral-400">First Contentful Paint</span>
							<span class="text-2xl font-bold text-emerald-400">0.6s</span>
							<span class="block text-[11px] text-neutral-500 mt-1">Target: &lt; 1.8s (Good)</span>
						</div>
						<div class="rounded-xl border border-neutral-800 bg-neutral-900/90 p-4">
							<span class="block text-xs font-mono text-neutral-400">Time to Interactive</span>
							<span class="text-2xl font-bold text-emerald-400">1.1s</span>
							<span class="block text-[11px] text-neutral-500 mt-1">-78% reduction</span>
						</div>
						<div class="rounded-xl border border-neutral-800 bg-neutral-900/90 p-4">
							<span class="block text-xs font-mono text-neutral-400">Initial JS Bundle</span>
							<span class="text-2xl font-bold text-emerald-400">620 KB</span>
							<span class="block text-[11px] text-neutral-500 mt-1">Route-level code splitting</span>
						</div>
						<div class="rounded-xl border border-neutral-800 bg-neutral-900/90 p-4">
							<span class="block text-xs font-mono text-neutral-400">Change Detection</span>
							<span class="text-2xl font-bold text-emerald-400">OnPush</span>
							<span class="block text-[11px] text-neutral-500 mt-1">Signals + fine-grained</span>
						</div>
					</div>

					<div class="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 font-mono text-xs text-neutral-300 space-y-1.5">
						<div class="text-emerald-400 font-semibold">// Modernized Architecture Highlights:</div>
						<div>&bull; Standalone Components + Deferred Blocks (<span class="text-amber-300">@defer</span>)</div>
						<div>&bull; Immutable RxJS Data Pipelines with <span class="text-cyan-300">takeUntilDestroyed()</span></div>
						<div>&bull; Zero Zone.js CD cycles on high-rate telemetry streams</div>
					</div>
				{:else}
					<div class="my-4 rounded-xl border border-neutral-800 bg-black/90 p-4 font-mono text-xs text-neutral-200 overflow-x-auto">
						<div class="text-emerald-400 mb-2 font-semibold">// Modern Angular 17 Reactive Architecture</div>
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

				<div class="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-t border-neutral-800 pt-3">
					<span>STATUS: PRODUCTION-DEPLOYED</span>
					<span>30% AVERAGE LOAD GAIN VERIFIED</span>
				</div>
			</div>

			<!-- Legacy (Left / Clipped Overlay) Layer -->
			<div
				class="absolute inset-y-0 left-0 bg-[#F1F5F9] text-[#0F172A] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-r-2 border-red-500 shadow-2xl"
				style="width: {sliderPosition}%;"
			>
				<div class="flex items-center justify-between min-w-[320px]">
					<div class="flex items-center gap-2">
						<span class="flex h-3 w-3 rounded-full bg-red-500"></span>
						<span class="font-mono text-xs font-semibold tracking-wider uppercase text-red-700">
							Legacy Portal (Before Refactor)
						</span>
					</div>
					<div class="flex items-center gap-1.5 rounded-full border border-red-200 bg-red-100 px-3 py-1 font-mono text-xs text-red-800">
						<span>Lighthouse: 42 / 100</span>
						<AlertTriangle class="h-3.5 w-3.5 text-red-600" />
					</div>
				</div>

				{#if activeTab === 'metrics'}
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 min-w-[500px]">
						<div class="rounded-xl border border-red-200 bg-white p-4">
							<span class="block text-xs font-mono text-[#64748B]">First Contentful Paint</span>
							<span class="text-2xl font-bold text-red-600">3.4s</span>
							<span class="block text-[11px] text-red-500 mt-1">High main-thread lock</span>
						</div>
						<div class="rounded-xl border border-red-200 bg-white p-4">
							<span class="block text-xs font-mono text-[#64748B]">Time to Interactive</span>
							<span class="text-2xl font-bold text-red-600">5.2s</span>
							<span class="block text-[11px] text-red-500 mt-1">Sluggish touch response</span>
						</div>
						<div class="rounded-xl border border-red-200 bg-white p-4">
							<span class="block text-xs font-mono text-[#64748B]">Initial JS Bundle</span>
							<span class="text-2xl font-bold text-red-600">4.8 MB</span>
							<span class="block text-[11px] text-red-500 mt-1">Monolithic unchunked JS</span>
						</div>
						<div class="rounded-xl border border-red-200 bg-white p-4">
							<span class="block text-xs font-mono text-[#64748B]">Change Detection</span>
							<span class="text-2xl font-bold text-red-600">Default</span>
							<span class="block text-[11px] text-red-500 mt-1">Full app tree dirty checking</span>
						</div>
					</div>

					<div class="rounded-xl border border-red-200 bg-red-50/80 p-4 font-mono text-xs text-red-900 space-y-1.5 min-w-[320px]">
						<div class="font-semibold text-red-700">// Legacy Portal Architectural Bottlenecks:</div>
						<div>&times; Giant monolithic NgModule loading unused enterprise features</div>
						<div>&times; Unsubscribed RxJS observables causing heap memory leakage</div>
						<div>&times; Heavy zone.js recalculations on high-frequency API responses</div>
					</div>
				{:else}
					<div class="my-4 rounded-xl border border-red-200 bg-white p-4 font-mono text-xs text-neutral-800 overflow-x-auto min-w-[400px]">
						<div class="text-red-600 mb-2 font-semibold">// Legacy Monolithic Code (Spaghetti Subscriptions)</div>
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

				<div class="flex items-center justify-between text-[11px] font-mono text-red-800 border-t border-red-200 pt-3 min-w-[320px]">
					<span>STATUS: LEGACY REFACTORED</span>
					<span>BOTTLENECK REMOVED</span>
				</div>
			</div>

			<!-- Draggable Divider Line & Handle -->
			<div
				class="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
				style="left: {sliderPosition}%;"
			>
				<div class="w-0.5 h-full bg-white shadow-2xl"></div>
				<div class="absolute flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#0F172A] text-white shadow-xl pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
					<SlidersHorizontal class="h-4 w-4" />
				</div>
			</div>

		</div>

		<!-- Helpful Drag Tip -->
		<div class="mt-4 flex items-center justify-between text-xs font-mono text-[#64748B]">
			<div class="flex items-center gap-2">
				<span class="font-bold text-[#0F172A]">&larr; Drag slider left/right &rarr;</span>
				<span>to compare architectural performance in real time</span>
			</div>
			<div>
				Position: {sliderPosition}%
			</div>
		</div>

	</div>
</section>
