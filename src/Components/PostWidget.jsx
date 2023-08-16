import { getRecentPost, getSimilarPosts } from "@/Service";
import moment from "moment/moment";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const PostWidget = ({ slug, category }) => {
  const [relatedPostes, setRelatedPostes] = useState([]);
  useEffect(() => {
    if (typeof sulg != "Undefined" && slug != null) {
      console.log("slug");
      getSimilarPosts(slug, category).then((result) =>
        setRelatedPostes(result)
      );
    } else {
      console.log("no slug " + slug);
      getRecentPost().then((result) => setRelatedPostes(result));
    }
  }, [slug]);
  return (
    <div className=" p-5 bg-white rounded-lg mb-5 ">
      <div className="pb-3 border-b font-semibold border-gray-500">
        Recent Post
      </div>
      {relatedPostes.map((post) => (
        <div className="grid grid-cols-5 py-2">
          <div className="gr overflow-hidden w-12 h-12">
            <img
              alt={post.title.name}
              src={post.featuredImage.url}
              className="h-full rounded-full object-fill"
            ></img>
          </div>
          <div className=" col-span-4">
            <p className="text-gray-400">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <h1>
              <Link href={`/post/${post.slug}`} key={post.title}>
                <span>{post.title}</span>
              </Link>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
