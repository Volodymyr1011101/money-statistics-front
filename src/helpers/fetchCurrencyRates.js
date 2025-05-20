export const fetchCurrencyRates = async () => {

  const rates = localStorage.getItem('currencyRates');

  if (rates) {
    const parsed = JSON.parse(rates);
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (now - parsed.timestamp < oneHour) {
      return parsed.data;
    }
  }

    try {
      const response = await fetch('https://api.monobank.ua/bank/currency');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();

      const filtered = data.filter(item =>
        item.currencyCodeB === 980 && (item.currencyCodeA === 840 || item.currencyCodeA === 978)
      );
  
      const payload = {
        data: filtered,
        timestamp: Date.now()
      };
  
      localStorage.setItem('currencyRates', JSON.stringify(payload));
      
      return filtered;
    } catch (error) {
      console.error('Failed to fetch currency rates:', error);
      throw error;
    }
  };
  