import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../HOC";


const Experience = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{opacity: 0, y: -100}} transition={{ duration: 0.5}} className="my-20 text-center text-4xl">Experience</motion.h2>
			<div>
				{
					EXPERIENCES.map((experience, index) => (
						<ExperienceItem key={index} experience={experience}/>
					))
				}
			</div>
		</div>
	);
};

export default SectionWrapper(Experience, "experience");
