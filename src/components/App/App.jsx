import css from "./App.module.css";
import Profile from '../Profile/Profile.jsx';
export default function App() {
    return (
        <div>
            <h3 className={css.alert}>Завдання 1</h3>
            <div><Profile /></div>
            <h3 className={css.alert}>Завдання 2</h3>
            <div></div>
            <h3 className={css.alert}>Завдання 3</h3>
            <div></div>
        </div>
    );

}