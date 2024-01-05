import { Modal } from '@/ui/modal';

export default function CapturedPothosPage({
	params: { id },
}: {
	params: { id: string };
}) {
	return <Modal>{id}</Modal>;
}
