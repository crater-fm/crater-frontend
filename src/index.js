import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    Routes,
    Route,
    Outlet,
    BrowserRouter,
    useNavigate,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js'
import LoginPage from './routes/LoginPage.js'
import ResultsList from './routes/ResultsList.js'
import AllArtists from './routes/AllArtists.js'
import AllDjs from './routes/AllDjs.js'
import ArtistPage from './routes/ArtistPage.js'
import DjPage from './routes/DjPage.js'
import Homepage from './routes/Homepage.js'
import NotFound from './routes/NotFound.js'
import Header from './Header.js'
import CraterInfo from './routes/CraterInfo.js'
import './index.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route exact path="artist" element={<AllArtists />} />
                    <Route path="artist/:artistId" element={<ArtistPage />} />
                    <Route exact path="dj" element={<AllDjs />} />
                    <Route path="dj/:djId" element={<DjPage />} />
                    <Route path="search/:searchValue" element={<ResultsList />} />
                    <Route exact path="info" element={<CraterInfo />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </ThemeProvider>
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
            <Header searchValue={searchValue} handleSearchValueChange={handleSearchValueChange} handleSearchValueSubmit={handleSearchValueSubmit}/>
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
