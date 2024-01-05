export default function PothosPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return (
		<section className='flex h-screen items-center justify-center'>
			<div className='flex h-[200px] w-[200px] items-center justify-center rounded-lg bg-neutral-200 text-2xl font-semibold text-black'>
				{id}
			</div>
		</section>
	);
}
