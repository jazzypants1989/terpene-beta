import PageAuthor from "./PageAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PagesExcerpt = (page) => {
  return (
    <article key={page.id}>
      <h3>{page.title}</h3>
      <p>{page.description}</p>
      <p>{page.type}</p>
      <p className="postCredit">
        <PageAuthor userID={page.userID} />
      </p>
      <p className="postDate">
        <TimeAgo timestamp={page.date} />
      </p>
      <ReactionButtons page={page} />
      <p>
        Score:{" "}
        {page.reactions.upVotes -
          page.reactions.downVotes +
          page.reactions.likes * 10}
      </p>
    </article>
  );
};
export default PagesExcerpt;
