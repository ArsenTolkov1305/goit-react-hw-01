import userData from '../../userData.json';
import css from './Profile.module.css';
export default function Profile() {
    return (
        <div className={css.marcup}>
            <div>
                <img
                    src={userData.avatar}
                    alt="User avatar"
                    width="120"
                    height="120"
                    className={css.image}
                />
                <p className={css.text}>{userData.username}</p>
                <p className={css.text}>{userData.tag}</p>
                <p className={css.text}>{userData.location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.listyle}>
                    <span className={css.text}>Followers</span>
                    <span className={css.text}>{userData.stats.followers}</span>
                </li>
                <li className={css.listyle}>
                    <span className={css.text}>Views</span>
                    <span className={css.text}>{userData.stats.views}</span>
                </li>
                <li className={css.listyle}>
                    <span className={css.text}>Likes</span>
                    <span className={css.text}>{userData.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}