import DateFormatter from "./DateFormatter";

type Props = {
  content: string;
  title: string;
  date: string;
};

const Post = ({ title, date, content }: Props) => {
  return (
    <>
      <span className="row">
        <h1>{title}</h1>
        <DateFormatter dateString={date} />
      </span>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default Post;
