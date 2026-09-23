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

<section id="contact" class="relative py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
			
			<!-- Left Column: Editorial Invitation & Email Copy Interaction -->
			<div class="lg:col-span-6 flex flex-col justify-between">
				<div>
					<div class="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#64748B]">
						<span class="inline-block h-2 w-2 rounded-full bg-[#0F172A]"></span>
						Contact &bull; Direct Reach
					</div>
					<h2 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0F172A]">
						Let's architect something robust.
					</h2>
					<p class="mt-4 text-base text-[#475569] leading-relaxed max-w-lg">
						Available for Senior Frontend Engineer, Staff SDE, and Lead Angular positions. Whether you're modernizing a legacy enterprise platform or scaling high-volume real-time portals, let's talk.
					</p>

					<!-- Copy Email & Phone Micro-interaction Cards -->
					<div class="mt-8 space-y-3 max-w-md">
						<div class="rounded-2xl border border-[#E5E7EB] bg-[#F8F9FA] p-5 shadow-2xs">
							<span class="block text-xs font-mono text-[#64748B] mb-1.5 uppercase tracking-wider">
								Direct Email Channel
							</span>
							<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
								<span class="font-mono text-sm sm:text-base font-semibold text-[#0F172A]">
									{PERSONAL_INFO.email}
								</span>

								<button
									type="button"
									onclick={copyEmail}
									class="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0F172A] px-4 py-2 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer self-start sm:self-auto shrink-0"
								>
									{#if emailCopied}
										<Check class="h-3.5 w-3.5 text-emerald-400" />
										<span class="text-emerald-300 font-semibold">[ Copied &check; ]</span>
									{:else}
										<Copy class="h-3.5 w-3.5" />
										<span>Copy Email</span>
									{/if}
								</button>
							</div>
						</div>

						<div class="rounded-2xl border border-[#E5E7EB] bg-[#F8F9FA] p-5 shadow-2xs">
							<span class="block text-xs font-mono text-[#64748B] mb-1.5 uppercase tracking-wider">
								Direct Phone Line
							</span>
							<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
								<a
									href="tel:{PERSONAL_INFO.phone}"
									class="font-mono text-sm sm:text-base font-semibold text-[#0F172A] hover:underline"
								>
									{PERSONAL_INFO.phoneDisplay}
								</a>

								<a
									href="tel:{PERSONAL_INFO.phone}"
									class="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#CBD5E1] bg-white px-4 py-2 text-xs font-medium text-[#0F172A] hover:bg-[#F1F5F9] transition-all self-start sm:self-auto shrink-0"
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
							class="inline-flex items-center gap-1.5 text-[#0F172A] hover:underline"
						>
							<span>LinkedIn Profile</span>
							<ExternalLink class="h-3.5 w-3.5" />
						</a>
						<span class="text-[#CBD5E1]">&bull;</span>
						<button
							type="button"
							onclick={onOpenBooking}
							class="inline-flex items-center gap-1.5 text-[#0F172A] hover:underline cursor-pointer"
						>
							<span>Schedule Architecture Call</span>
							<ArrowUpRight class="h-3.5 w-3.5" />
						</button>
						<span class="text-[#CBD5E1]">&bull;</span>
						<span class="text-[#64748B]">{PERSONAL_INFO.location}</span>
					</div>
				</div>

				<!-- Quick Status Pill -->
				<div class="mt-10 pt-6 border-t border-[#F1F5F9] flex items-center gap-3 text-xs text-[#64748B]">
					<div class="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
					<span>Currently interviewing for Senior / Lead Frontend roles globally</span>
				</div>
			</div>

			<!-- Right Column: Interactive Direct Message Form -->
			<div class="lg:col-span-6">
				<div class="rounded-2xl border border-[#E5E7EB] bg-[#F8F9FA] p-7 sm:p-9 shadow-sm">
					<h3 class="text-lg font-bold text-[#0F172A]">Send a Direct Inquiry</h3>
					<p class="text-xs text-[#64748B] mt-1 mb-6">
						Responses typically within 24 hours during IST / UTC business hours.
					</p>

					{#if messageSent}
						<div class="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-2">
							<CheckCircle2 class="mx-auto h-8 w-8 text-emerald-600" />
							<h4 class="text-sm font-bold text-emerald-900">Message Delivered</h4>
							<p class="text-xs text-emerald-700">
								Thank you, {contactName || 'there'}! Aishwarya has received your note and will reply at {contactEmail}.
							</p>
						</div>
					{:else}
						<form onsubmit={handleSendMessage} class="space-y-4">
							<div>
								<label for="c-name" class="block text-xs font-mono uppercase text-[#475569] mb-1">Your Name</label>
								<input
									id="c-name"
									type="text"
									bind:value={contactName}
									required
									placeholder="e.g. Sarah Chen"
									class="w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-xs text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
								/>
							</div>

							<div>
								<label for="c-email" class="block text-xs font-mono uppercase text-[#475569] mb-1">Email Address</label>
								<input
									id="c-email"
									type="email"
									bind:value={contactEmail}
									required
									placeholder="sarah@organization.com"
									class="w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-xs text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
								/>
							</div>

							<div>
								<label for="c-message" class="block text-xs font-mono uppercase text-[#475569] mb-1">Project / Opportunity Brief</label>
								<textarea
									id="c-message"
									bind:value={contactMessage}
									required
									rows="4"
									placeholder="Tell me about the platform, technical challenges, or role requirements..."
									class="w-full rounded-xl border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-xs text-[#0F172A] focus:border-[#0F172A] focus:outline-none resize-none"
								></textarea>
							</div>

							<button
								type="submit"
								class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] py-3 text-xs sm:text-sm font-medium text-white transition-all hover:bg-black active:scale-98 cursor-pointer"
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

<!-- Footer -->
<footer class="bg-[#0F172A] text-neutral-400 py-12 text-xs font-mono">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800">
			<div class="flex items-center gap-3">
				<span class="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 font-bold text-white">
					{PERSONAL_INFO.monogram}
				</span>
				<div>
					<div class="font-bold text-white text-sm">{PERSONAL_INFO.name}</div>
					<div class="text-[11px] text-neutral-400">Senior Frontend Engineer &bull; Bangalore, India</div>
				</div>
			</div>

			<div class="flex items-center gap-6">
				<a href="#hero" class="hover:text-white transition-colors">Top &uarr;</a>
				<a href="#about" class="hover:text-white transition-colors">About</a>
				<a href="#projects" class="hover:text-white transition-colors">Projects</a>
				<a href="#performance-lab" class="hover:text-white transition-colors">Lab</a>
				<a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">LinkedIn</a>
			</div>
		</div>

		<div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
			<div>
				&copy; {new Date().getFullYear()} Aishwarya S. Crafted with high-contrast precision &amp; SvelteKit.
			</div>
			<div>
				REF: AIS-ANGULAR-ARCH &bull; ALL RIGHTS RESERVED
			</div>
		</div>
	</div>
</footer>
