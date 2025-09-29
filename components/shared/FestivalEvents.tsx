import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Heading from "./Heading";
import Link from "next/link";
import Image from "next/image";
import { festivals } from "@/lib/links";
import { Calendar, Calendar1, CalendarSearch } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const FestivalEvents = () => {
	return (
		<div className="py-20  bg-white/50 w-full backdrop-blur">
			<MaxWidthWrapper>
				<Heading
					title="Festivals & Events"
					subtitle="Experience Jharkhand's vibrant festivals and cultural events."
				/>

				<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
					{festivals.map((festival) => (
						<Link
							href={festival.link}
							key={festival.title}
							className="group overflow-hidden shadow-md hover:shadow-xl transition">
							{/* Image */}
							<div className="relative h-64 w-full">
								<Image
									src={festival.image}
									alt={festival.title}
									fill
									className="object-cover group-hover:scale-[102%] transition-transform duration-500"
								/>
							</div>

							{/* Content */}
							<div className="p-4 bg-white">
								<h3 className="text-xl font-bold text-primary">
									{festival.title}
								</h3>
								<p className="text-sm text-gray-500 flex items-center">
									<Calendar size={16} className="mr-1" />
									{festival.date}
								</p>
								<p className="mt-1 text-gray-600 text-sm">
									{festival.description}
								</p>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-8 text-center mx-4">
					<Link
						href="/festivals"
						className={cn(
							"inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition",
							buttonVariants({ variant: "default", size: "lg" })
						)}>
						See All Festivals →
					</Link>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default FestivalEvents;
