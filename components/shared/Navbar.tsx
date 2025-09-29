import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

import {
	Home,
	MapPin,
	Landmark,
	CalendarDays,
	Plane,
	MenuIcon,
} from "lucide-react";
import { Button } from "../ui/button";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
	const navLinks = [
		{ name: "Home", href: "/", icon: Home },
		{ name: "Destinations", href: "/destinations", icon: MapPin },
		{ name: "Culture & Heritage", href: "/culture", icon: Landmark },
		{ name: "Festivals & Events", href: "/festivals", icon: CalendarDays },
		{ name: "Plan Your Trip", href: "/plan", icon: Plane },
	];

	return (
		<section className="border-b border-gray-200/10 bg-white/90 shadow-sm w-full fixed top-0 left-0 z-50 backdrop-blur-lg">
			<MaxWidthWrapper>
				<div className="flex justify-between items-center md:p-4 px-4">
					<Link href={"/"} className="relative h-20 w-40">
						<Image
							src="/logo/NavbarLogo.svg"
							alt="Logo"
							layout="fill"
							objectFit="contain"
						/>
					</Link>
					<nav className="">
						<ul className="space-x-8 hidden min-[1111px]:flex">
							{navLinks.map((link) => (
								<li key={link.name}>
									<Link href={link.href}>
										<p className="text-black hover:text-primary hover:underline underline-offset-6 flex space-x-2 items-center font-semibold">
											<link.icon size={18} className="mr-1" />
											{link.name}
										</p>
									</Link>
								</li>
							))}
						</ul>
						{/* Mobile Menu Icon */}
						<div className="min-[1111px]:hidden">
							<Sheet>
								<SheetTrigger asChild>
									<Button variant="link" className="text-black" size="icon">
										<MenuIcon className="size-6" />
									</Button>
								</SheetTrigger>
								<SheetContent side="bottom" className="h-full">
									<SheetHeader>
										<SheetTitle>Navigation Menu</SheetTitle>
										<SheetDescription>
											Explore Jharkhand's culture, destinations & more.
										</SheetDescription>
									</SheetHeader>

									<div className="grid gap-10 p-2">
										{navLinks.map((link) => {
											const Icon = link.icon;
											return (
												<SheetClose asChild key={link.name}>
													<Link
														href={link.href}
														className="flex items-center space-x-2 font-semibold text-accent-foreground hover:text-foreground ml-2">
														<Icon size={18} className="mr-1" />
														<span>{link.name}</span>
													</Link>
												</SheetClose>
											);
										})}
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</nav>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Navbar;
