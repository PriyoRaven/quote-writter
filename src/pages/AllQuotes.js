import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

export const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "G-Man, Half Life 2",
    text: "The right man in the wrong place can make all the difference in the world.",
  },
  {
    id: "q2",
    author: "Javik, Mass Effect 3",
    text: "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.",
  },
  {
    id: "q3",
    author: "GLaDOS, Portal 2",
    text: "The best solution to a problem is usually the easiest one.",
  },
  {
    id: "q4",
    author: "Gordon FreeMan, Half Life",
    text: "...",
  },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  const allQuotes = loadedQuotes
    ? [...DUMMY_QUOTES, ...loadedQuotes]
    : DUMMY_QUOTES;

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return (
      <p className="centered focused">
        <NoQuotesFound />
      </p>
    );
  }

  return (
    <>
      <h1>All Quotes</h1>
      <QuoteList quotes={allQuotes} />
    </>
  );
};

export default AllQuotes;
