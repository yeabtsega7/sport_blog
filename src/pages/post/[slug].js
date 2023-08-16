import {
  Categories,
  PostWidget,
  PostDetail,
  Auther,
  CommentForm,
  Comments,
  Loader,
} from "@/Components";

import { useRouter } from "next/router";

import { AdjacentPosts } from "../../sections";
import React from "react";
import { getPostDetails, myPosts } from "../../Service";

const PostDetails = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto min-h-screen px-3">
      <div className="grid grid-cols-3 gap-9">
        <div className="lg:col-span-2 col-span-3">
          <PostDetail post={data} />
          <Auther author={data.author} />

          <AdjacentPosts slug={data.slug} createdAt={data.createdAt} />
          <CommentForm slug={data.slug} />
          <Comments slug={data.slug} />
        </div>
        <div className="lg:col-span-1 col-span-3 ">
          <div className="lg:sticky relative top-5">
            <PostWidget
              slug={data.slug}
              category={data.categories.map((catagory) => catagory.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const posts = await myPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
