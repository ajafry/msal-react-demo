import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from './authConfig';

import App from './App';

// eslint-disable-next-line
const pca = new PublicClientApplication(msalConfig);

pca.addEventCallback(event => {
    if (event.eventType === EventType.LOGIN_SUCCESS) {
        console.log(`Successful login!!`);
        console.log(event);
        pca.setActiveAccount(event.payload.account);
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalInstance={pca} />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
