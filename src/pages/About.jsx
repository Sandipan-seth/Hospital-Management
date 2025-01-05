import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-4 items-center">
        <h1 className="text-gray-900 text-4xl font-medium">About Us</h1>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <img className=" w-1/4 h-1/2" src={assets.about_image} alt="" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque
            commodi voluptate? Sit voluptatum possimus asperiores ipsum fuga
            soluta alias id incidunt dolore cumque quo aut magni eveniet tempore
            suscipit adipisci reprehenderit iure error at tenetur quos delectus
            dignissimos, harum praesentium! Beatae consectetur error vitae
            ipsam, iure dolorum corporis, nesciunt ullam eius omnis obcaecati
            harum aut eum cumque voluptatibus dolorem rem reiciendis iusto
            eligendi sunt doloremque fugit? Maiores quas repellat rem
            repudiandae alias necessitatibus ad aut. Minus aspernatur nostrum
            incidunt quos omnis vel quas, culpa officiis totam. Totam quos sunt,
            voluptas temporibus dolore dolores a nesciunt. Voluptatibus tempore
            sint nostrum distinctio. Accusamus laudantium inventore ipsa illo
            doloremque et sapiente nisi, delectus pariatur ullam, nam distinctio
            impedit vel ex quia vero officia libero quibusdam repellat laborum
            aliquid. Quam cupiditate facilis, cum eos, beatae dolorum cumque
            nulla culpa dolorem et blanditiis omnis sint perferendis explicabo
            tempore ex, ipsa ea corporis! Aliquid consequuntur voluptatum quasi
            tenetur amet libero molestiae suscipit, natus minima praesentium
            sunt quia vel beatae magnam modi atque exercitationem ab corporis
            repellat adipisci sit ad odit? Modi itaque, sequi eum explicabo
            sapiente vero eaque. Rerum sit reiciendis magni veritatis suscipit
            enim ab incidunt consequatur facere voluptates quidem dignissimos,
            fugiat eius dicta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
