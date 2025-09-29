import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

export default function CultureHeritage() {
	return (
		<section className="py-20 bg-[white] border-t border-gray-200">
			<div className="mx-auto px-[18px] grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
				{/* Image Side */}
				<div className="relative h-[800px] w-full overflow-hidden shadow-lg">
					<Image
						src="/assets/culture-heritage.webp"
						alt="Tribal Culture of Jharkhand"
						fill
						loading="lazy"
						className="object-cover object-right transition-transform duration-500"
					/>
				</div>

				{/* Content Side */}
				<div className="">
					<div className="p-10">
						<Heading
							title="Explore the Rich Culture"
							subtitle="Jharkhand is home to diverse tribal communities, vibrant festivals,
                            traditional dances, and ancient temples. Its rich heritage reflects
                            centuries of traditions, art, and craftsmanship that continue to
                            thrive today."
						/>
						<Link
							href="/culture"
							className="lg:mt-6 bg-primary mt-[38px] text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center w-fit mx-auto">
							Discover More →
						</Link>
					</div>
					<div className="">
						<div className="relative h-[508px] overflow-hidden shadow-lg w-full">
							<Image
								src="/assets/culture-heritage-2.webp"
								alt="Tribal Culture of Jharkhand"
								fill
								loading="lazy"
								className="object-cover object-left transition-transform duration-500"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
