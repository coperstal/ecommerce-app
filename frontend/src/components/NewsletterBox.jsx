import React from "react";

const NewsletterBox = () => {


    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }



  return (
    <div className=" text-center ">
      <p className="text-2xl font-medium text-gray-800 ">
        Subscribe now and het 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius,
        sed eum laudantium quasi ullam dolorem rerum dolores cum neque laborum
        dignissimos quisquam molestiae recusandae corrupti quibusdam adipisci
        fugiat delectus?
      </p>
      <form onClick={onSubmitHandler} className=" w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6  border pl-3 ">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          required
          placeholder="Enter your email"
        />
        <button type="submit" className="bg-black text-white text-sm px-10 py-4 "> Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterBox;
