import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Currency from '../components/UserAcountLayout/Currency/Currency';


const CurrencyPage = () => {
    const navigate = useNavigate();
    const isTabletUp = useMediaQuery({ query: '(min-width: 768px)' });

    useEffect(() => {
        if (isTabletUp) {
        navigate('/', { replace: true });
        }
    }, [isTabletUp, navigate]);

    return <Currency />;
};

export default CurrencyPage;
