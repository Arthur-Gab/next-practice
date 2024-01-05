'use client';

import { memo, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export const Modal = memo(function Modal({
	children,
}: {
	children: React.ReactNode;
}) {
	console.log(`Mounted at: ${new Date().toLocaleTimeString()}`);

	const router = useRouter();
	const dialogRef = useRef(null);
	const closerRef = useRef(null);

	const onDismiss = useCallback(() => {
		router.back();
	}, [router]);

	const closeOnEscapeKey = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === 'Escape') onDismiss();
		},
		[onDismiss]
	);

	useEffect(() => {
		// @ts-ignore
		if (!dialogRef.current?.open) {
			// @ts-ignore
			dialogRef.current?.showModal();
			// @ts-ignore
			closerRef.current?.focus();
		}

		document.addEventListener('keydown', closeOnEscapeKey);

		() => document.removeEventListener('keydown', closeOnEscapeKey);
	}, [closeOnEscapeKey]);

	const Modal = (
		<div className='absolute inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50'>
			<dialog
				ref={dialogRef}
				className='flex min-h-[80%] w-full max-w-xl items-center justify-center rounded-lg text-4xl font-bold'
			>
				{children}
				<button
					className='absolute right-4 top-4 rounded-full px-4 py-2 text-3xl font-semibold hover:bg-neutral-200'
					onClick={onDismiss}
					ref={closerRef}
					aria-label='Fechar Modal'
				>
					X
				</button>
			</dialog>
		</div>
	);

	return createPortal(Modal, document.body!);
});
