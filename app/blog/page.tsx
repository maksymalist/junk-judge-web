import Link from "next/link";
import { BlogQueryResult } from "../../contentful/types/types";
import { getBlogEntries } from "../../contentful/utils/get";
import MoreStories from "@/components/MoreStories";
import BlogNavBar from "@/components/BlogNavBar";

export default async function Home() {
  const { items } = await getBlogEntries();

  return (
    <>
      <BlogNavBar title="" />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MoreStories morePosts={items} />
      </main>
    </>
  );
}
