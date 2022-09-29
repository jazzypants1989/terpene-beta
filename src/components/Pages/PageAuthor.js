import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/usersSlice";

const PageAuthor = (userID) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userID);

  return <span>by {author ? author.username : "Unknown author"}</span>;
};

export default PageAuthor;
