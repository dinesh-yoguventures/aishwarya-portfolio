<script lang="ts">
	import { ArrowDownRight, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-svelte';
	import { PERSONAL_INFO } from '$lib/data/portfolioData';

	let copied = $state(false);

	function copyEmail() {
		navigator.clipboard.writeText(PERSONAL_INFO.email);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2600);
	}
</script>

<section
	id="hero"
	class="relative min-h-[calc(100vh-4.5rem)] overflow-hidden border-b border-[#ded6ce] bg-[#f7f3ee] text-[#241916]"
>
	<!-- =========================================================
		BACKGROUND SYSTEM
	========================================================= -->

	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<!-- Fine drafting-paper texture -->
		<div
			class="absolute inset-0 opacity-[0.32]"
			style="
				background-image:
					linear-gradient(rgba(36,25,22,0.035) 1px, transparent 1px),
					linear-gradient(90deg, rgba(36,25,22,0.035) 1px, transparent 1px);
				background-size: 32px 32px;
			"
		></div>

		<!-- Fine dot field -->
		<div
			class="absolute inset-0 opacity-[0.18]"
			style="
				background-image: radial-gradient(circle, #9a0002 0.7px, transparent 0.7px);
				background-size: 18px 18px;
				mask-image: linear-gradient(to bottom, black, transparent 75%);
			"
		></div>

		<!-- Large soft architectural circle -->
		<div
			class="absolute -top-[16rem] -right-[18rem] h-[48rem] w-[48rem] rounded-full border border-[#9a0002]/[0.07]"
		></div>

		<div
			class="absolute -top-[10rem] -right-[12rem] h-[36rem] w-[36rem] rounded-full border border-[#9a0002]/[0.055]"
		></div>

		<!-- Soft warm glow -->
		<div
			class="absolute top-[10%] right-[10%] h-[28rem] w-[28rem] rounded-full bg-[#9a0002]/[0.025] blur-3xl"
		></div>

		<!-- Bottom accent -->
		<div
			class="absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full border border-[#241916]/[0.04]"
		></div>

		<!-- Main horizontal alignment -->
		<div class="absolute top-[42%] right-0 left-0 border-t border-[#9a0002]/[0.055]"></div>
	</div>

	<!-- =========================================================
		MAIN GRID
	========================================================= -->

	<div
		class="relative mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-12 xl:px-16"
	>
		<!-- =====================================================
			HERO BODY
		===================================================== -->

		<div class="grid flex-1 grid-cols-1 lg:grid-cols-12">
			<!-- =================================================
				LEFT SIDE NAV RAIL
			================================================= -->

			<aside
				class="hidden border-r border-[#ded6ce] lg:col-span-1 lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-10"
			>
				<div class="flex flex-col items-center gap-4">
					<span class="font-mono text-[9px] tracking-[0.2em] text-[#9a0002]"> 01 </span>

					<div class="h-20 w-px bg-[#d4c9c1]"></div>

					<span
						class="font-mono text-[8px] tracking-[0.25em] text-[#897870]"
						style="writing-mode: vertical-rl;"
					>
						INTRODUCTION
					</span>
				</div>

				<div class="flex flex-col items-center gap-3">
					<div class="h-12 w-px bg-[#d4c9c1]"></div>

					<ArrowDownRight class="h-3.5 w-3.5 text-[#9a0002]" />
				</div>
			</aside>

			<!-- =================================================
				CENTER CONTENT
			================================================= -->

			<main class="relative flex flex-col justify-center py-12 lg:col-span-7 lg:px-10 xl:px-14">
				<!-- Small category -->

				<div class="mb-7 flex items-center gap-3">
					<div class="h-px w-8 bg-[#9a0002]"></div>

					<span class="text-[10px] font-semibold tracking-[0.22em] text-[#9a0002] uppercase">
						Senior Frontend Engineer
					</span>
				</div>

				<!-- Main headline -->

				<h1
					class="font-serif text-[11vw] leading-[0.9] font-medium tracking-[-0.05em] whitespace-nowrap text-[#241916] sm:text-[9.5vw] lg:text-[5.8vw] xl:text-[5.6rem]"
				>
					<span>Aishwarya</span>
					<span class="text-[#9a0002]">S.</span>
				</h1>

				<!-- Underline -->

				<div class="mt-8 h-px w-full max-w-2xl bg-[#d4c9c1]"></div>

				<!-- Description -->

				<div class="mt-7 grid max-w-3xl grid-cols-1 gap-7 sm:grid-cols-[110px_1fr]">
					<div
						class="font-mono text-[9px] leading-relaxed tracking-[0.16em] text-[#897870] uppercase"
					>
						Profile
					</div>

					<p
						class="max-w-2xl text-[17px] leading-[1.6] tracking-[-0.01em] text-[#4b3932] sm:text-[19px]"
					>
						Frontend engineer with
						<span class="font-semibold text-[#9a0002]"> 7+ years of experience </span>
						building scalable enterprise web applications across Energy, Banking &amp; RegTech — with
						a focus on clean interfaces, robust architecture and maintainable systems.
					</p>
				</div>

				<!-- =================================================
					ACTIONS
				================================================= -->

				<div class="mt-9 flex flex-wrap items-center gap-3">
					<a
						href="#projects"
						class="group inline-flex items-center gap-4 bg-[#9a0002] px-6 py-3.5 text-[13px] font-medium text-[#f7f3ee] transition-all duration-300 hover:bg-[#760002]"
					>
						<span>Explore selected work</span>

						<ArrowDownRight
							class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
						/>
					</a>

					<button
						type="button"
						onclick={copyEmail}
						class="group inline-flex cursor-pointer items-center gap-2 border border-[#cfc4bc] bg-[#f7f3ee] px-5 py-3.5 text-[13px] font-medium text-[#4b3932] transition-all duration-300 hover:border-[#9a0002] hover:text-[#9a0002]"
					>
						{#if copied}
							<Check class="h-4 w-4 text-[#9a0002]" />

							<span class="text-[#9a0002]"> Email copied </span>
						{:else}
							<Copy class="h-4 w-4 text-[#75655e] transition-colors group-hover:text-[#9a0002]" />

							<span>Copy email</span>
						{/if}
					</button>

					<a
						href={PERSONAL_INFO.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-flex items-center gap-2 px-3 py-3.5 text-[13px] font-medium text-[#75655e] transition-colors hover:text-[#9a0002]"
					>
						LinkedIn

						<ExternalLink
							class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>

				<!-- =================================================
					METRICS
				================================================= -->

				<div class="mt-11 grid max-w-3xl grid-cols-2 border-t border-[#d4c9c1] pt-5 sm:grid-cols-4">
					<div class="border-r border-[#d4c9c1] pr-4">
						<div class="font-mono text-[8px] tracking-[0.18em] text-[#897870] uppercase">
							Experience
						</div>

						<div class="mt-1.5 text-[17px] font-semibold text-[#241916]">
							{PERSONAL_INFO.stats.experience}
						</div>
					</div>

					<div class="border-r border-[#d4c9c1] px-4">
						<div class="font-mono text-[8px] tracking-[0.18em] text-[#897870] uppercase">
							Projects
						</div>

						<div class="mt-1.5 text-[17px] font-semibold text-[#241916]">
							{PERSONAL_INFO.stats.users}
						</div>
					</div>

					<div class="border-r border-[#d4c9c1] px-4">
						<div class="font-mono text-[8px] tracking-[0.18em] text-[#897870] uppercase">
							Specialization
						</div>

						<div class="mt-1.5 text-[17px] font-semibold text-[#9a0002]">
							{PERSONAL_INFO.stats.optimization}
						</div>
					</div>

					<div class="pl-4">
						<div class="font-mono text-[8px] tracking-[0.18em] text-[#897870] uppercase">
							Location
						</div>

						<div class="mt-1.5 text-[17px] font-semibold text-[#241916]">Bangalore</div>
					</div>
				</div>
			</main>

			<!-- =================================================
				RIGHT PORTRAIT COLUMN
			================================================= -->

			<section
				class="relative flex items-center border-l-0 border-[#ded6ce] py-10 lg:col-span-4 lg:border-l lg:pl-10"
			>
				<div class="relative mx-auto w-full max-w-[390px] lg:mx-0">
					<!-- Technical coordinates -->

					<div
						class="absolute -top-7 left-0 flex w-full justify-between font-mono text-[8px] tracking-[0.15em] text-[#897870]"
					>
						<span>12°58' N</span>
						<span>77°35' E</span>
					</div>

					<!-- Big background number -->

					<div
						class="pointer-events-none absolute -top-20 -right-3 font-serif text-[13rem] leading-none tracking-[-0.08em] text-[#9a0002]/[0.065] select-none sm:text-[15rem]"
					>
						07
					</div>

					<!-- Image frame -->

					<div class="relative">
						<!-- Offset cherry frame -->

						<div class="absolute -bottom-3 -left-3 h-full w-full border border-[#9a0002]/30"></div>

						<div class="relative z-10 overflow-hidden border border-[#cfc4bc] bg-[#ebe4dc] p-2">
							<div class="group relative aspect-[4/5] overflow-hidden bg-[#d8cec5]">
								<img
									src="/aishwarya-portrait.jpg"
									alt="Aishwarya S — Senior Frontend Engineer"
									class="h-full w-full object-cover object-top contrast-[1.04] grayscale transition-all duration-700 ease-out group-hover:scale-[1.025] group-hover:grayscale-[0.15]"
									loading="eager"
								/>

								<!-- subtle cherry wash -->

								<div
									class="pointer-events-none absolute inset-0 bg-[#9a0002]/[0.045] mix-blend-multiply"
								></div>

								<!-- corner markers -->

								<div class="absolute top-4 left-4 h-5 w-5 border-t border-l border-white/60"></div>

								<div class="absolute top-4 right-4 h-5 w-5 border-t border-r border-white/60"></div>

								<div
									class="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-white/60"
								></div>

								<div
									class="absolute right-4 bottom-4 h-5 w-5 border-r border-b border-white/60"
								></div>

								<!-- Bottom image information -->

								<div
									class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241916]/75 to-transparent px-5 pt-20 pb-5"
								>
									<div class="flex items-end justify-between">
										<div>
											<div
												class="mb-1 flex items-center gap-2 font-mono text-[9px] tracking-[0.15em] text-[#f7f3ee]/70 uppercase"
											>
												<span class="h-1.5 w-1.5 rounded-full bg-[#9a0002]"></span>
												Profile
											</div>

											<div class="text-[15px] font-medium tracking-[-0.01em] text-[#f7f3ee]">
												Senior Frontend Engineer
											</div>
										</div>

										<div class="font-mono text-[9px] tracking-wider text-[#f7f3ee]/70">AS / 01</div>
									</div>
								</div>
							</div>

							<!-- Image metadata strip -->

							<div
								class="flex items-center justify-between px-2 py-3 font-mono text-[8px] tracking-[0.14em] text-[#75655e] uppercase"
							>
								<span>Angular 17</span>

								<span class="text-[#9a0002]">•</span>

								<span>Liferay DXP</span>

								<span class="text-[#9a0002]">•</span>

								<span>Enterprise</span>
							</div>
						</div>
					</div>

					<!-- =================================================
						FLOATING INFO
					================================================= -->

					<div
						class="absolute top-[22%] -left-7 z-20 hidden border border-[#d4c9c1] bg-[#f7f3ee] px-4 py-3 shadow-[0_8px_30px_rgba(36,25,22,0.05)] sm:block"
					>
						<div class="font-mono text-[8px] tracking-[0.18em] text-[#897870] uppercase">
							Experience
						</div>

						<div class="mt-1 font-serif text-[27px] leading-none text-[#9a0002]">7+</div>

						<div class="mt-1 text-[8px] tracking-wider text-[#897870] uppercase">Years</div>
					</div>
				</div>
			</section>
		</div>

		<!-- =====================================================
			BOTTOM STATUS BAR
		===================================================== -->

		<footer
			class="flex min-h-[48px] items-center justify-between border-t border-[#ded6ce] font-mono text-[8px] tracking-[0.16em] text-[#897870] uppercase"
		>
			<div class="hidden sm:block">
				<span class="text-[#9a0002]">01</span>
				&nbsp;&nbsp; Introduction
			</div>

			<div class="flex items-center gap-3">
				<span>Scroll to explore</span>

				<span class="h-px w-8 bg-[#9a0002]"></span>

				<ArrowDownRight class="h-3 w-3 text-[#9a0002]" />
			</div>

			<div class="hidden sm:block">Selected work / Experience / Contact</div>
		</footer>
	</div>
</section>
