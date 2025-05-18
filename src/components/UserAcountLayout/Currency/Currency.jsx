import React, { useEffect, useState } from 'react'
import Img from '../../../assets/currency_img.png'
import s from '../Currency/Currency.module.css'
import { fetchCurrencyRates } from '../../../helpers/fetchCurrencyRates';
import TableCurrency from '../TableCurrency/TableCurrency';

const Currency = () => {
  const headerTable = ['Currency', 'Purchase', 'Sale'];
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const getRates = async () => {
      try {
        const data = await fetchCurrencyRates();
        setRates(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getRates();
  }, []);

  
  return (
    <div className={s.wrapper_currency}>
      <TableCurrency headers={headerTable} data={rates} />
      <img className={s.currency_img} src={Img} />
    </div>
  )
}

export default Currency
