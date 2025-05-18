export const fetchCurrencyRates = async () => {
    try {
      const response = await fetch('https://api.monobank.ua/bank/currency');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      const filtered = data.filter(item =>
        item.currencyCodeB === 980 && (item.currencyCodeA === 840 || item.currencyCodeA === 978)
      );
  
      return filtered;
    } catch (error) {
      console.error('Failed to fetch currency rates:', error);
      throw error;
    }
  };
  