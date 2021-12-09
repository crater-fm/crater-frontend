import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    Routes,
    Route,
    Outlet,
    BrowserRouter,
    NavLink,
    useNavigate,
    Link
} from "react-router-dom";
import LoginPage from './routes/LoginPage.js'
import ResultsList from './routes/ResultsList.js'
import AllArtists from './routes/AllArtists.js'
import ArtistPage from './routes/ArtistPage.js'
import DjPage from './routes/DjPage.js'
import Homepage from './routes/Homepage.js'
import NotFound from './routes/NotFound.js'
import Searchbar from './routes/Searchbar.js'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route exact path="artist" element={<AllArtists />} />
                <Route path="artist/:artistId" element={<ArtistPage />} />
                <Route path="dj/:djId" element={<DjPage />} />
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
            <div className='page-header'>
                <Link to="/" className='header-logo'>
                    <div>
                        <h1>Crater</h1>
                        <h4>Human-powered music discovery.</h4>
                    </div>
                </Link>
                <Searchbar searchValue={searchValue} onSearchValueChange={handleSearchValueChange} onSearchValueSubmit={handleSearchValueSubmit} />
                <nav>
                    <NavLink to="artist">Artists</NavLink>
                    <NavLink to="login">Login</NavLink>
                </nav>
            </div>
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
