import { Link } from 'react-router-dom';
import { isLoggedInSelector } from '/src/redux/auth/selectors.js'; //! don't exist

export default function PrivateRoute({ children, redirectTo = '/login' }) {
    const isLoggedIn = useSelector(isLoggedInSelector);

    return isLoggedIn ? children : <Link to={redirectTo} />;
}
