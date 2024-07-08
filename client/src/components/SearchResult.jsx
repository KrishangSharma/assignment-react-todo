import PropTypes from "prop-types";
import Todo from "./Todo";

const SearchResult = ({ result }) => {
  console.log(result);
  return (
    <div className="w-full py-5 flex flex-col gap-4">
      {result.length > 0 ? (
        <>
          <h2 className="text-3xl font-semibold">Search Results:</h2>
          <span
            onClick={() => location.reload()}
            className="cursor-pointer text-lg"
          >
            Clear Search
          </span>
        </>
      ) : null}
      {result.map((item) => (
        <Todo key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default SearchResult;

SearchResult.propTypes = {
  result: PropTypes.array.isRequired,
};
