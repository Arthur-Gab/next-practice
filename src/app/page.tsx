import Link from 'next/link';

export default function Page() {
	const pothos = Array.from({ length: 6 }, (_, y) => y + 1);

	return (
		<section className='mx-auto grid max-w-[820px] grid-cols-3 place-items-center gap-4 max-sm:grid-cols-1'>
			{pothos.map((value) => (
				<Link
					key={value}
					href={`/potho/${value}`}
					className='flex h-[200px] w-[200px] items-center justify-center rounded-lg bg-neutral-200 text-2xl font-semibold text-black'
				>
					{value}
				</Link>
			))}
		</section>
	);
}
