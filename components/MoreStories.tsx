import Link from "next/link";
import Avatar from "./Avatar";
import DateComponent from "./DateComponent";
import CoverImage from "./CoverImage";
import { BlogItem } from "@/contentful/types/types";

function PostPreview({ fields }: BlogItem) {
  const { slug, title, date, coverImage, author } = fields;
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          title={title}
          slug={slug}
          height={278}
          width={680}
          url={coverImage.fields.file.url}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date.toString()} />
      </div>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: BlogItem[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {morePosts.map((post, index) => (
          <PostPreview key={index} fields={post.fields} />
        ))}
      </div>
    </section>
  );
}
