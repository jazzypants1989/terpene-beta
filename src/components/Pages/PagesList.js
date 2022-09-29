import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PagesExcerpt from "./PagesExcerpt";

import {
  selectAllPages,
  getPageError,
  getPageStatus,
  fetchPages,
} from "./PagesSlice";

const PagesList = () => {
  const dispatch = useDispatch();

  const pages = useSelector(selectAllPages);
  const pageStatus = useSelector(getPageStatus);
  const pageError = useSelector(getPageError);

  useEffect(() => {
    if (pageStatus === "idle") {
      dispatch(fetchPages());
    }
  }, [pageStatus, dispatch]);

  let content;
  if (pageStatus === "loading") {
    content = <p className="loader">Loading...</p>;
  } else if (pageStatus === "succeeded") {
    const orderedPages = pages
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPages.map((page) => (
      <PagesExcerpt key={page.id} page={page} />
    ));
  } else if (pageStatus === "error") {
    content = <p>{pageError}</p>;
  }

  return (
    <section>
      <h2>Recent Articles</h2>
      {content}
    </section>
  );
};
export default PagesList;
