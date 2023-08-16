import React from "react";
import Link from "next/link";
import moment from "moment/moment";

const postCard = ({ post }) => {
  return (
    <div className=" bg-white  rounded-lg mb-5  pb-12">
      <div className=" overflow-hidden  relative">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className=" h-60 w-full object-cover"
        ></img>
        <div className=" absolute bottom-3 z-10 p-2 flex  rounded-lg bg-gray-200 left-4 ">
          {post.categories.map((e) => {
            return (
              <a href={`category/${e.slug}`} key={e.slug}>
                <div>{e.name} ,</div>
              </a>
            );
          })}
        </div>
      </div>
      <h1 className=" text-lgl md:text-xl font-bold mb-2 text-center text transition  duration-500 cursor-pointer hover:text-pink-600">
        <Link href={`/post/${post.slug}`} key={post.title}>
          {post.title}
        </Link>
      </h1>
      <div className="flex md:flex text-center items-center justify-center mb-2">
        <div className="flex items-center justify-center  mr-4">
          <img
            width="25px"
            height="25px"
            alt={post.author.name}
            src={post.author.photo.url}
            className="rounded-full"
          ></img>
          <p className=" text-gray-500 text-md pl-2"> {post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <p className=" text-center text-gray-600 text-lg md:px-6 px-2 mb-7">
        "{post.highlight}"
      </p>
      <div className=" text-center">
        <Link href={`/post/${post.slug}`}>
          <span className=" transition duration-500 bg-pink-600 rounded-xl text-gray-200 hover:-translate-y-2 inline-block font-medium text-lg px-3 py-2">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default postCard;
