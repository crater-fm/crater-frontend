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
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import theme from './theme.js'
import LoginPage from './routes/LoginPage.js'
import ResultsList from './routes/ResultsList.js'
import AllArtists from './routes/AllArtists.js'
import AllDjs from './routes/AllDjs.js'
import AllEpisodes from './routes/AllEpisodes.js'
import ArtistPage from './routes/ArtistPage.js'
import DjPage from './routes/DjPage.js'
import Homepage from './routes/Homepage.js'
import NotFound from './routes/NotFound.js'
import Header from './Header.js'
import CraterInfo from './routes/CraterInfo.js'
import ScrollToTop from './ScrollToTop.js'
import './index.css';

function App() {

    let [searchValue, setSearchValue] = useState();
    let navigate = useNavigate();

    function handleSearchValueChange(value) {
        setSearchValue(value);
    }

    function handleSearchValueSubmit(event) {
        event.preventDefault();
        if (searchValue) {
            navigate(`./search/${searchValue}`, { replace: true });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Homepage searchValue={searchValue} handleSearchValueChange={handleSearchValueChange} handleSearchValueSubmit={handleSearchValueSubmit} />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route exact path="artist" element={<AllArtists />} />
                        <Route path="artist/:artistId" element={<ArtistPage />} />
                        <Route exact path="dj" element={<AllDjs />} />
                        <Route path="dj/:djId" element={<DjPage />} />
                        <Route path="search/:searchValue" element={<ResultsList />} />
                        <Route exact path="episode" element={<AllEpisodes />} />
                        <Route exact path="info" element={<CraterInfo />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </CssBaseline>
        </ThemeProvider>
    );
}

function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Toolbar id="back-to-top-anchor" variant='dense' sx={{ minHeight: 0 }} />
            <Container>
                <Outlet />
            </Container>
            <ScrollToTop />
        </ThemeProvider>
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
