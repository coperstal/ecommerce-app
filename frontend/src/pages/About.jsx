import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-60">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            facilis? Quibusdam recusandae iusto animi ratione, corrupti esse
            excepturi doloremque dolorum iste deleniti ducimus quae facere
            beatae nobis maxime voluptate voluptatibus!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            consequatur repellendus provident omnis deserunt a praesentium,
            ipsa, inventore ut dolores animi dicta quo quam nesciunt dolorem
            illum, doloribus veritatis magnam!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            nobis quas numquam ullam dolorem mollitia consequuntur aliquam,
            veniam culpa aperiam non minima id omnis officia dicta? Dolore alias
            soluta ea.
          </p>
        </div>
      </div>

      <div className="text-xl py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <p> Quality Assurance:</p>
          <p className="text-gray-600">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            exercitationem, aliquam sit adipisci repellendus nemo dolorum
            architecto optio, aperiam magni iusto culpa sint earum obcaecati.
            Sunt consequatur fuga nemo officiis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <p> Convenience:</p>
          <p className="text-gray-600">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            exercitationem, aliquam sit adipisci repellendus nemo dolorum
            architecto optio, aperiam magni iusto culpa sint earum obcaecati.
            Sunt consequatur fuga nemo officiis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <p> Exceptional Customer Service:</p>
          <p className="text-gray-600">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            exercitationem, aliquam sit adipisci repellendus nemo dolorum
            architecto optio, aperiam magni iusto culpa sint earum obcaecati.
            Sunt consequatur fuga nemo officiis?
          </p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
