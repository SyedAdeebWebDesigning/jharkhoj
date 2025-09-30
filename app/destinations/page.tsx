import PopularCities from "@/components/shared/PopularCities";
import PopularExperience from "@/components/shared/PopularExperience";
import React from "react";

const page = () => {
	return (
		<section className="mt-36 max-w-7xl mx-auto px-5">
			<PopularExperience />
			<PopularCities />
		</section>
	);
};

export default page;
