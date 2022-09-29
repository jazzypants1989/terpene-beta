import Page from "./Page/Page";
import useStyles from "./styles";

const Pages = () => {
  const classes = useStyles();
  return (
    <>
      <h1>RECENT ARTICLES</h1>
      <Page />
      <Page />
    </>
  );
};
export default Pages;
