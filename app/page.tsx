import Banner from "@/components/shared/Banner";
import CultureHeritage from "@/components/shared/CultureHeritage";
import FeaturedDestinations from "@/components/shared/FeaturedDestinations";
import HighlightsSection from "@/components/shared/HighlightsSection";

export default function Home() {
	return (
		<section className="">
			<Banner />
			<HighlightsSection />
			<FeaturedDestinations />
			<CultureHeritage />
		</section>
	);
}
