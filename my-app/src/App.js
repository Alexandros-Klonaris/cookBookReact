import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import Root from './components/Root';
import HomePage from './components/HomePage';
import PageOne from './components/pages/PageOne';
import PageTwo from './components/pages/PageTwo';
import PageThree from './components/pages/PageThree';

import { useEffect, useState } from "react";
import useContentful from "./components/useContentful";


import Nav from './components/Nav';
import Footer from './components/Footer';
import RowJumbotron from './components/RowJumbotron';

const router = createBrowserRouter( createRoutesFromElements (
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={ <Root/> }>
    <Route index element= {<HomePage />} />
 
  </Route>))

function App() {
  const [photos, setPhotos] = useState([]);
  const { getPhotos } = useContentful();

  console.log(photos)

  useEffect(() => {
    getPhotos().then((response) => response && setPhotos(response));
  });

  return (
    <div className="App">
       
    <RouterProvider router={ router }/>
    </div>
  );
}

export default App;
