import Banner from "@/components/shared/Banner";
import CultureHeritage from "@/components/shared/CultureHeritage";
import EcoWildlife from "@/components/shared/EcoWildlife";
import FeaturedDestinations from "@/components/shared/FeaturedDestinations";
import FestivalEvents from "@/components/shared/FestivalEvents";
import HighlightsSection from "@/components/shared/HighlightsSection";
import WhyVisit from "@/components/shared/WhtVisit";

export default function Home() {
	return (
		<section className="">
			<Banner />
			<HighlightsSection />
			<FeaturedDestinations />
			<CultureHeritage />
			<FestivalEvents />
			<EcoWildlife />
			<WhyVisit />
		</section>
	);
}
