import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import "./assets/css/style.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>,
)
