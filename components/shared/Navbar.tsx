"use client";

import Image from "next/image";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

import { IoHomeOutline, IoHome } from "react-icons/io5";
import { RiMapPin2Line, RiMapPin2Fill } from "react-icons/ri";
import { FaLandmark } from "react-icons/fa";
import { IoCalendarOutline, IoCalendar } from "react-icons/io5";
import { BiSolidPlaneAlt } from "react-icons/bi";

import { Landmark, MenuIcon } from "lucide-react";
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
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	const navLinks = [
		{ name: "Home", href: "/", icon: IoHomeOutline, active: IoHome },
		{
			name: "Destinations",
			href: "/destinations",
			icon: RiMapPin2Line,
			active: RiMapPin2Fill,
		},
		{
			name: "Culture & Heritage",
			href: "/culture",
			icon: Landmark,
			active: FaLandmark,
		},
		{
			name: "Festivals & Events",
			href: "/festivals",
			icon: IoCalendarOutline,
			active: IoCalendar,
		},
		{
			name: "Plan Your Trip",
			href: "/plan",
			icon: BiSolidPlaneAlt,
			active: BiSolidPlaneAlt,
		},
	];

	return (
		<section className="border-b border-gray-200/10 bg-white/90 shadow-sm w-full fixed top-0 left-0 z-50 backdrop-blur-lg">
			<MaxWidthWrapper>
				<div className="flex justify-between items-center md:p-4 px-4">
					{/* Logo */}
					<Link href={"/"} className="relative h-20 w-40">
						<Image
							src="/logo/NavbarLogo.svg"
							alt="Logo"
							fill
							className="object-contain"
						/>
					</Link>

					{/* Desktop nav */}
					<nav>
						<ul className="space-x-8 hidden min-[1111px]:flex">
							{navLinks.map((link) => {
								const isActive = pathname === link.href;
								const Icon = isActive ? link.active : link.icon;
								return (
									<li key={link.name}>
										<Link href={link.href}>
											<p
												className={cn(
													"flex space-x-2 items-center font-semibold transition",
													isActive
														? "text-primary underline underline-offset-8"
														: "text-black hover:text-primary hover:underline underline-offset-8"
												)}>
												<Icon size={18} className="mr-1" />
												{link.name}
											</p>
										</Link>
									</li>
								);
							})}
						</ul>

						{/* Mobile Menu */}
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

									<div className="grid gap-6 p-4">
										{navLinks.map((link) => {
											const isActive = pathname === link.href;
											const Icon = isActive ? link.active : link.icon;
											return (
												<SheetClose asChild key={link.name}>
													<Link
														href={link.href}
														className={cn(
															"flex items-center space-x-2 font-semibold transition",
															isActive
																? "text-primary"
																: "text-gray-700 hover:text-primary"
														)}>
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
