import {
	JOB_CITY,
	JOB_NATION,
	MAIN_DESCRIPTION,
	MAIN_HEADING,
} from "../../consts";

const HeroSection = () => {
	return (
		<section class="grid items-end justify-center grid-cols-3 gap-8 my-10">
			<p class="text-md max-w-[400px] col-span-1 row-start-1">
				{MAIN_DESCRIPTION}
			</p>
			<h1 class="col-span-2 row-start-1 m-0 font-bold tracking-tighter dark:m-0 text-8xl">
				{MAIN_HEADING}
			</h1>
			<div class="flex flex-col justify-end items-start col-start-2 row-start-2 gap-0 mt-4 ml-1">
				<p class="m-0 p-0">Data Analyst.</p>
				<p class="font-semibold m-0 p-0">
					<span class="text-rose-600 mr-1">{JOB_CITY},</span>
					<span>{JOB_NATION}</span>
				</p>
			</div>
		</section>
	);
};

export default HeroSection;