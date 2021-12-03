import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    Routes,
    Route,
    Outlet,
    BrowserRouter,
    NavLink,
    useNavigate
} from "react-router-dom";
import './index.css';
import LoginPage from './routes/LoginPage.js'
import ResultsList from './routes/ResultsList.js'
import AllArtists from './routes/AllArtists.js'
import ArtistPage from './routes/ArtistPage.js'
import Homepage from './routes/Homepage.js'
import NotFound from './routes/NotFound.js'
import Searchbar from './routes/Searchbar.js'


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route exact path="artists" element={<AllArtists />} />
                <Route path="artists/:artistId" element={<ArtistPage />} />
                <Route path="search/:searchValue" element={<ResultsList />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

function Layout() {
    let [searchValue, setSearchValue] = useState('');
    let navigate = useNavigate();

    function handleSearchValueChange(value) {
        setSearchValue(value);
    }

    function handleSearchValueSubmit(event) {
        event.preventDefault();
        navigate(`./search/${searchValue}`, { replace: true });
    }

    return (
        <div>
            <h1 className='page-header'>Crater</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="artists">Artists</NavLink>
                <NavLink to="login">Login</NavLink>
                <Searchbar searchValue={searchValue} onSearchValueChange={handleSearchValueChange} onSearchValueSubmit={handleSearchValueSubmit} />
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
