import { useSelector } from "react-redux";
import { selectAllPages } from "./PagesSlice";

const PagesList = () => {
  const pages = useSelector(selectAllPages);
  console.log(pages);
  const renderedPages = pages.map((page) => (
    <article key={page.id}>
      <h3>{page.title}</h3>
      <p>{page.description}</p>
      <p>{page.type}</p>
    </article>
  ));

  return (
    <section>
      <h2>Recent Articles</h2>
      {renderedPages}
    </section>
  );
};
export default PagesList;
