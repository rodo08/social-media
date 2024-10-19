import { Models } from "appwrite";
import Loader from "./Loader";
import GrindPostList from "./GrindPostList";

interface SearchedPosts {
  documents?: Models.Document[];
}

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts?: SearchedPosts;
};
const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;
  if (
    searchedPosts &&
    "documents" in searchedPosts &&
    searchedPosts.documents &&
    searchedPosts.documents.length > 0
  )
    return <GrindPostList posts={searchedPosts.documents} />;
};

export default SearchResults;
