import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function Footer() {
	return (
		<section className="bg-white text-neutral-800 pt-12 pb-6">
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
				{/* Left - Logo & Tagline */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left">
					<Link href={"/"} className="relative h-20 w-40">
						<Image
							src="/logo/NavbarLogo.svg"
							alt="Logo"
							layout="fill"
							objectFit="contain"
						/>
					</Link>
					<p className="text-sm mt-2 text-neutral-700">
						Prototype developed under Smart India Hackathon 2025 for the
						Department of Tourism, Government of Jharkhand.
					</p>
				</div>

				{/* Middle - Quick Links */}
				<div className="flex flex-col items-center">
					<h4 className="text-lg font-semibold text-left mr- mb-4">
						Quick Links
					</h4>
					<ul className="space-y-2 text-sm text-neutral-800">
						<li>
							<Link
								href="/"
								className={cn(
									"hover:text-black",
									buttonVariants({ variant: "link" })
								)}>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/destinations"
								className={cn(
									"hover:text-black",
									buttonVariants({ variant: "link" })
								)}>
								Destinations
							</Link>
						</li>
						<li>
							<Link
								href="/culture"
								className={cn(
									"hover:text-black",
									buttonVariants({ variant: "link" })
								)}>
								Culture & Heritage
							</Link>
						</li>
						<li>
							<Link
								href="/festivals"
								className={cn(
									"hover:text-black",
									buttonVariants({ variant: "link" })
								)}>
								Festivals & Events
							</Link>
						</li>
						<li>
							<Link
								href="/plan"
								className={cn(
									"hover:text-black",
									buttonVariants({ variant: "link" })
								)}>
								Plan Your Trip
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className={cn(
									"hover:text-black",
									buttonVariants({ variant: "link" })
								)}>
								About Us
							</Link>
						</li>
					</ul>
				</div>

				{/* Right - Contact & Socials */}
				<div className="flex flex-col items-center md:items-end text-center md:text-right">
					<h4 className="text-lg font-semibold mb-4">Contact Us</h4>
					<p className="text-sm">Department of Tourism, Govt. of Jharkhand</p>
					<p className="text-sm">Helpline: +91 12345 67890</p>
					<p className="text-sm">Email: info@jharkhoj.gov.in</p>

					{/* Social Icons */}
					<div className="flex gap-4 mt-4">
						<Link
							href="https://facebook.com"
							target="_blank"
							className="text-black hover:underline hover:text-primary">
							<Facebook className="w-5 h-5 hover:text-black" />
						</Link>
						<Link
							href="https://instagram.com"
							target="_blank"
							className="text-black hover:underline hover:text-primary">
							<Instagram className="w-5 h-5 hover:text-black" />
						</Link>
						<Link
							href="https://youtube.com"
							target="_blank"
							className="text-black hover:underline hover:text-primary">
							<Youtube className="w-5 h-5 hover:text-black" />
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-neutral-400 mt-8 pt-4 text-center text-sm text-neutral-800">
				© {new Date().getFullYear()}{" "}
				<span className="font-semibold">DevLynk</span> Smart India Hackathon
				Project - Department of Tourism, Govt. of Jharkhand
			</div>
		</section>
	);
}
