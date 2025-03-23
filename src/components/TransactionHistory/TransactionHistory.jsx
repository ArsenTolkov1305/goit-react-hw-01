import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css["transaction-history"]}>
      <thead>
        <tr className={css.trka}>
          <th className={css.thka}>Type</th>
          <th className={css.thka}>Amount</th>
          <th className={css.thka}>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr className={css.trka}>
          <td className={css.tdka}>{items[0].type}</td>
          <td className={css.tdka}>{items[0].amount}</td>
          <td className={css.tdka}>{items[0].currency}</td>
        </tr>
        <tr className={css.trka}>
          <td className={css.tdka}>{items[1].type}</td>
          <td className={css.tdka}>{items[1].amount}</td>
          <td className={css.tdka}>{items[1].currency}</td>
        </tr>
        <tr className={css.trka}>
          <td className={css.tdka}>{items[2].type}</td>
          <td className={css.tdka}>{items[2].amount}</td>
          <td className={css.tdka}>{items[2].currency}</td>
        </tr>
        <tr className={css.trka}>
          <td className={css.tdka}>{items[3].type}</td>
          <td className={css.tdka}>{items[3].amount}</td>
          <td className={css.tdka}>{items[3].currency}</td>
        </tr>
        <tr className={css.trka}>
          <td className={css.tdka}>{items[4].type}</td>
          <td className={css.tdka}>{items[4].amount}</td>
          <td className={css.tdka}>{items[4].currency}</td>
        </tr>
        <tr className={css.trka}>
          <td className={css.tdka}>{items[5].type}</td>
          <td className={css.tdka}>{items[5].amount}</td>
          <td className={css.tdka}>{items[5].currency}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionHistory;
