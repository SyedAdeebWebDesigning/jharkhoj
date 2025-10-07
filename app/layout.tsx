import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

import { ClerkProvider } from "@clerk/nextjs";

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
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary:
						"bg-white!  text-black! py-2! border-2! border-black!",
					cardBox: "shadow-none! border-2! border-neutral-300!",
					formFieldInput: "py-4! border! border-neutral-300!",
					socialButtonsBlockButton:
						"py-2! shadow-none! border! border-neutral-300!",
					formFieldInput__phoneNumber: "border-none!",

					phoneInputBox:
						" shadow-none! border! border-neutral-300! border-r-none!",
					userButtonPopoverCard:
						"shadow-none! border-2! border-neutral-300! mt-6! min-[767px]:mt-10!",
				},
			}}>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
