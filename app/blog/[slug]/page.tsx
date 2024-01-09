"use client";

import CoverImage from "@/components/CoverImage";
import { getBlogEntry } from "../../../contentful/utils/get";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Avatar from "../../../components/Avatar";
import BlogNavBar from "@/components/BlogNavBar";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  // Fetch necessary data for the blog post using params.slug
  const { fields } = await getBlogEntry(slug);
  const { title, content, date, coverImage, author, tags } = fields;
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <BlogNavBar title={title} />
      <div className="w-full flex justify-center my-4">
        <div className="max-w-[500px] flex flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-blue-500 border-2 border-blue-700 dark:text-green-500 dark:border-green-700 rounded-lg w-fit p-2 m-2"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center flex-col p-6 ">
        <div className="max-w-[800px]">
          <div className="mb-5">
            <CoverImage
              title={title}
              width={700}
              height={300}
              slug={slug}
              url={coverImage.fields.file.url}
            />
          </div>
          <h1 className="font-extrabold text-3xl mb-2">{title}</h1>
          <div className="flex justify-start flex-col">
            <Avatar name={author.name} picture={author.picture} />
            <p className="mb-6 text-slate-400 ">
              Posted on{" "}
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="[&>p]:mb-8 [&>h2]:font-extrabold">
            {documentToReactComponents(content)}
          </div>
        </div>
      </div>
    </div>
  );
}
