import { Link } from 'react-router-dom';
import { isLoggedInSelector } from '/src/redux/auth/selectors.js'; //! don't exist

export default function RestrictedRoute({ children, redirectTo = '/' }) {
    const isLoggedIn = useSelector(isLoggedInSelector);

    return !isLoggedIn ? children : <Link to={redirectTo} />;
}
