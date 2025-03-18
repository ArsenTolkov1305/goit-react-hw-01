import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={css.ulListFr}>
      {friends.map((friend) => (
        <li key={friend.id} className="oneOfFriends">
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};





export default FriendList;
