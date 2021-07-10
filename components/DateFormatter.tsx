// import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const dt = new Date(Date.parse(dateString));
  const dateOut = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
  return <time dateTime={dateString}>{dateOut}</time>;

  // const date = parseISO(dateString);
  // return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
