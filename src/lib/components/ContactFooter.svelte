<script lang="ts">
	import { Mail, Copy, Check, ExternalLink, Calendar, ArrowUpRight, Send, CheckCircle2 } from 'lucide-svelte';
	import { PERSONAL_INFO } from '$lib/data/portfolioData';

	let { onOpenBooking } = $props<{
		onOpenBooking: () => void;
	}>();

	let emailCopied = $state(false);
	let messageSent = $state(false);
	let contactName = $state('');
	let contactEmail = $state('');
	let contactMessage = $state('');

	function copyEmail() {
		navigator.clipboard.writeText(PERSONAL_INFO.email);
		emailCopied = true;
		setTimeout(() => {
			emailCopied = false;
		}, 2600);
	}

	function handleSendMessage(e: SubmitEvent) {
		e.preventDefault();
		messageSent = true;
		setTimeout(() => {
			messageSent = false;
			contactName = '';
			contactEmail = '';
			contactMessage = '';
		}, 3500);
	}
</script>

<section id="contact" class="relative py-20 lg:py-28 bg-transparent">
	<!-- Background Accents: 2 Separated Dreamy Gradient Spreads (Seamless Flow) -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<!-- Spread 1: Primary Ruby/Cherry Bloom in bottom-right -->
		<div class="dreamy-spread-primary absolute bottom-[-8%] right-[-4%] w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem]"></div>
		<!-- Spread 2: Secondary Warm Amber/Peach Bloom in top-left -->
		<div class="dreamy-spread-secondary absolute top-[-6%] left-[-4%] w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem]"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
			
			<!-- Left Column: Editorial Invitation & Email Copy Interaction -->
			<div class="lg:col-span-6 flex flex-col justify-between">
				<div>
					<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#7a665e]">
						<span class="inline-block h-2 w-2 rounded-full bg-[#9a0002]"></span>
						Contact &bull; Direct Reach
					</div>
					<h2 class="mt-2 text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#241916]">
						Let's architect something robust.
					</h2>
					<p class="mt-4 text-lg text-[#3b271e] leading-relaxed max-w-lg">
						Available for Senior Frontend Engineer, Staff SDE, and Lead Angular positions. Whether you're modernizing a legacy enterprise platform or scaling high-volume real-time portals, let's talk.
					</p>

					<!-- Copy Email & Phone Micro-interaction Cards -->
					<div class="mt-8 space-y-3 max-w-md">
						<div class="rounded-2xl card-glass p-5">
							<span class="block text-xs font-mono text-[#7a665e] mb-1.5 uppercase tracking-wider">
								Direct Email Channel
							</span>
							<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
								<span class="font-mono text-base font-semibold text-[#241916]">
									{PERSONAL_INFO.email}
								</span>

								<button
									type="button"
									onclick={copyEmail}
									class="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#9a0002] px-4 py-2 text-xs font-medium text-[#f7f3ee] hover:bg-[#7a0002] transition-all cursor-pointer self-start sm:self-auto shrink-0 shadow-xs active:scale-98"
								>
									{#if emailCopied}
										<Check class="h-3.5 w-3.5 text-[#f7f3ee]" />
										<span class="text-[#f7f3ee] font-semibold">[ Copied &check; ]</span>
									{:else}
										<Copy class="h-3.5 w-3.5" />
										<span>Copy Email</span>
									{/if}
								</button>
							</div>
						</div>

						<div class="rounded-2xl card-glass p-5">
							<span class="block text-xs font-mono text-[#7a665e] mb-1.5 uppercase tracking-wider">
								Direct Phone Line
							</span>
							<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
								<a
									href="tel:{PERSONAL_INFO.phone}"
									class="font-mono text-base font-semibold text-[#241916] hover:text-[#9a0002] hover:underline"
								>
									{PERSONAL_INFO.phoneDisplay}
								</a>

								<a
									href="tel:{PERSONAL_INFO.phone}"
									class="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#e3dedb] bg-[#f7f3ee] px-4 py-2 text-xs font-medium text-[#241916] hover:border-[#9a0002] hover:text-[#9a0002] transition-all self-start sm:self-auto shrink-0"
								>
									<span>Call Direct</span>
								</a>
							</div>
						</div>
					</div>

					<!-- Direct Links -->
					<div class="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono">
						<a
							href={PERSONAL_INFO.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 text-[#241916] hover:text-[#9a0002] hover:underline"
						>
							<span>LinkedIn Profile</span>
							<ExternalLink class="h-3.5 w-3.5 text-[#9a0002]" />
						</a>
						<span class="text-[#e3dedb]">&bull;</span>
						<button
							type="button"
							onclick={onOpenBooking}
							class="inline-flex items-center gap-1.5 text-[#241916] hover:text-[#9a0002] hover:underline cursor-pointer"
						>
							<span>Schedule Architecture Call</span>
							<ArrowUpRight class="h-3.5 w-3.5 text-[#9a0002]" />
						</button>
						<span class="text-[#e3dedb]">&bull;</span>
						<span class="text-[#7a665e]">{PERSONAL_INFO.location}</span>
					</div>
				</div>

				<!-- Quick Status Pill -->
				<div class="mt-10 pt-6 border-t border-[#e3dedb] flex items-center gap-3 text-xs text-[#7a665e]">
					<div class="flex h-2.5 w-2.5 rounded-full bg-[#9a0002] animate-pulse"></div>
					<span>Currently interviewing for Senior / Lead Frontend roles globally</span>
				</div>
			</div>

			<!-- Right Column: Interactive Direct Message Form -->
			<div class="lg:col-span-6">
				<div class="rounded-2xl card-glass p-7 sm:p-9">
					<h3 class="text-xl font-bold text-[#241916]">Send a Direct Inquiry</h3>
					<p class="text-xs text-[#7a665e] mt-1 mb-6">
						Responses typically within 24 hours during IST / UTC business hours.
					</p>

					{#if messageSent}
						<div class="rounded-xl border border-[#9a0002]/30 bg-[#9a0002]/8 p-6 text-center space-y-2">
							<CheckCircle2 class="mx-auto h-8 w-8 text-[#9a0002]" />
							<h4 class="text-base font-bold text-[#241916]">Message Delivered</h4>
							<p class="text-xs text-[#7a665e]">
								Thank you, {contactName || 'there'}! Aishwarya has received your note and will reply at {contactEmail}.
							</p>
						</div>
					{:else}
						<form onsubmit={handleSendMessage} class="space-y-4">
							<div>
								<label for="c-name" class="block text-xs font-mono uppercase text-[#7a665e] mb-1">Your Name</label>
								<input
									id="c-name"
									type="text"
									bind:value={contactName}
									required
									placeholder="e.g. Sarah Chen"
									class="w-full rounded-xl border border-[#e3dedb] bg-white/80 px-3.5 py-2.5 text-sm text-[#241916] placeholder:text-[#9c8980] focus:border-[#9a0002] focus:bg-white focus:outline-none transition-all"
								/>
							</div>

							<div>
								<label for="c-email" class="block text-xs font-mono uppercase text-[#7a665e] mb-1">Email Address</label>
								<input
									id="c-email"
									type="email"
									bind:value={contactEmail}
									required
									placeholder="sarah@organization.com"
									class="w-full rounded-xl border border-[#e3dedb] bg-white/80 px-3.5 py-2.5 text-sm text-[#241916] placeholder:text-[#9c8980] focus:border-[#9a0002] focus:bg-white focus:outline-none transition-all"
								/>
							</div>

							<div>
								<label for="c-message" class="block text-xs font-mono uppercase text-[#7a665e] mb-1">Project / Opportunity Brief</label>
								<textarea
									id="c-message"
									bind:value={contactMessage}
									required
									rows="4"
									placeholder="Tell me about the platform, technical challenges, or role requirements..."
									class="w-full rounded-xl border border-[#e3dedb] bg-white/80 px-3.5 py-2.5 text-sm text-[#241916] placeholder:text-[#9c8980] focus:border-[#9a0002] focus:bg-white focus:outline-none resize-none transition-all"
								></textarea>
							</div>

							<button
								type="submit"
								class="btn-primary w-full py-3.5 cursor-pointer"
							>
								<span>Transmit Message</span>
								<Send class="h-3.5 w-3.5" />
							</button>
						</form>
					{/if}
				</div>
			</div>

		</div>

	</div>
</section>

<!-- Editorial Footer in Warm Pearl Ivory & Cherry Cola (Brand Matching) -->
<footer class="relative border-t border-[#241916]/[0.08] bg-[#fbf9f6]/90 backdrop-blur-md text-[#241916] py-12 sm:py-16 text-xs font-mono">
	<!-- Top Hairline Accent in Cherry Cola -->
	<div class="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9a0002]/30 to-transparent"></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#241916]/[0.08]">
			<div class="flex items-center gap-3.5">
				<span class="flex h-10 w-10 items-center justify-center rounded-lg bg-[#9a0002] font-serif font-bold text-[#fbf9f6] shadow-xs">
					{PERSONAL_INFO.monogram}
				</span>
				<div>
					<div class="font-serif font-bold text-[#241916] text-lg tracking-tight">{PERSONAL_INFO.name}</div>
					<div class="text-[11px] font-mono text-[#7a665e]">Senior Frontend Engineer &bull; Bangalore, India</div>
				</div>
			</div>

			<div class="flex flex-wrap items-center gap-6 font-serif text-[15px] text-[#5c4a43]">
				<a href="#hero" class="hover:text-[#9a0002] transition-colors">Top &uarr;</a>
				<a href="#about" class="hover:text-[#9a0002] transition-colors">About</a>
				<a href="#projects" class="hover:text-[#9a0002] transition-colors">Projects</a>
				<a href="#performance-lab" class="hover:text-[#9a0002] transition-colors">Lab</a>
				<a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" class="hover:text-[#9a0002] transition-colors">LinkedIn</a>
			</div>
		</div>

		<div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#897870]">
			<div>
				&copy; {new Date().getFullYear()} Aishwarya S. Palette: Warm Pearl Ivory (#fbf9f6) &bull; Cherry Cola (#9a0002).
			</div>
			<div>
				REF: AIS-ANGULAR-ARCH &bull; ALL RIGHTS RESERVED
			</div>
		</div>
	</div>
</footer>
