import Footer from "./footer";
import LandingPage from "../features";
import Navbar from "./navbar";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen bg-gray-100">
			<Navbar />
			<main className="flex-grow mt-[40px]">
				<LandingPage />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
