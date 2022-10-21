import PropTypes from 'prop-types'

import { TransactionHistoryTable, Row } from 'components/04-TransactionsHistory/TransactionsHistory.styled'

export const TransactionsHistory = (props) => {
    const { items } = props
    return (
  <TransactionHistoryTable>
    <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
    </thead>

     <tbody>
      {items.map(item =>            
        <Row key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
       </Row>
      )}
    </tbody>
  </TransactionHistoryTable>
    )
}

TransactionsHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}