import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Ошибка 404. Страница не найдена',
	robots: {
		index: false,
	},
};

export default function NotFound(): JSX.Element {
	return <div>asds</div>;
}
