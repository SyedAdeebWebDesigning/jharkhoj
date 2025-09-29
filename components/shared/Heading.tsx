import React from "react";

type Props = {
	title: string;
	subtitle?: string;
};

const Heading = (props: Props) => {
	return (
		<div className="flex flex-col space-y-2 text-center">
			<h1 className="text-3xl md:text-5xl font-bold">{props.title}</h1>
			{props.subtitle && (
				<h2 className="text-xl text-gray-600">{props.subtitle}</h2>
			)}
		</div>
	);
};

export default Heading;
