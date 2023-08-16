import React from "react";
import moment from "moment";
import Link from "next/link";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white rounded-lg md:p-3 mb-4 pb-5">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        height="150px"
        className="w-full h-96 object-fill mb-4 shadow-gray-400 shadow-md md:rounded-lg"
      ></img>

      <div className="flex md:flex text-center items-center  mb-3">
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
      <div className="font-bold text-3xl text-center text-black">
        {post.title}
      </div>
      {post.content.raw.children.map((raw, key) => {
        if (raw.type == "paragraph") {
          return (
            <div className="text-lg  my-6" key={key}>
              {raw.children.map((text) => {
                if (text.type == "link") {
                  return (
                    <Link href={text.href} className="text-pink-600">
                      {text.children.map((t) => t.text)}
                    </Link>
                  );
                } else {
                  return text.text;
                }
              })}
            </div>
          );
        } else if (raw.type == "heading-one") {
          return (
            <div className="text-3xl  my-6 font-bold" key={key}>
              {raw.children[0].text}
            </div>
          );
        } else if (raw.type == "heading-two") {
          return (
            <div className="text-2xl  my-6 font-bold" key={key}>
              {raw.children[0].text}
            </div>
          );
        } else if (raw.type == "heading-three") {
          return (
            <div className="text-xl  my-6 font-bold" key={key}>
              {raw.children[0].text}
            </div>
          );
        } else if (raw.type == "heading-four") {
          return (
            <div className="text-lg  my-6 font-bold" key={key}>
              {raw.children[0].text}
            </div>
          );
        } else if (raw.type == "image") {
          return (
            <img
              className="w-full  object-fill my-10"
              src={raw.src}
              key={key}
              alt={raw.title}
            ></img>
          );
        }
      })}
    </div>
  );
};

export default PostDetail;
