<script lang="ts">
	import { Search, Terminal, ArrowRight, CornerDownLeft, Sparkles, Copy, Calendar, ExternalLink, FileText, Check } from 'lucide-svelte';
	import { PERSONAL_INFO } from '$lib/data/portfolioData';

	let { isOpen, onClose, onOpenBooking } = $props<{
		isOpen: boolean;
		onClose: () => void;
		onOpenBooking: () => void;
	}>();

	let searchQuery = $state('');
	let copiedFeedback = $state(false);

	interface CommandItem {
		id: string;
		label: string;
		category: string;
		shortcut?: string;
		action: () => void;
	}

	const commands: CommandItem[] = [
		{
			id: 'projects',
			label: 'projects &bull; View Architectural Case Studies (01 — 03)',
			category: 'Navigation',
			shortcut: '↵',
			action: () => {
				window.location.hash = 'projects';
				onClose();
			}
		},
		{
			id: 'skills',
			label: 'skills &bull; Inspect Core Tech Stack &amp; Angular Matrix',
			category: 'Competencies',
			shortcut: '↵',
			action: () => {
				window.location.hash = 'about';
				onClose();
			}
		},
		{
			id: 'performance',
			label: 'performance &bull; Open Interactive Before/After Optimization Lab',
			category: 'Lab',
			shortcut: '↵',
			action: () => {
				window.location.hash = 'performance-lab';
				onClose();
			}
		},
		{
			id: 'experience',
			label: 'experience &bull; Toggle Chronological vs Impact Timeline',
			category: 'History',
			shortcut: '↵',
			action: () => {
				window.location.hash = 'experience';
				onClose();
			}
		},
		{
			id: 'copy-email',
			label: `copy-email &bull; Copy ${PERSONAL_INFO.email} to clipboard`,
			category: 'Contact',
			shortcut: '⌘C',
			action: () => {
				navigator.clipboard.writeText(PERSONAL_INFO.email);
				copiedFeedback = true;
				setTimeout(() => {
					copiedFeedback = false;
					onClose();
				}, 1200);
			}
		},
		{
			id: 'call-phone',
			label: `call-phone &bull; Direct Line: ${PERSONAL_INFO.phoneDisplay}`,
			category: 'Contact',
			shortcut: '↵',
			action: () => {
				window.location.href = `tel:${PERSONAL_INFO.phone}`;
				onClose();
			}
		},
		{
			id: 'book-call',
			label: 'book-call &bull; Schedule Architecture Discussion',
			category: 'Calendar',
			shortcut: '↵',
			action: () => {
				onClose();
				onOpenBooking();
			}
		},
		{
			id: 'linkedin',
			label: 'linkedin &bull; Open Verified Profile',
			category: 'External',
			shortcut: '↗',
			action: () => {
				window.open(PERSONAL_INFO.linkedin, '_blank');
				onClose();
			}
		}
	];

	let filteredCommands = $derived(
		commands.filter(cmd => 
			cmd.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
			cmd.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
			cmd.id.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			if (isOpen) {
				onClose();
			} else {
				// Parent handles open
			}
		}
		if (e.key === 'Escape' && isOpen) {
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

{#if isOpen}
	<!-- Backdrop overlay -->
	<div
		class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity flex items-start justify-center pt-20 sm:pt-28 px-4"
		onclick={onClose}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Enter' && onClose()}
	>
		<!-- Command Palette Modal Container -->
		<div
			class="w-full max-w-xl overflow-hidden rounded-2xl border border-[#d8c7b5] bg-[#fbf8f5] shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200"
			onclick={(e) => e.stopPropagation()}
			role="none"
		>
			<!-- Input Header -->
			<div class="relative flex items-center border-b border-[#e2d5c7] px-4 py-3 bg-[#efe6dd]">
				<Terminal class="h-4 w-4 text-[#9a0002] shrink-0 mr-3" />
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Type a command or filter (skills, projects, copy-email, book-call)..."
					class="w-full bg-transparent text-sm font-mono text-[#231510] placeholder:text-[#7a665e] focus:outline-none"
				/>
				<kbd class="hidden sm:inline-block rounded border border-[#d8c7b5] bg-[#fbf8f5] px-2 py-0.5 text-[10px] font-mono text-[#7a665e]">
					ESC
				</kbd>
			</div>

			<!-- Success Badge feedback if copied -->
			{#if copiedFeedback}
				<div class="bg-[#efe6dd] px-4 py-2 border-b border-[#9a0002]/30 flex items-center gap-2 text-xs font-mono text-[#9a0002]">
					<Check class="h-4 w-4 text-[#9a0002]" />
					<span>Email Copied to Clipboard: {PERSONAL_INFO.email}</span>
				</div>
			{/if}

			<!-- Command Options List -->
			<div class="max-h-80 overflow-y-auto p-2">
				{#if filteredCommands.length === 0}
					<div class="p-6 text-center text-xs font-mono text-[#7a665e]">
						No matching commands found for "{searchQuery}". Try "skills" or "projects".
					</div>
				{:else}
					{#each filteredCommands as cmd}
						<button
							type="button"
							onclick={cmd.action}
							class="group flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-mono transition-all hover:bg-[#9a0002] hover:text-[#efe6dd] cursor-pointer"
						>
							<div class="flex items-center gap-2.5">
								<span class="rounded bg-[#efe6dd] px-2 py-0.5 text-[10px] text-[#7a665e] group-hover:bg-[#7a0002] group-hover:text-[#efe6dd]">
									{cmd.category}
								</span>
								<span class="text-[#231510] group-hover:text-[#efe6dd] font-medium">
									{@html cmd.label}
								</span>
							</div>

							<div class="flex items-center gap-1 text-[#7a665e] group-hover:text-[#efe6dd]">
								<span>{cmd.shortcut}</span>
							</div>
						</button>
					{/each}
				{/if}
			</div>

			<!-- Palette Footer -->
			<div class="flex items-center justify-between border-t border-[#e2d5c7] bg-[#efe6dd] px-4 py-2.5 text-[11px] font-mono text-[#7a665e]">
				<div class="flex items-center gap-3">
					<span>Use <kbd class="rounded bg-[#fbf8f5] px-1.5 py-0.5 border border-[#d8c7b5]">⌘K</kbd> to toggle</span>
					<span>&bull;</span>
					<span>Bangalore SDE Terminal</span>
				</div>
				<span class="text-[#9a0002] font-semibold">Aishwarya S</span>
			</div>
		</div>
	</div>
{/if}
