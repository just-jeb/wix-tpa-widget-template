import React from 'react';
import "@wix/dashboard-sdk";
import { createRoot } from 'react-dom/client';
import './globals.st.css';
import { Widget } from './widget';

createRoot(document.body.appendChild(document.createElement('div'))).render(
    <React.StrictMode>
        <Widget />
    </React.StrictMode>
);
