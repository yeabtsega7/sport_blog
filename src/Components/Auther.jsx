import React from "react";

const Auther = ({ author }) => {
  return (
    <div className=" bg-opacity-20 bg-gray-500 p-8 pt-9 rounded-lg mt-16 mb-6">
      <div className="flex relative flex-col items-center justify-center  mr-4">
        <img
          alt={author.name}
          src={author.photo.url}
          className="h-20 w-20 rounded-full absolute -top-20 "
        ></img>
        <p className=" text-white font-semibold text-lg text-md ">
          {author.name}
        </p>
      </div>
      <p className="text-center text-white ">{author.bio}</p>
    </div>
  );
};

export default Auther;
