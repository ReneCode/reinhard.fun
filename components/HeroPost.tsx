import Link from "next/link";

import Avatar from "./Avatar";
import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const HeroPost = ({ title, date, slug }: Props) => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroPost;
