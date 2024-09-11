import QuoteList from "../components/quotes/QuoteList";

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
  return (
    <>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;
