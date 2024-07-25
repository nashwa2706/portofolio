import React from "react";

interface Props {
	title: string;
	description: string;
	year?: string;
	className?: string;
}

const Card: React.FC<Props> = ({
	title,
	description,
	className = "bg-white shadow-lg gap-6 rounded-2xl border border-gray-300",
	year,
}) => {
	return (
		<section className={`flex flex-col p-8  mx-auto my-6 ${className}`}>
			<label className="font-semibold text-xl text-gray-800">{title}</label>
			<p className="text-base text-gray-600 text-justify">{description}</p>
			<p className="text-base text-gray-600 text-justify">{year}</p>
		</section>
	);
};

export default Card;
