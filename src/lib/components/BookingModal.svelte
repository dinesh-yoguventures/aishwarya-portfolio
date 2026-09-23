<script lang="ts">
	import { X, Calendar, Clock, Video, CheckCircle2, ArrowRight } from 'lucide-svelte';
	import { PERSONAL_INFO } from '$lib/data/portfolioData';

	let { isOpen, onClose } = $props<{
		isOpen: boolean;
		onClose: () => void;
	}>();

	let meetingType = $state<'intro' | 'arch'>('arch');
	let guestName = $state('');
	let guestEmail = $state('');
	let guestCompany = $state('');
	let guestNote = $state('');
	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		submitted = true;
		setTimeout(() => {
			submitted = false;
			onClose();
		}, 2800);
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
		onclick={onClose}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Escape' && onClose()}
	>
		<div
			class="w-full max-w-lg rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
			onclick={(e) => e.stopPropagation()}
			role="none"
		>
			<div class="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
				<div class="flex items-center gap-2.5">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F172A] text-white">
						<Calendar class="h-4 w-4" />
					</div>
					<div>
						<h3 class="text-base font-bold text-[#0F172A]">Book Architecture Discussion</h3>
						<span class="text-xs text-[#64748B]">Aishwarya S &bull; Bangalore, India (IST)</span>
					</div>
				</div>
				<button
					type="button"
					onclick={onClose}
					class="rounded-full p-1.5 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] cursor-pointer"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			{#if submitted}
				<div class="py-12 text-center space-y-3">
					<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
						<CheckCircle2 class="h-6 w-6" />
					</div>
					<h4 class="text-lg font-bold text-[#0F172A]">Call Request Dispatched!</h4>
					<p class="text-xs text-[#64748B] max-w-xs mx-auto">
						Thank you! Aishwarya will confirm the invitation slot to <span class="font-mono text-[#0F172A]">{guestEmail}</span> shortly.
					</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="mt-6 space-y-5">
					<!-- Duration selector -->
					<div>
						<div class="block text-xs font-mono font-medium text-[#475569] uppercase mb-2">Select Format</div>
						<div class="grid grid-cols-2 gap-3">
							<button
								type="button"
								onclick={() => meetingType = 'intro'}
								class="flex flex-col items-start rounded-xl border p-3 text-left transition-all cursor-pointer {meetingType === 'intro' ? 'border-[#0F172A] bg-[#0F172A] text-white' : 'border-[#E2E8F0] hover:border-[#94A3B8]'}"
							>
								<div class="flex items-center gap-1.5 text-xs font-semibold">
									<Clock class="h-3.5 w-3.5" />
									<span>15 Min Intro</span>
								</div>
								<span class="text-[11px] {meetingType === 'intro' ? 'text-neutral-300' : 'text-[#64748B]'} mt-1">
									Quick intro &amp; team fit screen
								</span>
							</button>

							<button
								type="button"
								onclick={() => meetingType = 'arch'}
								class="flex flex-col items-start rounded-xl border p-3 text-left transition-all cursor-pointer {meetingType === 'arch' ? 'border-[#0F172A] bg-[#0F172A] text-white' : 'border-[#E2E8F0] hover:border-[#94A3B8]'}"
							>
								<div class="flex items-center gap-1.5 text-xs font-semibold">
									<Video class="h-3.5 w-3.5" />
									<span>30 Min Deep-Dive</span>
								</div>
								<span class="text-[11px] {meetingType === 'arch' ? 'text-neutral-300' : 'text-[#64748B]'} mt-1">
									Angular &amp; system architecture
								</span>
							</button>
						</div>
					</div>

					<!-- Form fields -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<div>
							<label for="b-name" class="block text-xs font-medium text-[#475569] mb-1">Your Name</label>
							<input
								id="b-name"
								type="text"
								bind:value={guestName}
								required
								placeholder="e.g. Alex Vance"
								class="w-full rounded-lg border border-[#CBD5E1] px-3 py-2 text-xs text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
							/>
						</div>
						<div>
							<label for="b-email" class="block text-xs font-medium text-[#475569] mb-1">Work Email</label>
							<input
								id="b-email"
								type="email"
								bind:value={guestEmail}
								required
								placeholder="alex@company.com"
								class="w-full rounded-lg border border-[#CBD5E1] px-3 py-2 text-xs text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
							/>
						</div>
					</div>

					<div>
						<label for="b-company" class="block text-xs font-medium text-[#475569] mb-1">Company / Organization</label>
						<input
							id="b-company"
							type="text"
							bind:value={guestCompany}
							placeholder="e.g. FinTech / Enterprise Corp"
							class="w-full rounded-lg border border-[#CBD5E1] px-3 py-2 text-xs text-[#0F172A] focus:border-[#0F172A] focus:outline-none"
						/>
					</div>

					<div>
						<label for="b-note" class="block text-xs font-medium text-[#475569] mb-1">Discussion Focus / Role Brief</label>
						<textarea
							id="b-note"
							bind:value={guestNote}
							rows="2"
							placeholder="We're modernizing our enterprise platform / looking for a Senior SDE lead..."
							class="w-full rounded-lg border border-[#CBD5E1] px-3 py-2 text-xs text-[#0F172A] focus:border-[#0F172A] focus:outline-none resize-none"
						></textarea>
					</div>

					<div class="flex items-center justify-between pt-2">
						<span class="text-[11px] text-[#64748B]">
							Or email directly: <a href="mailto:{PERSONAL_INFO.email}" class="underline text-[#0F172A] font-mono">{PERSONAL_INFO.email}</a>
						</span>

						<button
							type="submit"
							class="inline-flex items-center gap-1.5 rounded-full bg-[#0F172A] px-5 py-2 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer"
						>
							<span>Confirm Request</span>
							<ArrowRight class="h-3.5 w-3.5" />
						</button>
					</div>
				</form>
			{/if}
		</div>
	</div>
{/if}
