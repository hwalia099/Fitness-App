import React from 'react';
import ReactDOM from 'react-dom';
import { LanguageProvider } from './LanguageContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
<BrowserRouter>
<I18nextProvider i18n={i18n}>
<LanguageProvider>
<App/>
</LanguageProvider>
</I18nextProvider>

</BrowserRouter>
    
);