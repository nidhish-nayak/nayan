import { MY_SKILLS } from "../../consts";

const Services = () => {
	return (
		<section class="w-full md:w-[97%] border-t border-zinc-300 dark:border-zinc-700">
			<p class="">Services</p>
			<div class="flex flex-col md:grid grid-cols-2 mt-12">
				<div class="flex flex-col row-span-2 md:p-12 md:mb-0 mb-8 border-t md:border-b dark:border-zinc-700">
					<h2 class="pt-8 md:p-0">{MY_SKILLS["data-analytics"].title}</h2>
					<p class="block md:hidden">
						{MY_SKILLS["data-analytics"].description}{" "}
					</p>
					<p class="hidden md:block">{MY_SKILLS["data-analytics"].long} </p>
					<ul class="flex flex-wrap gap-4 md:mt-8">
						{MY_SKILLS["data-analytics"].skills.map((skill) => (
							<li class="bg-zinc-200 dark:bg-zinc-900 py-[2px] px-3 rounded-md text-lg">
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div class="flex flex-col my-4 md:mb-0 mb-8 md:my-0 md:p-12 border-t md:border-l dark:border-zinc-700">
					<h2 class="pt-8 md:p-0">{MY_SKILLS["data-visualization"].title}</h2>
					<p>{MY_SKILLS["data-visualization"].description}</p>
					<ul class="flex flex-wrap gap-4 md:mt-8">
						{MY_SKILLS["data-visualization"].skills.map((skill) => (
							<li class="bg-zinc-200 dark:bg-zinc-900 py-[2px] px-3 rounded-md text-lg">
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div class="flex flex-col col-start-2 md:p-12 border-t md:border-l md:border-b dark:border-zinc-700">
					<h2 class="pt-8 md:p-0">{MY_SKILLS["data-management"].title}</h2>
					<p>{MY_SKILLS["data-management"].description}</p>
					<ul class="flex flex-wrap gap-4 md:mt-8">
						{MY_SKILLS["data-management"].skills.map((skill) => (
							<li class="bg-zinc-200 dark:bg-zinc-900 py-[2px] px-3 rounded-md text-lg">
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Services;
