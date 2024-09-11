import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { DUMMY_QUOTES } from "./AllQuotes";

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Comments />
    </>
  );
};

export default QuoteDetail;
