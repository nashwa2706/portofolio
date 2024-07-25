import Card from "../component/card";

interface Props {
	title: string;
	year: string;
	description: string;
	bgColor?: string;
}

const LandingPage = () => {
	const education: Props[] = [
		{
			title: "Sekolah Dasar",
			year: "2007-2012",
			description: "Bersekolah di SDN 01 Pagi",
		},
		{
			title: "Sekolah Menengah Pertama",
			year: "2013-2016",
			description: "Bersekolah di SMP Negeri 170",
		},
		{
			title: "Sekolah Menengah Atas",
			year: "2017-2019",
			description: "Bersekolah di SMK Negeri 26 Jakarta, Jurusan SIJA",
		},
		{
			title: "Kuliah",
			year: "2019-2023",
			description: "Melanjutkan Studi di Universitas KrisnaDwipayana Bekasi",
		},
	];

	const projects: Props[] = [
		{
			title: "Project 1",
			year: "2023",
			description:
				"Membuat Game Pertarungan 2D berbasis Java Script yang merupakan Projek Skripsi saya yang pertama kali menggunakan Java Script, dan HTML",
		},
		{
			title: "Project 2",
			year: "2024",
			description:
				"FrontEnd tentang Protofolio saya atau bisa disebut web FrontEnd yang sedang anda baca saat ini ",
		},
		{
			title: "Project 3",
			year: "2024",
			description:
				"Projek ini adalah FrontEnd menggunakan API dari TMDB Movie. Dimana saya membuat website berbasis FrontEnd menggunakan API",
		},
		{
			title: "Project 4",
			year: "2024",
			description:
				"Projek ini adalah membuat Pokedex dari Pokemon francise berbasis API dari PokeAPI",
		},
	];

	return (
		<div className="flex flex-col items-center px-4 py-8">
			<div className="flex flex-col items-center mb-10 max-w-screen-lg mx-auto">
				<Card
					title="Summary"
					className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
					description="Saya adalah seorang programmer dengan pengalaman dalam pengembangan frontend menggunakan React, Tailwind CSS, dan TypeScript. Saya fokus pada menciptakan solusi yang efektif dan efisien serta selalu mencari peluang untuk mengembangkan keterampilan dan pengetahuan saya dalam teknologi web modern."
				/>
			</div>

			<section className="flex flex-col w-full max-w-screen-lg px-6 py-8 bg-gray-100 rounded-2xl shadow-lg mb-10 mx-auto">
				<label className="text-2xl font-semibold text-gray-800 mb-4">
					Education
				</label>
				{education.map((edu, index) => (
					<Card
						title={edu.title}
						year={edu.year}
						description={edu.description}
						key={index}
						className="bg-white shadow-lg rounded-lg p-6 mb-4 transition-transform transform hover:scale-105 hover:shadow-xl max-w-[300px]"
					/>
				))}
			</section>

			<section className="flex flex-col w-full max-w-screen-lg px-6 py-8 bg-gray-100 rounded-2xl shadow-lg mx-auto ">
				<label className="text-2xl font-semibold text-gray-800 mb-4">
					Projects
				</label>
				{projects.map((project, index) => (
					<Card
						title={project.title}
						year={project.year}
						description={project.description}
						key={index}
						className="bg-white shadow-lg rounded-lg p-6 mb-4 transition-transform transform hover:scale-105 hover:shadow-xl max-w-[600px]"
					/>
				))}
			</section>
		</div>
	);
};

export default LandingPage;
