import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App.js'
import ArtistPage from './new-arch/routes/ArtistPage.js'
import DjPage from './routes/DjPage.js'
import SearchResults from './routes/DjPage.js'






const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="artist" element={<ArtistPage />} />
          <Route path=":artistId" element={<ArtistPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
