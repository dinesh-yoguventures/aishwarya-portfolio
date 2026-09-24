<script lang="ts">
	import { ArrowDownRight, Copy, Check, ExternalLink, BadgeCheck, Plus } from 'lucide-svelte';
	import { PERSONAL_INFO } from '$lib/data/portfolioData';

	let copied = $state(false);

	// cursor glow (section-level)
	let mx = $state(50);
	let my = $state(40);

	// profile card tilt
	let tilt = $state({ x: 0, y: 0, active: false });

	const firstName = 'Aishwarya'.split('');

	function copyEmail() {
		navigator.clipboard.writeText(PERSONAL_INFO.email);
		copied = true;
		setTimeout(() => (copied = false), 2600);
	}

	function onSectionMove(e: PointerEvent) {
		const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
		mx = ((e.clientX - r.left) / r.width) * 100;
		my = ((e.clientY - r.top) / r.height) * 100;
	}

	function onCardMove(e: PointerEvent) {
		const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
		tilt = {
			x: (e.clientX - r.left) / r.width - 0.5,
			y: (e.clientY - r.top) / r.height - 0.5,
			active: true
		};
	}

	function onCardLeave() {
		tilt = { x: 0, y: 0, active: false };
	}

	const metrics = [
		{ label: 'Experience', value: PERSONAL_INFO.stats.experience, accent: false },
		{ label: 'Projects', value: PERSONAL_INFO.stats.users, accent: false },
		{ label: 'Specialization', value: PERSONAL_INFO.stats.optimization, accent: true },
		{ label: 'Location', value: 'Bangalore', accent: false }
	];
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
	id="hero"
	onpointermove={onSectionMove}
	class="hero relative min-h-[calc(100dvh-82px)] overflow-hidden border-b border-[#e3dedb] text-[#241916] lg:h-[calc(100dvh-82px)] lg:max-h-[calc(100dvh-82px)]"
	style="--mx: {mx}%; --my: {my}%;"
>
	<!-- =========================================================
		BACKGROUND: Dreamy 2-Spread Gradient System (Global Brand Style)
	========================================================= -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
		<!-- Base warm pearl canvas -->
		<div class="dreamy-canvas absolute inset-0"></div>

		<!-- Spread 1: Primary Ruby/Cherry Dreamy Spread (Behind right profile area) -->
		<div class="dreamy-spread-primary right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2"></div>

		<!-- Spread 2: Secondary Separated Amber/Peach Dreamy Spread (Anchoring bottom-left) -->
		<div class="dreamy-spread-secondary left-[-2rem] sm:left-4 bottom-[-3rem] sm:bottom-0"></div>

		<!-- Cursor glow -->
		<div class="hero-spot absolute inset-0"></div>

		<!-- Faint architectural drafting grid with vignette mask -->
		<div class="dreamy-grid"></div>

		<!-- Tactile Velvety Film Grain -->
		<div class="dreamy-grain"></div>

		<!-- Bottom soft feather to main page -->
		<div
			class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fbf9f6]/90 to-transparent"
		></div>
	</div>

	<!-- =========================================================
		MAIN GRID
	========================================================= -->
	<div
		class="relative mx-auto flex min-h-[calc(100dvh-82px)] w-full max-w-[1440px] flex-col justify-between px-5 sm:px-8 lg:h-[calc(100dvh-82px)] lg:px-12 xl:px-16"
	>
		<div class="grid flex-1 grid-cols-1 items-center py-2 lg:grid-cols-12 lg:py-0">
			<!-- LEFT RAIL -->
			<aside
				class="hidden border-r border-[#241916]/[0.08] lg:col-span-1 lg:flex lg:h-full lg:flex-col lg:items-center lg:justify-between lg:py-6 xl:py-8"
			>
				<div class="flex flex-col items-center gap-3">
					<span class="font-mono text-[9px] tracking-[0.2em] text-[#9a0002]">01</span>
					<div class="h-14 w-px bg-gradient-to-b from-[#9a0002]/60 to-transparent xl:h-18"></div>
					<span
						class="font-mono text-[8px] tracking-[0.25em] text-[#897870]"
						style="writing-mode: vertical-rl;"
					>
						INTRODUCTION
					</span>
				</div>

				<div class="flex flex-col items-center gap-2.5">
					<div class="h-10 w-px bg-gradient-to-b from-transparent to-[#9a0002]/60 xl:h-12"></div>
					<ArrowDownRight class="animate-nudge h-3.5 w-3.5 text-[#9a0002]" />
				</div>
			</aside>

			<!-- CENTER CONTENT -->
			<main
				class="relative flex flex-col justify-center py-4 lg:col-span-7 lg:px-8 lg:py-2 xl:px-12"
			>
				<div class="mb-3 flex items-center gap-3 lg:mb-3.5">
					<div class="h-px w-8 bg-[#9a0002]"></div>
					<span class="text-[10px] font-semibold tracking-[0.22em] text-[#9a0002] uppercase">
						Senior Frontend Engineer
					</span>
				</div>

				<h1
					class="font-serif text-[11vw] leading-[0.9] font-medium tracking-[-0.05em] whitespace-nowrap text-[#241916] sm:text-[9.5vw] lg:text-[5.8vw] xl:text-[5.6rem]"
					aria-label="Aishwarya S."
				>
					<span aria-hidden="true">
						{#each firstName as ch, i}
							<span class="letter" style="--i: {i};">{ch}</span>
						{/each}
					</span>
					<span class="letter letter-accent text-[#9a0002]" style="--i: 9;" aria-hidden="true"
						>S.</span
					>
				</h1>

				<div
					class="mt-4 h-px w-full max-w-2xl bg-gradient-to-r from-[#9a0002]/50 via-[#d8d2ce] to-transparent lg:mt-4.5"
				></div>

				<div
					class="mt-3.5 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-[110px_1fr] sm:gap-6 lg:mt-4"
				>
					<div
						class="pt-0.5 font-mono text-[9px] leading-relaxed tracking-[0.16em] text-[#897870] uppercase"
					>
						Profile
					</div>

					<p
						class="max-w-2xl text-[17px] leading-[1.55] tracking-[-0.01em] text-[#4b3932] sm:text-[19px]"
					>
						Frontend engineer with
						<span class="hl font-semibold text-[#9a0002]">7+ years of experience</span>
						building scalable enterprise web applications across Energy, Banking &amp; RegTech — with
						a focus on clean interfaces, robust architecture and maintainable systems.
					</p>
				</div>

				<!-- ACTIONS -->
				<div class="mt-4 flex flex-wrap items-center gap-3 lg:mt-5">
					<a
						href="#projects"
						class="btn-primary group relative inline-flex items-center gap-4 overflow-hidden bg-[#9a0002] px-6 py-3 text-[13px] font-medium text-[#f7f3ee] shadow-[0_10px_30px_-12px_rgba(154,0,2,0.7)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(154,0,2,0.8)]"
					>
						<span class="relative z-10">Explore selected work</span>
						<ArrowDownRight
							class="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
						/>
					</a>

					<button
						type="button"
						onclick={copyEmail}
						class="btn-ghost group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden border border-[#d8d2ce] bg-white/60 px-5 py-3 text-[13px] font-medium text-[#4b3932] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9a0002] hover:text-[#f7f3ee]"
					>
						{#if copied}
							<Check class="relative z-10 h-4 w-4 text-[#9a0002] group-hover:text-[#f7f3ee]" />
							<span class="relative z-10 text-[#9a0002] group-hover:text-[#f7f3ee]"
								>Email copied</span
							>
						{:else}
							<Copy
								class="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]"
							/>
							<span class="relative z-10">Copy email</span>
						{/if}
					</button>

					<a
						href={PERSONAL_INFO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="link-underline group inline-flex items-center gap-2 px-3 py-3 text-[13px] font-medium text-[#75655e] transition-colors hover:text-[#9a0002]"
					>
						<span>LinkedIn</span>
						<ExternalLink
							class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>

				<!-- METRICS -->
				<div class="mt-4 grid max-w-3xl grid-cols-2 gap-y-3 sm:grid-cols-4 lg:mt-5">
					{#each metrics as m}
						<div
							class="metric group relative cursor-default border-l border-[#241916]/10 py-0.5 pr-4 pl-4 first:border-l-0 first:pl-0"
						>
							<span class="metric-bar"></span>
							<div class="font-mono text-[8px] tracking-[0.18em] text-[#897870] uppercase">
								{m.label}
							</div>
							<div
								class="mt-1 text-[17px] font-semibold transition-transform duration-300 group-hover:translate-x-1 {m.accent
									? 'text-[#9a0002]'
									: 'text-[#241916]'}"
							>
								{m.value}
							</div>
						</div>
					{/each}
				</div>
			</main>

			<!-- RIGHT: PROFILE CARD -->
			<section
				class="relative flex items-center justify-center py-4 lg:col-span-4 lg:border-l lg:border-[#241916]/[0.08] lg:py-2 lg:pl-6 xl:pl-10"
			>
				<div
					class="relative mx-auto w-full max-w-[290px] sm:max-w-[310px] lg:mx-0 lg:max-w-[300px] xl:max-w-[330px]"
				>
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="profile-card group relative"
						onpointermove={onCardMove}
						onpointerleave={onCardLeave}
						style="transform: perspective(1000px) rotateY({tilt.x * 8}deg) rotateX({tilt.y *
							-8}deg) translateY({tilt.active ? -5 : 0}px); --gx: {(tilt.x + 0.5) *
							100}%; --gy: {(tilt.y + 0.5) * 100}%;"
					>
						<!-- Ambient Glow Behind Card -->
						<div
							class="pointer-events-none absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-tr from-[#9a0002]/20 via-[#ff8a6b]/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
						></div>

						<!-- Card Shell -->
						<div
							class="card-shell relative z-10 rounded-[1.9rem] p-[6px] transition-all duration-300 xl:rounded-[2.2rem]"
						>
							<!-- Photo: Generously increased visible height -->
							<div
								class="relative h-[270px] overflow-hidden rounded-[1.5rem] bg-[#e9e3de] sm:h-[295px] lg:h-[280px] xl:h-[310px] xl:rounded-[1.8rem]"
							>
								<img
									src="/aishwarya-portrait.jpg"
									alt="Aishwarya S — Senior Frontend Engineer"
									class="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
									loading="eager"
								/>

								<!-- Technical Viewfinder Hairline Overlay -->

								<!-- Soft light wash -->
								<div
									class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#9a0002]/15"
								></div>

								<!-- Sheen that follows the cursor -->
								<div class="card-sheen pointer-events-none absolute inset-0"></div>
							</div>

							<!-- Info Plate -->
							<div class="px-3.5 pt-3 pb-3 sm:px-4 sm:pt-3.5 sm:pb-3.5">
								<div class="flex items-center justify-between gap-2">
									<!-- Identity & Role -->
									<div class="min-w-0">
										<div class="flex items-center gap-1.5">
											<h2
												class="font-serif text-[24px] leading-none font-medium tracking-[-0.03em] text-[#241916] sm:text-[26px]"
											>
												Aishwarya S
											</h2>
											<BadgeCheck class="verified h-5 w-5 shrink-0 fill-[#9a0002] text-white" />
										</div>
									</div>

									<!-- Connect CTA -->
									<a
										href={PERSONAL_INFO.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										class="follow group/btn relative inline-flex shrink-0 items-center gap-1 overflow-hidden rounded-full border border-[#e6e1dd] bg-[#f2efec] px-3.5 py-1.5 text-[12px] font-medium text-[#241916] shadow-sm transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(154,0,2,0.7)]"
									>
										<span class="relative z-10">Connect</span>
										<Plus
											class="relative z-10 h-3 w-3 transition-transform duration-300 group-hover/btn:rotate-90"
										/>
									</a>
								</div>
							</div>
						</div>

						<!-- Metadata below the card -->
						<div
							class="mt-2.5 flex items-center justify-between px-3 font-mono text-[8px] tracking-[0.14em] text-[#75655e] uppercase"
						>
							<span class="chip">Angular 17</span>
							<span class="text-[#9a0002]">•</span>
							<span class="chip">Liferay DXP</span>
							<span class="text-[#9a0002]">•</span>
							<span class="chip">Enterprise</span>
						</div>
					</div>
				</div>
			</section>
		</div>

		<!-- BOTTOM STATUS BAR -->
		<footer
			class="flex h-10 shrink-0 items-center justify-between border-t border-[#241916]/[0.08] font-mono text-[8px] tracking-[0.16em] text-[#897870] uppercase sm:h-11"
		>
			<div class="hidden sm:block">
				<span class="text-[#9a0002]">01</span>
				&nbsp;&nbsp; Introduction
			</div>

			<a
				href="#projects"
				class="group flex items-center gap-3 transition-colors hover:text-[#9a0002]"
			>
				<span>Scroll to explore</span>
				<span class="h-px w-8 bg-[#9a0002] transition-all duration-500 group-hover:w-14"></span>
				<ArrowDownRight
					class="h-3 w-3 text-[#9a0002] transition-transform duration-300 group-hover:translate-y-0.5"
				/>
			</a>

			<div class="hidden sm:block">Selected work / Experience / Contact</div>
		</footer>
	</div>
</section>

<style>
	/* ---------- Background: Warm Pearl Ivory Canvas ---------- */
	.hero {
		background: #fbf9f6;
	}

	/* Cursor glow: pearl-white core with a whisper of cherry */
	.hero-spot {
		background:
			radial-gradient(
				420px circle at var(--mx) var(--my),
				rgba(255, 255, 255, 0.8),
				rgba(255, 255, 255, 0) 65%
			),
			radial-gradient(
				640px circle at var(--mx) var(--my),
				rgba(154, 0, 2, 0.06),
				rgba(255, 140, 120, 0.03) 45%,
				transparent 72%
			);
		transition: background 0.2s ease-out;
	}

	/* ---------- Headline letters ---------- */
	.letter {
		display: inline-block;
		transition:
			transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
			color 0.3s ease;
		animation: letter-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
		animation-delay: calc(var(--i) * 45ms);
	}
	.letter:hover {
		transform: translateY(-0.12em) rotate(-4deg) scale(1.06);
		color: #9a0002;
	}
	.letter-accent:hover {
		color: #241916;
	}
	@keyframes letter-in {
		from {
			opacity: 0;
			transform: translateY(0.35em);
		}
	}

	/* ---------- Highlighted phrase ---------- */
	.hl {
		background: linear-gradient(90deg, rgba(154, 0, 2, 0.14), rgba(255, 138, 107, 0.26)) no-repeat 0
			92% / 100% 0.3em;
		transition: background-size 0.4s ease;
	}
	.hl:hover {
		background-size: 100% 100%;
	}

	/* ---------- Buttons ---------- */
	.btn-primary::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(110deg, #760002 0%, #c4304a 55%, #ff8a6b 100%);
		transform: translateX(-101%);
		transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.btn-primary:hover::before {
		transform: translateX(0);
	}
	.btn-primary::after {
		content: '';
		position: absolute;
		top: 0;
		left: -60%;
		width: 40%;
		height: 100%;
		background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.35), transparent);
		transform: skewX(-20deg);
	}
	.btn-primary:hover::after {
		left: 130%;
		transition: left 0.8s ease;
	}

	.btn-ghost::before {
		content: '';
		position: absolute;
		inset: 0;
		background: #9a0002;
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.btn-ghost:hover::before {
		transform: scaleY(1);
	}

	.link-underline span {
		background: linear-gradient(currentColor, currentColor) no-repeat 0 100% / 0 1px;
		transition: background-size 0.35s ease;
		padding-bottom: 2px;
	}
	.link-underline:hover span {
		background-size: 100% 1px;
	}

	/* ---------- Metrics ---------- */
	.metric-bar {
		position: absolute;
		left: 0;
		top: -1px;
		height: 2px;
		width: 0;
		background: linear-gradient(90deg, #9a0002, #ff8a6b);
		transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.metric:hover .metric-bar {
		width: 100%;
	}

	/* ---------- Profile card ---------- */
	.profile-card {
		transform-style: preserve-3d;
		transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.card-shell {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(250, 249, 248, 0.88));
		border: 1px solid rgba(255, 255, 255, 0.9);
		box-shadow:
			0 0 0 1px rgba(36, 25, 22, 0.06),
			0 1px 2px rgba(36, 25, 22, 0.04),
			0 24px 50px -24px rgba(36, 25, 22, 0.28),
			0 40px 80px -40px rgba(154, 0, 2, 0.22);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		transition: box-shadow 0.4s ease;
	}
	.profile-card:hover .card-shell {
		box-shadow:
			0 0 0 1px rgba(154, 0, 2, 0.14),
			0 1px 2px rgba(36, 25, 22, 0.04),
			0 30px 60px -24px rgba(36, 25, 22, 0.3),
			0 50px 90px -36px rgba(154, 0, 2, 0.35);
	}

	.card-sheen {
		background: radial-gradient(
			260px circle at var(--gx, 50%) var(--gy, 50%),
			rgba(255, 255, 255, 0.4),
			transparent 60%
		);
		opacity: 0;
		transition: opacity 0.4s ease;
	}
	.profile-card:hover .card-sheen {
		opacity: 1;
	}

	:global(.verified) {
		transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.profile-card:hover :global(.verified) {
		transform: rotate(360deg) scale(1.1);
	}

	.follow::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(110deg, #9a0002 0%, #c4304a 60%, #ff8a6b 100%);
		opacity: 0;
		transform: scale(0.6);
		border-radius: 9999px;
		transition:
			opacity 0.3s ease,
			transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.follow:hover::before {
		opacity: 1;
		transform: scale(1);
	}

	.chip {
		transition:
			color 0.25s ease,
			letter-spacing 0.3s ease;
		cursor: default;
	}
	.chip:hover {
		color: #9a0002;
		letter-spacing: 0.2em;
	}

	/* ---------- Scroll nudge ---------- */
	:global(.animate-nudge) {
		animation: nudge 2s ease-in-out infinite;
	}
	@keyframes nudge {
		50% {
			transform: translate(3px, 3px);
		}
	}

	/* ---------- Accessibility ---------- */
	@media (prefers-reduced-motion: reduce) {
		.letter,
		:global(.animate-nudge) {
			animation: none;
		}
		.profile-card {
			transform: none !important;
		}
	}
</style>
