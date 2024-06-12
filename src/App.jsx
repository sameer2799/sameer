import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function App() {

	const toHome = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
};

  return (
  	<BrowserRouter>
	<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
		<div className="fixed top-0 -z-10 h-full w-full">
			<div className="relative h-full w-full bg-black">
				<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
				<div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
			</div>
		</div>
		
		<div className="container mx-auto px-8" >
			<Navbar />
			<Hero />
			<About />
			<Technology />
			{/* <Experience /> */}
			<Projects />
			<Contact />
		</div>
		<button id="myBtn" onClick={toHome} title="Go to top" className="visible z-99 fixed right-9 bottom-9 rounded-full bg-red-900 p-3 text-white-900 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">Top</button>
	</div>
	</BrowserRouter>
  )
}


