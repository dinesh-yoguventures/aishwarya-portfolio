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
			shortcut: '📞',
			action: () => {
				window.location.href = `tel:${PERSONAL_INFO.phone}`;
				onClose();
			}
		},
		{
			id: 'book-call',
			label: 'book-call &bull; Schedule 15-min or 30-min Technical Architecture Call',
			category: 'Connect',
			shortcut: '↵',
			action: () => {
				onClose();
				onOpenBooking();
			}
		},
		{
			id: 'linkedin',
			label: 'linkedin &bull; Visit Aishwarya Saravanan on LinkedIn',
			category: 'Social',
			shortcut: '↗',
			action: () => {
				window.open(PERSONAL_INFO.linkedin, '_blank');
				onClose();
			}
		},
		{
			id: 'download-cv',
			label: 'download-cv &bull; View Senior Frontend Engineer Resume Profile',
			category: 'Documents',
			shortcut: '📄',
			action: () => {
				window.location.hash = 'contact';
				onClose();
			}
		}
	];

	let filteredCommands = $derived(
		searchQuery.trim() === ''
			? commands
			: commands.filter(
					(c) =>
						c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
						c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
						c.category.toLowerCase().includes(searchQuery.toLowerCase())
				)
	);

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			if (isOpen) onClose();
			else {
				// handled by parent or window
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
			class="w-full max-w-xl overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-2xl animate-in fade-in-0 zoom-in-95 duration-200"
			onclick={(e) => e.stopPropagation()}
			role="none"
		>
			<!-- Input Header -->
			<div class="relative flex items-center border-b border-[#E5E7EB] px-4 py-3 bg-[#F8F9FA]">
				<Terminal class="h-4 w-4 text-[#0F172A] shrink-0 mr-3" />
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Type a command or filter (skills, projects, copy-email, book-call)..."
					class="w-full bg-transparent text-sm font-mono text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
				/>
				<kbd class="hidden sm:inline-block rounded border border-[#CBD5E1] bg-white px-2 py-0.5 text-[10px] font-mono text-[#64748B]">
					ESC
				</kbd>
			</div>

			<!-- Success Badge feedback if copied -->
			{#if copiedFeedback}
				<div class="bg-emerald-50 px-4 py-2 border-b border-emerald-100 flex items-center gap-2 text-xs font-mono text-emerald-800">
					<Check class="h-4 w-4 text-emerald-600" />
					<span>Email Copied to Clipboard: {PERSONAL_INFO.email}</span>
				</div>
			{/if}

			<!-- Command Options List -->
			<div class="max-h-80 overflow-y-auto p-2">
				{#if filteredCommands.length === 0}
					<div class="p-6 text-center text-xs font-mono text-[#64748B]">
						No matching commands found for "{searchQuery}". Try "skills" or "projects".
					</div>
				{:else}
					{#each filteredCommands as cmd}
						<button
							type="button"
							onclick={cmd.action}
							class="group flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-mono transition-all hover:bg-[#0F172A] hover:text-white cursor-pointer"
						>
							<div class="flex items-center gap-2.5">
								<span class="rounded bg-[#F1F5F9] px-2 py-0.5 text-[10px] text-[#475569] group-hover:bg-neutral-800 group-hover:text-neutral-300">
									{cmd.category}
								</span>
								<span class="text-[#0F172A] group-hover:text-white font-medium">
									{@html cmd.label}
								</span>
							</div>

							<div class="flex items-center gap-1 text-[#94A3B8] group-hover:text-neutral-400">
								<span>{cmd.shortcut}</span>
							</div>
						</button>
					{/each}
				{/if}
			</div>

			<!-- Palette Footer -->
			<div class="flex items-center justify-between border-t border-[#E5E7EB] bg-[#F8F9FA] px-4 py-2.5 text-[11px] font-mono text-[#64748B]">
				<div class="flex items-center gap-3">
					<span>Use <kbd class="rounded bg-white px-1.5 py-0.5 border border-[#CBD5E1]">⌘K</kbd> to toggle</span>
					<span>&bull;</span>
					<span>Bangalore SDE Terminal</span>
				</div>
				<span>Aishwarya S</span>
			</div>
		</div>
	</div>
{/if}
