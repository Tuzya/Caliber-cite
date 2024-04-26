import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Providers } from '@/packages/store/provider';
import Footer from '@/packages/ui/src/entities/Footer/Footer.component';
import MainNavbar from '@/packages/ui/src/entities/MainNavbar/MainNavbar.component';
import TopNavbar from '@/packages/ui/src/entities/TopNavbar/TopNavbar.component';

export const metadata: Metadata = {
	// title: "Create Next App",
	// description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body>
				<Providers>
					<TopNavbar />
					<MainNavbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
