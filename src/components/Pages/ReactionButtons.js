import { useDispatch } from "react-redux";
import { reactionAdded } from "./PagesSlice";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GiNightSleep, GiHemp, GiCoffeeCup } from "react-icons/gi";

const REACTIONS = {
  upVotes: {
    icon: BiUpvote,
    text: "UpVotes",
  },
  downVotes: {
    icon: BiDownvote,
    text: "DownVotes",
  },
  likes: {
    icon: GiHemp,
    text: "Like",
  },
  coffee: {
    icon: GiCoffeeCup,
    text: "Coffee",
  },
  zen: {
    icon: GiNightSleep,
    text: "Zen",
  },
};

const ReactionButtons = ({ page }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(REACTIONS).map(
    ([name, { icon, text }]) => {
      const Icon = icon;
      return (
        <button
          key={name}
          type="button"
          className="reactionButton"
          onClick={() =>
            dispatch(reactionAdded({ pageId: page.id, reaction: name }))
          }
        >
          <Icon className="icon" /> {page.reactions[name]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
