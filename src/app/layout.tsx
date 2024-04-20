import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
	title: 'Tic Tac Toe Game',
	description: 'A simple tic tac toe game built with React',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={spaceMono.className}>{children}</body>
		</html>
	)
}
