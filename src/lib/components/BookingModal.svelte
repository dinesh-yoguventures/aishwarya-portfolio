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
			class="w-full max-w-lg rounded-2xl border border-[#d8c7b5] bg-[#fbf8f5] p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
			onclick={(e) => e.stopPropagation()}
			role="none"
		>
			<div class="flex items-center justify-between border-b border-[#e2d5c7] pb-4">
				<div class="flex items-center gap-2.5">
					<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#9a0002] text-[#efe6dd]">
						<Calendar class="h-4 w-4" />
					</div>
					<div>
						<h3 class="text-lg font-bold text-[#231510]">Book Architecture Discussion</h3>
						<span class="text-xs text-[#7a665e]">Aishwarya S &bull; Bangalore, India (IST)</span>
					</div>
				</div>
				<button
					type="button"
					onclick={onClose}
					class="rounded-full p-1.5 text-[#7a665e] hover:bg-[#efe6dd] hover:text-[#9a0002] cursor-pointer"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			{#if submitted}
				<div class="py-12 text-center space-y-3">
					<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#efe6dd] text-[#9a0002]">
						<CheckCircle2 class="h-6 w-6" />
					</div>
					<h4 class="text-xl font-bold text-[#231510]">Call Request Dispatched!</h4>
					<p class="text-xs text-[#7a665e] max-w-xs mx-auto">
						Thank you! Aishwarya will confirm the invitation slot to <span class="font-mono text-[#9a0002] font-semibold">{guestEmail}</span> shortly.
					</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="mt-6 space-y-5">
					<!-- Duration selector -->
					<div>
						<div class="block text-xs font-mono font-medium text-[#7a665e] uppercase mb-2">Select Format</div>
						<div class="grid grid-cols-2 gap-3">
							<button
								type="button"
								onclick={() => meetingType = 'intro'}
								class="flex flex-col items-start rounded-xl border p-3 text-left transition-all cursor-pointer {meetingType === 'intro' ? 'border-[#9a0002] bg-[#9a0002] text-[#efe6dd] shadow-sm' : 'border-[#e2d5c7] bg-[#efe6dd] text-[#231510] hover:border-[#9a0002]'}"
							>
								<div class="flex items-center gap-1.5 text-xs font-semibold">
									<Clock class="h-3.5 w-3.5" />
									<span>15 Min Intro</span>
								</div>
								<span class="text-[11px] {meetingType === 'intro' ? 'text-[#efe6dd]/80' : 'text-[#7a665e]'} mt-1">
									Quick intro &amp; team fit screen
								</span>
							</button>

							<button
								type="button"
								onclick={() => meetingType = 'arch'}
								class="flex flex-col items-start rounded-xl border p-3 text-left transition-all cursor-pointer {meetingType === 'arch' ? 'border-[#9a0002] bg-[#9a0002] text-[#efe6dd] shadow-sm' : 'border-[#e2d5c7] bg-[#efe6dd] text-[#231510] hover:border-[#9a0002]'}"
							>
								<div class="flex items-center gap-1.5 text-xs font-semibold">
									<Video class="h-3.5 w-3.5" />
									<span>30 Min Deep-Dive</span>
								</div>
								<span class="text-[11px] {meetingType === 'arch' ? 'text-[#efe6dd]/80' : 'text-[#7a665e]'} mt-1">
									Angular &amp; system architecture
								</span>
							</button>
						</div>
					</div>

					<!-- Form fields -->
					<div class="space-y-3">
						<div>
							<label for="book-name" class="block text-xs font-mono uppercase text-[#7a665e] mb-1">Your Full Name</label>
							<input
								id="book-name"
								type="text"
								bind:value={guestName}
								required
								placeholder="e.g. Alex Morgan"
								class="w-full rounded-xl border border-[#e2d5c7] bg-[#efe6dd] px-3.5 py-2 text-xs text-[#231510] focus:border-[#9a0002] focus:outline-none"
							/>
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<div>
								<label for="book-email" class="block text-xs font-mono uppercase text-[#7a665e] mb-1">Work Email</label>
								<input
									id="book-email"
									type="email"
									bind:value={guestEmail}
									required
									placeholder="alex@company.com"
									class="w-full rounded-xl border border-[#e2d5c7] bg-[#efe6dd] px-3.5 py-2 text-xs text-[#231510] focus:border-[#9a0002] focus:outline-none"
								/>
							</div>

							<div>
								<label for="book-org" class="block text-xs font-mono uppercase text-[#7a665e] mb-1">Company / Organization</label>
								<input
									id="book-org"
									type="text"
									bind:value={guestCompany}
									placeholder="e.g. Acme FinTech"
									class="w-full rounded-xl border border-[#e2d5c7] bg-[#efe6dd] px-3.5 py-2 text-xs text-[#231510] focus:border-[#9a0002] focus:outline-none"
								/>
							</div>
						</div>

						<div>
							<label for="book-note" class="block text-xs font-mono uppercase text-[#7a665e] mb-1">Discussion Agenda / Context</label>
							<textarea
								id="book-note"
								bind:value={guestNote}
								rows="3"
								placeholder="Frontend modernization, Angular Signals architecture, team leadership..."
								class="w-full rounded-xl border border-[#e2d5c7] bg-[#efe6dd] px-3.5 py-2 text-xs text-[#231510] focus:border-[#9a0002] focus:outline-none resize-none"
							></textarea>
						</div>
					</div>

					<button
						type="submit"
						class="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#9a0002] py-3 text-xs sm:text-sm font-medium text-[#efe6dd] shadow-sm transition-all hover:bg-[#7a0002] active:scale-98 cursor-pointer"
					>
						<span>Confirm Reservation Request</span>
						<ArrowRight class="h-4 w-4" />
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}
