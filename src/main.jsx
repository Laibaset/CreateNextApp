
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import "./i18n"; 
import App from './App'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
