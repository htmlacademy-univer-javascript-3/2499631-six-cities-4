import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Settings} from './consts';
import { offers } from './mocks/offers';
import { reviews } from './mocks/rewiews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardsNumber = {Settings.cardsNumber} offers = {offers} reviews={reviews}/>
  </React.StrictMode>
);
