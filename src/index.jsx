import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import { IntlProvider } from "react-intl";
import reportWebVitals from './reportWebVitals';
import strings_en from "./assets/i18n/en.json";
import { MemoryRouter } from 'react-router';
import AppRoutes from './constants/routes.constant';
import { Provider } from 'react-redux';
import { store } from './store';

const strings = {
    'en': strings_en,
};

const locale = navigator.language.split(/[-_]/)[0];
const isBooted = window.sessionStorage.getItem('booted');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider
      locale={navigator.language}
      messages={strings[locale]}
    >
      <Provider store={store}>
        <MemoryRouter basename="/" initialEntries={[isBooted ? AppRoutes.WelcomeScreen : AppRoutes.BootScreen]}>
          <App />
        </MemoryRouter>
      </Provider>
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
