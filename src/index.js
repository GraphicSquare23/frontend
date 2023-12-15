import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Services from './components/services';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import Projects from './components/projects';
import ServiceDetail from './components/serviceDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services/:detail" element={<ServiceDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
