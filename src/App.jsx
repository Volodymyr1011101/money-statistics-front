import { useDispatch, useSelector } from 'react-redux';
import { tokenSelector } from '/src/redux/auth/selectors.js'; //! don't exist
import { refreshUserThunk } from '/src/redux/auth/operations.js'; //! don't exist
import { useEffect } from 'react';

function App() {
    const token = useSelector(tokenSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) dispatch(refreshUserThunk);
    });
    return <div className="App"></div>;
}

export default App;
