import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "JharKhoj",
	description:
		"Discover Jharkhand's hidden gems with JharKhoj a smart digital platform for eco-tourism and cultural heritage. Explore destinations, events, maps, and sustainable travel guides.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<header>
					<Navbar />
				</header>
				<main>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
