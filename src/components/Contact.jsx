import { useState, useRef, Fragment } from "react";
import { Snackbar, Alert, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import { CONTACT } from '../constants';
import { SectionWrapper } from "../HOC";
import emailjs from '@emailjs/browser';

const Contact = () => {

	const formRef = useRef();
	
	const [ form, setForm ] = useState({
		name: "",
		email: "",
		message: ""
		});
	
	const [ loading, setLoading] = useState(false);

	const [open, setOpen] = useState(false);
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		
		setForm({...form, [name]:value });
	};
	
	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		
		emailjs.send(
		  'service_crvtk0p',      // service key from EmailJS
		  'template_3ws2iii',     // template key from EmailJS
		  {
		    from_name: form.name,
		    from_email: form.email,
		    message: form.message
		  },
		  'VKcDhGywsc0ENpPxA')           // public key from EmailJS
		  .then((response) => {
		    setLoading(false);
		    setOpen(true);
		    setForm({
		      name: "",
		      email: "",
		      message: "",
		    });
		  }, (error) => {
		    setLoading(false);
		  });
		
	};
	


	  const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}

		setOpen(false);
	  };




	return (
		<div className="border-b border-neutral-900 pb-20">
			<motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{opacity: 0, y: -100}} transition={{ duration: 0.5}} className="my-10 text-center text-4xl">Hire Me Now!</motion.h2>
			<motion.h6 whileInView={{ opacity: 1, y: 0 }} initial={{opacity: 0, y: -100}} transition={{ duration: 0.5}} className="my-10 text-center text-base italic">I will read your message within 24 hours!</motion.h6>
			{/*<div className="text-center tracking-tighter">
				<motion.p whileInView={{ opacity: 1, x: 0 }} initial={{opacity: 0, x: -100}} transition={{ duration: 1}} className="my-4">{CONTACT.address}</motion.p>
				<motion.p whileInView={{ opacity: 1, x: 0 }} initial={{opacity: 0, x: 100}} transition={{ duration: 1}} className="my-4">{CONTACT.phoneNo}</motion.p>
				<span className="border-b">{CONTACT.email}</span>
			</div>*/}
			<div className="flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div whileInView={{ opacity: 1, y: 0 }} initial={{opacity: 0, y: 100}} transition={{ duration: 0.5}} className="flex-1 bg-black-100 p-8 rounded-2xl">
				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
				  <label className="flex flex-col">
				    <span className="text-white font-medium mb-4">Your Name</span>
				    <input type="text" required name="name" value={form.name} onChange={handleChange} placeholder="What's your name" className="bg-black px-6 py-4 placehoder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
				  </label>
				  <label className="flex flex-col">
				    <span className="text-white font-medium mb-4">Your Email</span>
				    <input type="email" required name="email" value={form.email} onChange={handleChange} placeholder="What's your email" className="bg-black px-6 py-4 placehoder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
				  </label>
				  <label className="flex flex-col">
				    <span className="text-white font-medium mb-4">Your Message</span>
				    <textarea rows="7" required name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-black px-6 py-4 placehoder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
				  </label>
				  <Button type='submit' variant="outlined" color="success" className="px-8 py-3 font-bold w-fit rounded-xl">
				    {loading ? "Sending..." : "Send"}
				  </Button>
				   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					  <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
						Thank You for contacting!
					  </Alert>
					</Snackbar>
				</form>
			</motion.div>
			</div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
