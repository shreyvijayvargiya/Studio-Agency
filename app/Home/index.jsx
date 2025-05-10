import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
	ArrowRight,
	ChevronDown,
	Code,
	Link,
	MenuIcon,
	PenToolIcon,
	StarIcon,
	TabletSmartphone,
	X,
} from "lucide-react";
import gsap from "gsap";

const projects = [
	{
		title: "E-commerce Platform",
		image: "/images/project-ecommerce.webp",
		link: "#",
	},
	{
		title: "Mobile Banking App",
		image: "/images/project-mobileapp.webp",
		link: "#",
	},
	{
		title: "Healthcare Dashboard",
		image: "/images/project-healthcare.webp",
		link: "#",
	},
	{
		title: "Real Estate Platform",
		image: "/images/project-store.webp",
		link: "#",
	},
	// Adding more projects for continuous loop
	{
		title: "E-commerce Platform",
		image: "/images/project-ecommerce.webp",
		link: "#",
	},
	{
		title: "Mobile Banking App",
		image: "/images/project-mobileapp.webp",
		link: "#",
	},
];

const trustedCompanies = [
	{
		name: "Slack",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-1.png?alt=media&token=42f6c0ad-e6a4-426f-81b7-9b980a7228e1",
	},
	{
		name: "Figma",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-2.png?alt=media&token=b9c55419-1463-4a3d-89e3-4f5c74d2db90",
	},
	{
		name: "Google",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-3.png?alt=media&token=ad19be3c-a464-4869-adb1-75b13df1522d",
	},
	{
		name: "Spotify",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-5.png?alt=media&token=50fea414-9b0b-439c-9b55-cad0daaf6df3",
	},
	{
		name: "Tesla",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-6.png?alt=media&token=01eca906-cc76-4a3d-8c23-88a85d61c256",
	},
	{
		name: "OpenAI",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-7.png?alt=media&token=da7c6aaf-3efb-49d1-9fb9-2461ce831886",
	},
	{
		name: "Airbnb",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-8.png?alt=media&token=a29d83cf-aa7b-450b-9217-a4ea5582876b",
	},
	{
		name: "Nvidia",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png.png?alt=media&token=e993d678-b9b9-4d85-a543-c991cf1d432f",
	},
	{
		name: "Apple",
		logo: "https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/public%2Fbrands%2FLogo.png-4.png?alt=media&token=27594b44-f0ac-4d05-ac6b-2c15eabbf2b8",
	},
];

const faqs = [
	{
		question: "How long does it take to complete a project?",
		answer:
			"Typically, a complete website project takes 3-4 weeks from start to finish.",
	},
	{
		question: "What's included in your development package?",
		answer:
			"Our package includes design, development, testing, and deployment.",
	},
	{
		question: "Do you provide ongoing support?",
		answer:
			"Yes, we offer maintenance and support packages for all our clients.",
	},
	{
		question: "What payment methods do you accept?",
		answer:
			"We accept all major credit cards, PayPal, and bank transfers. We also offer flexible payment plans for larger projects.",
	},
	{
		question: "Can I make changes to my website after launch?",
		answer:
			"Yes, we provide a 30-day free revision period after launch. After that, you can opt for our maintenance package for ongoing updates.",
	},
	{
		question: "Do you offer hosting services?",
		answer:
			"Yes, we provide reliable hosting solutions with 99.9% uptime guarantee, regular backups, and 24/7 monitoring.",
	},
	{
		question: "What technologies do you use?",
		answer:
			"We use modern technologies including React, Next.js, Node.js, and various other frameworks based on project requirements.",
	},
	{
		question: "Do you provide SEO services?",
		answer:
			"Yes, we offer comprehensive SEO services including keyword research, on-page optimization, and performance tracking.",
	},
	{
		question: "What happens if I'm not satisfied with the result?",
		answer:
			"We work closely with you throughout the project and include multiple revision rounds. If you're still not satisfied, we'll work until you are.",
	},
	{
		question: "Do you offer mobile app development?",
		answer:
			"Yes, we develop both iOS and Android applications using React Native for cross-platform solutions.",
	},
];

const navigationLinks = [
	{
		name: "Home",
		ref: "heroRef",
	},
	{
		name: "About",
		ref: "introRef",
	},
	{
		name: "Projects",
		ref: "projectsRef",
	},
	{
		name: "Pricing",
		ref: "pricingRef",
	},
	{
		name: "Contact",
		ref: "contactRef",
	},
];

const CheckIcon = () => (
	<svg
		className="w-5 h-5 text-zinc-600"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M5 13l4 4L19 7"
		></path>
	</svg>
);

const PricingFeature = ({ text }) => (
	<li className="flex items-center gap-3">
		<CheckIcon />
		<span>{text}</span>
	</li>
);

const Home = () => {
	const heroRef = useRef(null);
	const introRef = useRef(null);
	const projectsRef = useRef(null);
	const pricingRef = useRef(null);
	const contactRef = useRef(null);
	const faqRef = useRef(null);
	const scrollContainerRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		// Scroll handling
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 10);
		};

		window.addEventListener("scroll", handleScroll);

		// Logo animation
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const logos = container.querySelectorAll(".scroll-image");

			// Create a timeline for infinite scroll
			const tl = gsap.timeline({
				repeat: -1,
				defaults: { ease: "none" },
			});

			// Calculate total width of all logos
			const totalWidth = Array.from(logos).reduce(
				(acc, logo) => acc + logo.offsetWidth,
				0
			);

			// Animate the container for infinite scroll
			tl.to(container, {
				x: -totalWidth,
				duration: 20,
				ease: "none",
			});

			// Clone logos for seamless loop
			logos.forEach((logo) => {
				const clone = logo.cloneNode(true);
				clone.classList.add("scroll-image");
				container.appendChild(clone);
			});
		}

		// Cleanup function
		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.body.style.overflow = "unset";
		};
	}, []); // Empty dependency array since we only want this to run once

	// Handle modal scroll lock separately since it depends on selectedProject
	useEffect(() => {
		if (selectedProject) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [selectedProject]);

	const scrollToSection = (ref) => {
		if (!ref || !ref.current) return;

		const element = ref.current;
		const navbarHeight = 80; // Height of the navbar

		// Get the element's position relative to the viewport
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - navbarHeight;

		// Use native smooth scrolling
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	};

	const getRefByName = (refName) => {
		const refs = {
			heroRef,
			introRef,
			projectsRef,
			pricingRef,
			contactRef,
		};
		return refs[refName];
	};

	const openModal = (project) => {
		setSelectedProject(project);
	};

	const closeModal = () => {
		setSelectedProject(null);
	};

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="relative min-h-screen bg-zinc-100/50">
			{/* Dot Pattern Background */}
			<div
				className="fixed left-0 top-0 h-screen z-0"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0)`,
					backgroundSize: "40px 40px",
					backgroundPosition: "0 0",
					opacity: 0.5,
				}}
			/>

			{/* Main content container with scroll behavior */}
			<div className="scroll-container z-50 ">
				{/* Navbar */}
				<nav className="">
					<div
						className={`fixed top-0.5 md:left-1/2 md:-translate-x-1/2 left-0 right-0 w-auto md:rounded-xl py-4 z-50 transition-all duration-300 ease-out ${
							isScrolled
								? "max-w-5xl bg-white backdrop-blur-sm"
								: "max-w-7xl bg-none backdrop-blur-sm"
						} `}
					>
						<div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
							{/* Logo */}
							<div className="flex-shrink-0">
								<a href="/" className="md:text-xl text-md font-bold">
									Studio
								</a>
							</div>

							{/* Navigation Links */}
							<div className="relative">
								{isMenuOpen ? (
									<X
										className="md:hidden"
										onClick={() => setIsMenuOpen(!isMenuOpen)}
									/>
								) : (
									<MenuIcon
										className="md:hidden"
										onClick={() => setIsMenuOpen(!isMenuOpen)}
									/>
								)}
								{isMenuOpen && (
									<motion.div
										initial={{ opacity: 0, y: 40 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										transition={{ duration: 0.3 }}
										className="absolute top-8 -left-20 mx-auto w-48 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4"
									>
										{navigationLinks.map((link, index) => (
											<button
												key={index}
												onClick={() => scrollToSection(getRefByName(link.ref))}
												className="text-zinc-800 hover:text-black px-3 py-2 md:text-sm text-xs font-medium"
											>
												{link.name}
											</button>
										))}
									</motion.div>
								)}

								<div className="hidden md:flex md:ml-10 items-center space-x-2">
									{navigationLinks.map((link, index) => (
										<button
											key={index}
											onClick={() => scrollToSection(getRefByName(link.ref))}
											className="text-zinc-800 hover:text-black px-3 py-2 md:text-sm text-xs font-medium"
										>
											{link.name}
										</button>
									))}
								</div>
							</div>

							{/* Connect Button */}
							<button
								onClick={() => scrollToSection(contactRef)}
								className="relative overflow-hidden bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium group md:ml-6"
							>
								<span className="relative z-10">Connect Now</span>
								<div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
							</button>
						</div>
					</div>
				</nav>

				{/* Hero Section */}
				<section ref={heroRef} className="scroll-item">
					<div className="flex items-center justify-center p-8">
						<div className="max-w-7xl mx-auto text-center space-y-10">
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-6xl mb-6 max-w-4xl mx-auto"
							>
								<div className="flex items-center justify-center gap-10 font-bold text-5xl flex-wrap">
									<p className="text-[5rem] font-medium">Development</p>
									<div className="flex items-center flex-col gap-2 ring-2 h-24 bg-zinc-900 text-white ring-zinc-800 rounded-xl p-2 overflow-hidden">
										<motion.div
											animate={{
												y: [
													"0",
													"-100px",
													"-200px",
													"-300px",
													"-400px",
													"-300px",
													"-200px",
													"-100px",
													"0px",
												],
											}}
											transition={{
												duration: 8,
												repeat: Infinity,
												ease: "linear",
											}}
											ref={scrollContainerRef}
											onClick={() => openModal(projects[0])}
											className="flex flex-col gap-2  cursor-pointer group"
										>
											{projects.map((item) => {
												return (
													<img
														src={item.image}
														alt="logo"
														key={item.title}
														className="w-40 h-20 rounded-xl"
													/>
												);
											})}
										</motion.div>
									</div>
									<p className="text-[4rem] font-light text-zinc-800">Studio</p>
									<p className="text-[4rem] font-medium">for small</p>
									<div className="relative w-32 h-16 overflow-hidden ring-2 ring-zinc-800 bg-zinc-900 text-white rounded-xl p-2 flex flex-col items-center justify-center ">
										<motion.div
											className="flex items-center gap-2"
											animate={{
												x: ["0", "-10px", "-20px", "-30px", "-40px", "-50px"],
											}}
											transition={{
												duration: 8,
												repeat: Infinity,
												delay: 1,
												ease: "linear",
											}}
										>
											<Code size={32} />
											<TabletSmartphone size={32} />
											<PenToolIcon size={32} />
											<StarIcon size={32} />
											{/* Clone the icons for seamless loop */}
											<Code size={32} />
											<TabletSmartphone size={32} />
											<PenToolIcon size={32} />
											<StarIcon size={32} />
										</motion.div>
									</div>
									<p className="text-[4rem] font-light text-zinc-600">
										Startups
									</p>
								</div>
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="mb-8 max-w-sm mx-auto text-zinc-600 text-center"
							>
								We transform ideas into powerful digital solutions that drive
								growth and innovation
							</motion.p>
							<div className="flex items-center justify-center gap-10">
								<motion.button
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									className="bg-zinc-900 hover:bg-black text-white px-8 py-3 rounded-full text-lg transition-all duration-300 ease-in ring-4 ring-zinc-100 hover:ring-8"
								>
									Start Your Project
								</motion.button>
								<div>
									{(() => {
										const teamMembers = [
											{
												name: "Sarah Johnson",
												image:
													"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
											},
											{
												name: "Michael Chen",
												image:
													"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
											},
											{
												name: "Emma Wilson",
												image:
													"https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
											},
											{
												name: "David Kim",
												image:
													"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
											},
											{
												name: "Emma Wilson",
												image:
													"https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
											},
										];

										return (
											<div className="flex -space-x-2">
												{teamMembers.map((member, index) => (
													<img
														key={index}
														src={member.image}
														alt={`Team member ${member.name}`}
														className="w-10 h-10 object-cover hover:translate-y-1 transition-all duration-100 ease-in rounded-full border-2 border-white"
														title={member.name}
													/>
												))}
											</div>
										);
									})()}
									<p className="text-zinc-400 text-sm mt-2">
										10+ projects completed
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="my-20 group relative max-w-7xl mx-auto">
						<video
							src="/demo-video.mp4"
							alt="hero"
							autoPlay
							muted
							loop
							className="w-full h-full mx-auto ring-2 ring-zinc-200 hover:ring-zinc-200 hover:ring-4 transition-all duration-300 ease-in rounded-xl"
						/>
					</div>
				</section>
				{/* Introduction Section */}
				<section ref={introRef} className="scroll-item">
					<div className="w-full">
						<div className="max-w-6xl mx-auto px-8">
							<div className="flex justify-center items-center mb-4">
								<div className="w-40 h-0.5 bg-gradient-to-r to-zinc-200 via-zinc-100 from-white" />
								<p className="text-zinc-500 mx-4 font-mono text-sm italic">
									see how we work
								</p>
								<div className="w-40 h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-100 to-white" />
							</div>
							<h3 className="text-4xl font-light mb-4 text-center">
								3 Step process
							</h3>
						</div>
						<br />
						<br />
						<br />
						<br />
						<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:px-0 px-4">
							<motion.div
								initial={{ skewX: -6, opacity: 0 }}
								whileInView={{ skewX: 0, opacity: 1 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.3 },
								}}
								className="p-6 border rounded-xl bg-white ring-4 ring-zinc-200/50 shadow-2xl hover:ring-8 hover:shadow-3xl transition-all duration-300 ease-in-out"
							>
								<p className="text-zinc-600 font-bold mb-20 text-4xl">1</p>
								<h3 className="text-2xl mb-4">Contact</h3>
								<p className="text-lg">
									Get in touch with us to discuss your project requirements
								</p>
							</motion.div>
							<motion.div
								initial={{ y: -40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.3 },
								}}
								className="p-6 border rounded-xl bg-white ring-4 ring-zinc-200/50 shadow-2xl hover:ring-8 hover:shadow-3xl transition-all duration-300 ease-in-out"
							>
								<p className="text-zinc-600 font-bold mb-20 text-4xl">2</p>
								<h3 className="text-2xl mb-4">Project Requirements</h3>
								<p className="text-lg">
									We'll work with you to create the perfect Project
								</p>
							</motion.div>
							<motion.div
								initial={{ skewX: 6, opacity: 0 }}
								whileInView={{ skewX: 0, opacity: 1 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								whileHover={{
									scale: 1.02,
									transition: { duration: 0.3 },
								}}
								className="p-6 border rounded-xl bg-white ring-4 ring-zinc-200/50 shadow-2xl hover:ring-8 hover:shadow-3xl transition-all duration-300 ease-in-out"
							>
								<p className="text-zinc-600 font-bold mb-20 text-4xl">3</p>
								<h3 className="text-2xl mb-4">Development</h3>
								<p className="text-lg">
									Your website will be ready in 3-4 weeks
								</p>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Trusted Companies Container */}
				<section className="scroll-item">
					<div className="overflow-hidden my-20 max-w-7xl mx-auto">
						<div className="flex justify-center items-center mb-4">
							<div className="w-40 h-0.5 bg-gradient-to-r to-zinc-200 via-zinc-100 from-white" />
							<p className="text-zinc-500 mx-4 font-mono text-sm italic">
								Trusted by
							</p>
							<div className="w-40 h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-100 to-white" />
						</div>
						<motion.div
							ref={scrollContainerRef}
							className="flex gap-8 whitespace-nowrap"
							animate={{
								x: ["0px", "-100px"],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							{trustedCompanies.map((company, index) => (
								<div
									key={index}
									className={`scroll-image flex-shrink-0 relative group cursor-pointer rounded-xl p-5 transition-opacity duration-300 ${
										index < 2 || index > trustedCompanies.length - 3
											? "opacity-40 hover:opacity-100"
											: "opacity-100"
									}`}
								>
									<img
										src={company.logo}
										alt={company.name}
										className="h-24 object-cover rounded-xl"
									/>
								</div>
							))}
						</motion.div>
					</div>
				</section>

				{/* Recent Projects */}
				<section ref={projectsRef} className="scroll-item">
					<div className="max-w-7xl mx-auto px-8 relative z-10">
						<div className="flex justify-center items-center mb-4">
							<div className="w-40 h-0.5 bg-gradient-to-r to-zinc-200 via-zinc-100 from-white" />
							<p className="text-zinc-500 mx-4 font-mono text-sm italic">
								Our projects
							</p>
							<div className="w-40 h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-100 to-white" />
						</div>
						<h2 className="text-4xl font-light text mb-20 text-center">
							Recent Projects
						</h2>

						{/* Original Grid Layout */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{projects.slice(0, 4).map((project, index) => (
								<div key={index}>
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="relative group cursor-pointer rounded-xl p-5 ring-2 ring-zinc-200 hover:ring-4 hover:ring-zinc-200 transition-all duration-300 ease-in bg-white"
										onClick={() => openModal(project)}
									>
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-[36rem] object-cover rounded-xl group-hover:translate-y-1 transition-all duration-300 ease-in"
										/>
									</motion.div>
									<p className="text-xl text-zinc-400 my-4 text-center">
										{project.title}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Project Modal */}
				<AnimatePresence>
					{selectedProject && (
						<motion.div
							initial={{ opacity: 0, y: "-100%" }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-zinc-100/50 backdrop-blur-xl z-50 flex items-start justify-center p-4 overflow-y-auto"
							onClick={closeModal}
						>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								transition={{ duration: 0.2 }}
								className="w-full max-h-[90vh] mx-auto rounded-xl relative my-8"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="p-6 z-50 max-w-4xl mx-auto">
									<div className="flex items-center justify-end gap-10">
										<button
											onClick={closeModal}
											className="p-2 bg-white hover:scale-105 transition-all duration-100 ease-in rounded-full"
										>
											<X className="w-6 h-6" />
										</button>
									</div>
								</div>
								<div className="md:p-20 p-10 max-w-4xl mx-auto bg-white rounded-2xl">
									<div className="flex flex-col gap-8">
										<h3 className="text-4xl font-light text-black">
											{selectedProject.title}
										</h3>
										<p className="text-zinc-600 text-lg">
											Strida offers a smooth and powerful experience when
											presenting your work in a full-screen format. It combines
											bold Swiss typography, smooth animations, sidebar
											navigations, flexible CMS — everything to make your
											portfolio rock.
										</p>
										<button
											onClick={() => scrollToSection(contactRef)}
											className="flex items-center ring-4 ring-zinc-100 justify-center w-40 gap-2 relative overflow-hidden bg-zinc-800 text-white px-2 py-2 rounded-full text-sm font-medium group"
										>
											<Link size={20} />
											<span className="relative z-10">Check link</span>
											<div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
										</button>
										<div className="flex flex-col gap-12">
											{projects.slice(0, 4).map((project, index) => (
												<div key={index} className="flex flex-col gap-6 my-5">
													<img
														src={project.image}
														alt={project.title}
														className="w-full h-[500px] object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500"
													/>
													<div className="space-y-4 max-w-3xl">
														<h3 className="text-3xl font-semibold text-zinc-800">
															{project.title}
														</h3>
														<div className="space-y-4 text-zinc-600">
															{index === 0 && (
																<>
																	<p className="text-lg leading-relaxed">
																		Our e-commerce platform represents a
																		breakthrough in online shopping experiences.
																		Built with cutting-edge technology, it
																		offers seamless navigation, real-time
																		inventory management, and secure payment
																		processing.
																	</p>
																	<ul className="list-disc pl-6 space-y-2">
																		<li>
																			Advanced product filtering and search
																			capabilities
																		</li>
																		<li>
																			Integrated payment gateways with SSL
																			encryption
																		</li>
																		<li>
																			Real-time inventory tracking and
																			management
																		</li>
																		<li>
																			Responsive design optimized for all
																			devices
																		</li>
																	</ul>
																</>
															)}
															{index === 1 && (
																<>
																	<p className="text-lg leading-relaxed">
																		The mobile banking application
																		revolutionizes how users interact with their
																		finances. With state-of-the-art security
																		features and intuitive design, it provides a
																		seamless banking experience on the go.
																	</p>
																	<ul className="list-disc pl-6 space-y-2">
																		<li>
																			Biometric authentication for enhanced
																			security
																		</li>
																		<li>
																			Real-time transaction monitoring and
																			alerts
																		</li>
																		<li>
																			Budget tracking and financial analytics
																		</li>
																		<li>
																			Cross-platform compatibility (iOS &
																			Android)
																		</li>
																	</ul>
																</>
															)}
															{index === 2 && (
																<>
																	<p className="text-lg leading-relaxed">
																		Our healthcare dashboard transforms patient
																		care management through an intuitive
																		interface that streamlines medical record
																		keeping and patient monitoring.
																	</p>
																	<ul className="list-disc pl-6 space-y-2">
																		<li>
																			Comprehensive patient record management
																		</li>
																		<li>
																			Real-time health monitoring and alerts
																		</li>
																		<li>Secure HIPAA-compliant data storage</li>
																		<li>
																			Integration with medical devices and
																			wearables
																		</li>
																	</ul>
																</>
															)}
															{index === 3 && (
																<>
																	<p className="text-lg leading-relaxed">
																		The real estate platform offers an immersive
																		property viewing experience with advanced
																		features for both buyers and sellers in the
																		real estate market.
																	</p>
																	<ul className="list-disc pl-6 space-y-2">
																		<li>
																			Virtual 3D property tours and walkthroughs
																		</li>
																		<li>
																			Advanced property search and filtering
																		</li>
																		<li>
																			Real-time market analysis and pricing
																		</li>
																		<li>
																			Integrated appointment scheduling system
																		</li>
																	</ul>
																</>
															)}
														</div>
													</div>
												</div>
											))}
										</div>
										<div className="flex justify-start space-x-6 mb-10">
											<p>Do have look on the media</p>
											<div className="relative group">
												<a
													href="#"
													className="text-zinc-600 hover:text-zinc-800 transition-colors duration-300"
												>
													<FaGithub size={24} />
												</a>
												<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-50 text-zinc-600 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
													GitHub
												</div>
											</div>
											<div className="relative group">
												<a
													href="#"
													className="text-zinc-600 hover:text-zinc-800 transition-colors duration-300"
												>
													<FaTwitter size={24} />
												</a>
												<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-50 text-zinc-600 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
													Twitter
												</div>
											</div>
											<div className="relative group">
												<a
													href="#"
													className="text-zinc-600 hover:text-zinc-800 transition-colors duration-300"
												>
													<FaLinkedin size={24} />
												</a>
												<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-50 text-zinc-600 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
													LinkedIn
												</div>
											</div>
											<div className="relative group">
												<a
													href="#"
													className="text-zinc-600 hover:text-zinc-800 transition-colors duration-300"
												>
													<FaInstagram size={24} />
												</a>
												<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-50 text-zinc-600 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
													Instagram
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Pricing Section */}
				<section ref={pricingRef} className="scroll-item">
					<div className="max-w-6xl mx-auto px-8">
						<div className="flex justify-center items-center mb-4">
							<div className="w-40 h-0.5 bg-gradient-to-r to-zinc-200 via-zinc-100 from-white" />
							<p className="text-zinc-500 mx-4 font-mono text-sm italic">
								Pricing
							</p>
							<div className="w-40 h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-100 to-white" />
						</div>
						<h2 className="text-4xl mb-20 text-center">Book Your Project</h2>
						<motion.div
							initial={{ skewX: 2 }}
							whileInView={{ skewX: 0, scale: 1.05 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-2xl ring-8 ring-zinc-100/50 shadow-2xl bg-white p-10"
						>
							<div className="p-8 hover:bg-zinc-50/50 hover:scale-105 transition-all duration-300 ease-in-out rounded-xl">
								<h3 className="text-2xl font-bold mb-4">Basic</h3>
								<p className="text-3xl font-bold mb-4">$2,999</p>
								<ul className="text-left mb-8 space-y-4">
									<PricingFeature text="5 Pages Website" />
									<PricingFeature text="Basic SEO" />
									<PricingFeature text="Contact Form" />
									<PricingFeature text="2 Weeks Delivery" />
								</ul>
								<button className="bg-zinc-800 hover:bg-zinc-900 transition-all duration-300 ease-in hover:ring-4 hover:ring-zinc-100 text-white px-6 py-2 rounded-full">
									Get Started
								</button>
							</div>
							<div className="p-8 bg-zinc-50/50 hover:bg-zinc-50/50 hover:scale-105 transition-all duration-300 ease-in-out rounded-xl">
								<h3 className="text-2xl font-bold mb-4">Professional</h3>
								<p className="text-3xl font-bold mb-4">$4,999</p>
								<ul className="text-left mb-8 space-y-4">
									<PricingFeature text="10 Pages Website" />
									<PricingFeature text="Advanced SEO" />
									<PricingFeature text="Custom Features" />
									<PricingFeature text="3 Weeks Delivery" />
								</ul>
								<button className="bg-zinc-800 hover:bg-zinc-900 transition-all duration-300 ease-in hover:ring-4 hover:ring-zinc-100 text-white px-6 py-2 rounded-full">
									Get Started
								</button>
							</div>
							<div className="p-8 hover:bg-zinc-50/50 hover:scale-105 transition-all duration-300 ease-in-out rounded-xl">
								<h3 className="text-2xl font-bold mb-4">Enterprise</h3>
								<p className="text-3xl font-bold mb-4">$9,999</p>
								<ul className="text-left mb-8 space-y-4">
									<PricingFeature text="Unlimited Pages" />
									<PricingFeature text="Full SEO Package" />
									<PricingFeature text="Custom Development" />
									<PricingFeature text="4 Weeks Delivery" />
								</ul>
								<button className="bg-zinc-800 hover:bg-zinc-900 transition-all duration-300 ease-in hover:ring-4 hover:ring-zinc-100 text-white px-6 py-2 rounded-full">
									Get Started
								</button>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Contact Form */}
				<section ref={contactRef} className="scroll-item">
					<div className="max-w-7xl mx-auto px-8">
						<div className="flex justify-center items-center mb-4">
							<div className="w-40 h-0.5 bg-gradient-to-r to-zinc-200 via-zinc-100 from-white" />
							<p className="text-zinc-500 mx-4 font-mono text-sm italic">
								Contacts
							</p>
							<div className="w-40 h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-100 to-white" />
						</div>
						<h2 className="text-4xl font-light mb-20 text-center">
							Contact Us
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-10 py-10">
							<div className="space-y-4 max-w-lg">
								<p className="text-zinc-600 italic text-lg">
									"Working with this team was an absolute pleasure. They
									delivered our project on time and exceeded our expectations.
									The attention to detail and communication throughout the
									process was outstanding."
								</p>
								<div className="flex items-center gap-4 md:pt-40">
									<img
										src="https://framerusercontent.com/images/GQYbkjoIOqJZo9gC9bpE4YLn18.png?scale-down-to=512"
										className="w-16 h-16 rounded-full"
									/>
									<div>
										<h4 className="font-semibold">Sarah Johnson</h4>
										<p className="text-zinc-500">CEO, TechStart Inc.</p>
									</div>
								</div>
							</div>
							<form className="space-y-6 border-l border-zinc-200 pl-10">
								<div>
									<input
										type="text"
										placeholder="Your Name"
										className="w-full p-3 border rounded-xl outline-none ring-2 ring-zinc-200 focus:ring-4 focus:ring-zinc-200"
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="Your Email"
										className="w-full p-3 border rounded-xl outline-none ring-2 ring-zinc-200 focus:ring-4 "
									/>
								</div>
								<div>
									<textarea
										placeholder="Your Message"
										rows="4"
										className="w-full p-3 border rounded-xl outline-none ring-2 ring-zinc-200 focus:ring-4"
									></textarea>
								</div>
								<button className="w-full bg-zinc-800 hover:bg-zinc-900 transition-all duration-300 ease-in hover:ring-4 hover:ring-zinc-100 text-white py-3 rounded-xl">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</section>

				{/* FAQs */}
				<section ref={faqRef} className="scroll-item">
					<div className="max-w-7xl mx-auto px-8">
						<div className="flex justify-center items-center mb-4">
							<div className="w-40 h-0.5 bg-gradient-to-r to-zinc-200 via-zinc-100 from-white" />
							<p className="text-zinc-500 mx-4 font-mono text-sm italic">
								Answers to your questions
							</p>
							<div className="w-40 h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-100 to-white" />
						</div>
						<h2 className="text-4xl font-light font-sans mb-20 text-center">
							Frequently Asked Questions
						</h2>
						<div className="flex flex-col justify-between items-start md:flex-row gap-10">
							<div className="p-10 ring-4 ring-zinc-200 hover:shadow-3xl transition-all duration-300 ease-in rounded-xl bg-white max-w-md skew-x-4 shadow-2xl">
								<div className="flex items-center justify-start gap-10 mb-20">
									<img
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
										alt="User"
										className="w-24 h-24 rounded-full object-cover ring-4 ring-zinc-200"
									/>
									<p className="text-xl">
										Have more questions? <br /> Book a free discovery call
									</p>
								</div>
								<button
									onClick={() => console.log("clicked")}
									className="relative flex items-center justify-center overflow-hidden bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium group"
								>
									<span className="relative z-10">Book calendly meeting</span>
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-in" />
									<div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
								</button>
							</div>
							<div className="space-y-4 flex-1">
								{faqs.map((faq, index) => (
									<details
										key={index}
										className="border-t border-zinc-200 p-4 transition-all duration-300 group"
									>
										<summary className="w-full flex justify-between items-center cursor-pointer list-none">
											<span className="text-lg">{faq.question}</span>
											<ChevronDown className="w-5 h-5 text-zinc-600 group-open:rotate-180 transition-transform duration-300" />
										</summary>
										<p className="mt-2 text-zinc-600">{faq.answer}</p>
									</details>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Let's Connect */}
				<section className="scroll-item py-20 bg-black shadow-2xl ring-8 ring-zinc-200/50 border-t-[1rem] border-zinc-200 text-white rounded-t-[5rem] relative overflow-hidden inset-0">
					<div
						className="absolute inset-0 opacity-20"
						style={{
							backgroundImage:
								'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
							backgroundSize: "100px",
							backgroundPosition: "left top",
							backgroundRepeat: "repeat",
						}}
					/>

					<motion.div
						className="max-w-7xl mx-auto px-8 text-center relative z-10 min-h-[60vh]"
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						initial={{ opacity: 0, scale: 0.98, y: 100 }}
						exit={{ opacity: 0, scale: 0.98, y: -100 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<div className="text-center flex flex-col justify-center items-center gap-10">
							<motion.h2
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="group md:text-[8rem] text-7xl font-serif font-extrabold md:my-20 animate-in hover:animate-none transition-all duration-300 ease-in"
							>
								Let's Connect
							</motion.h2>
							<div className="">
								{(() => {
									const teamMembers = [
										{
											name: "Sarah Johnson",
											image:
												"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
										},
										{
											name: "Michael Chen",
											image:
												"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
										},
										{
											name: "Emma Wilson",
											image:
												"https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
										},
										{
											name: "David Kim",
											image:
												"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
										},
										{
											name: "Emma Wilson",
											image:
												"https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
										},
									];

									return (
										<div className="flex -space-x-2">
											{teamMembers.map((member, index) => (
												<img
													key={index}
													src={member.image}
													alt={`Team member ${member.name}`}
													className="w-10 h-10 object-cover hover:translate-y-1 transition-all duration-100 ease-in rounded-full border-2 border-white"
													title={member.name}
												/>
											))}
										</div>
									);
								})()}
								<p className="text-zinc-400 text-sm mt-2">
									10+ projects completed
								</p>
							</div>
							<svg
								version="1.1"
								id="Capa_1"
								width="48px"
								height="24px"
								className="animate-bounce fill-zinc-600"
								viewBox="0 0 381.745 381.745"
							>
								<g>
									<path
										d="M205.068,2.244C91.236-9.384,9.84,81.192,0.66,188.292C-3.624,239.7,12.9,289.884,51.456,324.156
										c20.808,18.36,50.184,36.108,80.784,43.452c97.309,43.452,216.036-28.764,242.964-128.521
										C407.028,124.645,318.288,13.872,205.068,2.244z M265.656,79.968c0.612,1.836,1.225,3.672,2.448,5.508
										c-2.448-2.447-4.284-4.283-6.731-6.731C263.209,78.744,264.433,79.356,265.656,79.968z M186.096,312.528
										C147.54,272.137,120,220.116,75.936,185.232c-1.224-3.061-2.448-6.732-3.06-10.404c23.256-3.061,47.124-6.12,70.38-2.448
										c3.06,0.612,5.508-0.612,7.344-2.448c1.836-0.611,3.672-2.447,3.672-4.896c-0.612-22.645-2.448-44.676-4.284-67.32
										c26.316-1.836,53.857-8.567,80.172-3.672c15.301,3.061-3.672,51.408-1.224,66.096c-1.224,3.061,0,7.956,4.284,9.181
										c11.016,3.06,23.256,1.224,34.884,0.611c4.896,0,10.404,0,15.3-0.611C255.864,220.116,232.608,277.645,186.096,312.528z"
									/>
								</g>
							</svg>
							<button
								onClick={() => console.log("clicked")}
								className="relative flex items-center justify-center mx-auto text-center overflow-hidden bg-black text-white ring-2 ring-zinc-700 px-4 py-2 rounded-full text-sm font-medium group"
							>
								<span className="relative z-10">Book calendly meeting</span>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-in" />
								<div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
							</button>
							<br />
							<p className="text-zinc-400 font-light mb-40 max-w-md mx-auto">
								Feel free to contact me if having any questions. I'm available
								for new projects or just for chatting.
							</p>
							<div className="flex justify-center space-x-6">
								<div className="relative group">
									<a
										href="#"
										className="hover:text-zinc-400 transition-colors duration-300"
									>
										<FaGithub size={24} />
									</a>
									<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-50 text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										GitHub
									</div>
								</div>
								<div className="relative group">
									<a
										href="#"
										className="hover:text-zinc-400 transition-colors duration-300"
									>
										<FaTwitter size={24} />
									</a>
									<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-50 text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										Twitter
									</div>
								</div>
								<div className="relative group">
									<a
										href="#"
										className="hover:text-zinc-400 transition-colors duration-300"
									>
										<FaLinkedin size={24} />
									</a>
									<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-50 text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										LinkedIn
									</div>
								</div>
								<div className="relative group">
									<a
										href="#"
										className="hover:text-zinc-400 transition-colors duration-300"
									>
										<FaInstagram size={24} />
									</a>
									<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-50 text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
										Instagram
									</div>
								</div>
							</div>
							<p className="mt-8 text-zinc-400">
								© 2025 Your Studio Agency. All rights reserved.
							</p>
						</div>
					</motion.div>
				</section>
			</div>
		</div>
	);
};

export default Home;
