import css from "./App.module.css";
import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendList/FriendList.jsx";
import friends from "../../friend.json";
export default function App() {
  return (
    <div>
      <h3 className={css.alert}>Завдання 1</h3>
      <div>
        <Profile />
      </div>
      <h3 className={css.alert}>Завдання 2</h3>
      <div>
        <FriendList friends={friends} />
      </div>
      <h3 className={css.alert}>Завдання 3</h3>
      <div></div>
    </div>
  );
}
