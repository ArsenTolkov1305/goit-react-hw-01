import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import PropTypes from "prop-types";
const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
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
