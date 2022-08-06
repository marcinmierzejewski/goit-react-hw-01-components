import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const {transactionHistory, tableHead, row, title, data } = styles

  return (
    <table className={transactionHistory}>
      <thead className={tableHead}>
        <tr>
          <th className={title}>Type</th>
          <th className={title}>Amount</th>
          <th className={title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={row}>
            <td className={data}>{type}</td>
            <td className={data}>{amount}</td>
            <td className={data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
