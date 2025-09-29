import Heading from "./Heading";
import { usps } from "@/lib/links";

export default function WhyVisit() {
	return (
		<section className="py-20 bg-neutral-50">
			<div className="container mx-auto px-4 text-center">
				<Heading
					title="Why Visit Jharkhand?"
					subtitle="Discover the unique experiences that make Jharkhand a must-visit destination."
				/>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{usps.map((usp) => (
						<div
							key={usp.title}
							className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center text-center">
							<usp.icon className="w-12 h-12 text-primary mb-4" />
							<h3 className="text-xl font-semibold text-primary">
								{usp.title}
							</h3>
							<p className="mt-2 text-gray-600 text-sm">{usp.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
