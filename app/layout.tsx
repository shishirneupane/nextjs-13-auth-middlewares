import './globals.css';
import { Plus_Jakarta_Sans } from '@next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans();

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className={plusJakartaSans.className}>{children}</body>
		</html>
	);
}
