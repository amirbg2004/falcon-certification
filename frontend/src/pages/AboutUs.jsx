import React from "react";
import FalconImage from "../assets/about-us-falcon.png";


const AboutUs = () => {
	return (
		<div className="flex flex-col w-full items-center justify-center m-12 mx-auto gap-10">
			<div className="flex items-center w-1/2 min-w-[368px] relative">
				<img src={FalconImage} alt="Falcon About Us" className="w-full h-full" />
				<h1 className="about-us-heading absolute font-bold flex items-top justify-center inset-0 top-1 text-primary tracking-[0.5rem] text-5xl text-nowrap">
					Lorem ipsum dolor sit amet.
				</h1>
			</div>

			<div className="w-2/3 text-primary font-semibold text-sm lg:text-lg">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta fugiat eum blanditiis officiis facilis, repellendus, itaque maiores rerum, voluptates reiciendis totam! Nihil quam temporibus illum libero officia sint dolor aliquid voluptates eum, iure autem dolorem ab, distinctio eveniet consectetur commodi tempore! Modi sapiente vitae, debitis magnam exercitationem ducimus tempora ab iure, consequuntur maiores suscipit tenetur cupiditate quibusdam unde neque? Perferendis et quidem autem neque, sunt corrupti voluptatum tempore dolores, qui expedita ratione culpa debitis veniam tenetur eum delectus deleniti nobis quo magnam. Ipsum veniam culpa sapiente. Voluptate eos voluptatem consequuntur nostrum ducimus ut iusto! Possimus animi quae ipsa quas. In pariatur nobis natus, quos dolores soluta sequi numquam perferendis doloribus sunt mollitia modi voluptas quae officia dolor aut eum labore praesentium reprehenderit? Ipsam ex minus quas earum sint, sunt possimus autem, laudantium quidem reprehenderit iure assumenda, corrupti aut beatae natus culpa enim. Maxime quidem doloremque fugiat consectetur, itaque ab commodi culpa non reprehenderit quis blanditiis perferendis doloribus quos libero adipisci, cum, id molestias a nobis eum nostrum dignissimos facere corporis eaque! Aliquid, non iste commodi nemo, inventore minima nihil ad ipsum maxime distinctio error blanditiis laborum a quos veniam rerum placeat dolore mollitia doloribus eos, natus perspiciatis beatae. Harum, incidunt?
			</div>
		</div>
	);
}

export default AboutUs;