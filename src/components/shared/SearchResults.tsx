import { Models } from "appwrite";
import Loader from "./Loader";
import GrindPostList from "./GrindPostList";
import { searchPosts } from "../../lib/appwrite/api";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};
const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;
  if (searchedPosts && searchedPosts.documents.length > 0)
    return <GrindPostList posts={searchedPosts.documents} />;

  return <p className="text-light-4 mt-10 text-center w-full"></p>;
};

export default SearchResults;
