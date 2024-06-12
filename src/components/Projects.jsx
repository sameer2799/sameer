import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../HOC";
import Button from '@mui/material/Button';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{opacity: 0, y: -100}} transition={{ duration: 0.5}} className="my-20 text-center text-4xl">Projects</motion.h2>
			<div>
				{PROJECTS.map((project, index) => (
					<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
						<motion.div whileInView={{ opacity: 1, x: 0 }} initial={{opacity: 0, x: -100}} transition={{ duration: 1}} className="w-full lg:w-1/4">
							<img src={project.image} width={150} height={150} className="mb-6 rounded" alt={project.title}/>
						</motion.div>
						<motion.div whileInView={{ opacity: 1, x: 0 }} initial={{opacity: 0, x: 100}} transition={{ duration: 1}} className="w-full max-w-xl lg:w-3/4">
							<h6 className="mb-2 text-xl text-semibold ">{project.title}</h6>
							<div className="my-4"><a href={project.link} target="_blank"><Button variant="contained" color="success" endIcon={<FaGithub />}>Github Repo</Button></a></div>
							<p className="mb-4 text-neutral-400">{project.description}</p>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, index) => (
									<span key={index} className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-emerald-500">{tech}</span>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Projects, "projects");
