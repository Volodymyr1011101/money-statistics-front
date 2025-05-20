import s from '../TableCurrency/TableCurrency.module.css'

const TableCurrency = ({ headers = [], data = [] }) => {
    return (
      <div className={s.wrapper_table}>
        <table className={s.table}>
          <thead className={s.header_table}>
            <tr className={s.table_tr}>
              {headers.map((header, index) => (
                <th key={index} className={s.table_th}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className={s.table_body}>
          {data.map((row, index) => (
            <tr key={index} >
              <td className={s.table_td_currency}>
                {row.currencyCodeA === 840 ? 'USD' : 'EUR'}
              </td>
              <td className={s.table_td_rate}>
                {row.rateBuy ? row.rateBuy.toFixed(2) : '-'}
              </td>
              <td className={s.table_td_rate}>
                {row.rateSell ? row.rateSell.toFixed(2) : '-'}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  };
  
  export default TableCurrency;