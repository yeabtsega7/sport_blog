import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getCatagories, getCategoryPost, getCatagory } from "../../Service";
import { PostCard, Categories, Loader } from "../../Components";

const CategoryPost = ({ posts, slug }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCatagory(slug).then((value) => setCategories(value));
  }, [slug]);
  return (
    <div className="container mx-auto px-10 mb-8">
      {categories.image && (
        <div className="relative h-96 mb-6 ">
          <div
            className="z-0 absolute bg-center bg-no-repeat bg-cover w-full h-96"
            style={{ backgroundImage: `url('${categories.image.url}')` }}
          ></div>
          <div className=" absolute bg-gradient-to-t from-gray-600 to-black via-gray-900 w-full h-full opacity-60"></div>
          <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full font-bold text-4xl text-gray-300 uppercase">
            {categories.name}
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  const slug = params.slug;

  return {
    props: { posts, slug },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCatagories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
