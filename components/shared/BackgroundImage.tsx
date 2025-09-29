import Image from "next/image";
import React from "react";

const BackgroundImage = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-full -z-10">
			<div className="relative h-screen">
				<Image
					src={"/assets/bg-image.webp"}
					alt="Background Image"
					fill
					className="object-cover"
				/>
			</div>
		</div>
	);
};

export default BackgroundImage;
