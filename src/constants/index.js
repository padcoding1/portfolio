import {
	fullstack,
	frontend,
	backend,
	javascript,
	json,
	python,
	typescript,
	reactjs,
	tailwind,
	nodejs,
	postgresql,
	surelock,
	growapp,
	catcollector,
	peakpartner,
	dell,
	vandelay,
	gkhouses,
	virtuance,
	mongo,
	express,
	flask,
	github,
	sql,
	django,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
  {
    id: "tech",
    title: "Tech",
  },
	{
		id: "projects",
		title: "Projects",
	},
  {
		id: "experience",
		title: "Experience",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full-stack Developer",
		icon: fullstack,
	},
	{
		title: "Frontend Developer",
		icon: frontend,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];
const technologies = [
	{
		name: "JS/HTML/CSS",
		icon: javascript,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "SQL",
		icon: sql,
	},
	{
		name: "JSON",
		icon: json,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React",
		icon: reactjs,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Express",
		icon: express,
	},
	{
		name: "Django",
		icon: django,
	},
	{
		name: "Flask",
		icon: flask,
	},
	{
		name: "PostgreSQL",
		icon: postgresql,
	},
	{
		name: "Mongo",
		icon: mongo,
	},
	{
		name: "Tailwind/Bootstrap",
		icon: tailwind,
	},
	{
		name: "Git/GitHub",
		icon: github,
	},
];

const experiences = [
	{
		title: "IT Operations Analyst",
		company_name: "Dell Technologies",
		icon: dell,
		iconBg: "#333333",
		date: "2021-2023",
	},
	{
		title: "Field Operations & Software Specialist",
		company_name: "Virtuance",
		icon: virtuance,
		iconBg: "#333333",
		date: "2020",
	},
	{
		title: "Director of Maintenance",
		company_name: "GK Houses",
		icon: gkhouses,
		iconBg: "#333333",
		date: "2017-2020",
	},
	{
		title: "Business Innovation & Technology Strategist",
		company_name: "Vandelay Education AND Bluth Holdings",
		icon: vandelay,
		iconBg: "#333333",
		date: "2015-2017",
	},
];

const projects = [
	{
		id: "project-1",
		name: "SureLock",
		description:
			"A password manager app that makes securing and organizing your passwords a breeze—keeping your digital world safe with just a few clicks!",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: surelock,
		repo: "https://github.com/padcoding1/surelock-password-app",
		demo: "http://localhost:5173/#projects",
	},
	{
		id: "project-2",
		name: "GrowApp",
		description:
			"Keep your garden thriving by identifying plants with an API, organizing tasks like a pro, and scheduling fun gardening activities!",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: growapp,
		repo: "https://github.com/padcoding1/growapp",
		demo: "http://localhost:5173/#projects",
	},
	{
		id: "project-3",
		name: "Cat Collector",
		description:
			"Herding cats! A fun CRUD app to collect and manage cats using Django.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: catcollector,
		repo: "https://github.com/padcoding1/django-crud-app-cat-collector",
		demo: "http://localhost:5173/#projects",
	},
	{
		id: "project-4",
		name: "PeakPartner",
		description: `PeakPartner is a full-stack app where climbers and expedition leaders can plan and join expeditions, with leaders creating trips and managing participants, while climbers sign up and track their next adventure!`,
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: peakpartner,
		repo: "https://github.com/padcoding1/peakpartner-men-stack-crud-app-project2",
		demo: "http://localhost:5173/#projects",
	},
];

export { services, technologies, experiences, projects };
