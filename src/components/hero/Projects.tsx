const Projects = () => {
	const myProjects = [
		{
			title: "Data Analysis",
			description: "This is default project",
			image: "",
		},
		{
			title: "Data Manipulation",
			description: "This is default description",
			image: "",
		},
	];

	return (
		<section class="w-full mt-24 border-t border-zinc-300">
			<p class="">Projects</p>
			<div class="grid grid-cols-2 gap-8 grid-rows-2">
				<div class="w-[400px] h-[400px] bg-rose-600 col-start-1"></div>
				<div class="w-[400px] h-[400px] bg-teal-600 row-start-2 col-start-2"></div>
				{/* <div class="w-[400px] h-[400px] bg-rose-600"></div>
				<div class="w-[400px] h-[400px] bg-teal-600"></div> */}
			</div>
		</section>
	);
};

export default Projects;
