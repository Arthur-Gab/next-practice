import type { Metadata } from 'next';
import { inter } from '@/ui/font';

import './globals.css';

import clsx from 'clsx';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout(props: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang='pt'>
			<body
				className={clsx(
					inter.className,
					'relative h-screen antialiased'
				)}
			>
				{props.children}
				{props.modal}
			</body>
		</html>
	);
}
