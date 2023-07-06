import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import store from './redux/store';
import './assets/css/index.css';
import './assets/css/normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderDomElements = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} serverConfig={state.server} checkAdmin={store.checkAdmin.bind(store)} setNewData={store.setNewData.bind(store)} generateLink={store.generateLink.bind(store)} deleteButton={store.deleteButton.bind(store)} setButtonsData={store.setButtonsData.bind(store)} setNewButton={store.setNewButton.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );

}


renderDomElements(store.getState())
store.subscribe(() => {
  let state = store.getState()
  renderDomElements(state)
})

