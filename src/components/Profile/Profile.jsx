import css from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.marcup}>
      <div>
        <img
          src={avatar}
          alt="User avatar"
          width="120"
          height="120"
          className={css.image}
        />
        <p className={css.textbl}>{username}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listyle}>
          <span className={css.textbl}>Followers</span>
          <span className={css.text}>{stats.followers}</span>
        </li>
        <li className={css.listyle}>
          <span className={css.textbl}>Views</span>
          <span className={css.text}>{stats.views}</span>
        </li>
        <li className={css.listyle}>
          <span className={css.textbl}>Likes</span>
          <span className={css.text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
