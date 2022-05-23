/**
 Copyright (c) 2022-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { getScheduledSiteConfig } from './__configuration__/themes';
import '@brightlayer-ui/react-themes/open-sans';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/600.css';
import '@fontsource/roboto-mono/700.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MDXProvider } from '@mdx-js/react';
import { MainRouter } from './app/router';
import { Reducer } from './app/redux/reducers';
import ReactGA from 'react-ga';
import { gaID } from './ga.js';
if (gaID) {
    ReactGA.initialize(gaID);
}
import { componentsMap } from './__configuration__/markdown/markdownMapping';
import 'placeholder-loading/src/scss/placeholder-loading.scss';

const store = createStore(Reducer());

ReactDOM.render(
    <MuiThemeProvider theme={createTheme(getScheduledSiteConfig().theme)}>
        <CssBaseline />
        <Provider store={store}>
            <MDXProvider components={componentsMap}>
                <MainRouter />
            </MDXProvider>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
