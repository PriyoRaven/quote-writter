import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { DUMMY_QUOTES } from "./AllQuotes";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const dummyQuote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  const [displayedQuote, setDisplayedQuote] = useState(dummyQuote);

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  useEffect(() => {
    if (loadedQuote && loadedQuote.text) {
      setDisplayedQuote(loadedQuote);
    }
  }, [loadedQuote]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!displayedQuote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote
        text={displayedQuote.text}
        author={displayedQuote.author}
      />
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default QuoteDetail;
