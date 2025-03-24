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
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.trka}>
            <td className={css.tdka}>{type}</td>
            <td className={css.tdka}>{amount}</td>
            <td className={css.tdka}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
