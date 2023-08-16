import Image from "next/image";
import { Inter } from "next/font/google";
import { list } from "postcss";
import { Categories, PostCard, PostWidget } from "../Components";
import { myPosts } from "@/Service";
import { FeaturedPosts } from "../sections/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <div className="container mx-auto min-h-screen px-3">
      <FeaturedPosts />
      <div className="grid grid-cols-3 gap-9">
        <div className="lg:col-span-2 grid gap-3 items-start grid-cols-2 col-span-3">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.slug} />
          ))}
        </div>
        <div className="lg:col-span-1 col-span-3 ">
          <div className="lg:sticky relative top-5">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await myPosts()) || [];

  return {
    props: { posts },
  };
}
