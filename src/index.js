import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ВСЕ ЧТО ВЫШЕ БЫЛО В ДЗ !!!!!!!!!!!!!
// import { App } from 'components/App';
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const element = React.createElement('div', { a: 555 });
// console.log(element);

// запись старого образца
// ReactDOM.render(element, document.querySelector('#root'));

// запись нового образца
// ReactDOM.createRoot(element, document.querySelector('#root')).render();
