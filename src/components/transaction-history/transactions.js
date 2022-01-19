import PropTypes from 'prop-types';
import {
  Transaction,
  TransactionHead,
  TransactionBody,
  TransactionLine,
} from './transactions.styled';

export default function TransactionHistory({ items }) {
  return (
    <Transaction>
      <thead>
        <tr>
          <TransactionHead>Type</TransactionHead>
          <TransactionHead>Amount</TransactionHead>
          <TransactionHead>Currency</TransactionHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionLine key={id}>
            <TransactionBody>{type}</TransactionBody>
            <TransactionBody>{amount}</TransactionBody>
            <TransactionBody>{currency}</TransactionBody>
          </TransactionLine>
        ))}
      </tbody>
    </Transaction>
  );
}
TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
