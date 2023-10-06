

import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/Toursdetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchResultlist from './../pages/SearchResultsList';


const routers = () => {
  return (
    <Routes>
      <Route path= '/' element={<Navigate to='/Home' />} />
      <Route path = '/home'  element ={<Home/>}/>
      <Route path = '/tours'  element ={<Tours/>}/>
      <Route path = '/tours/:id'  element ={<TourDetails/>}/>
      <Route path = '/login'  element ={<Login/>}/>
      <Route path = '/register'  element ={<Register/>}/>
      <Route path = '/tours/search'  element ={<SearchResultlist/>}/>
    </Routes>
  );
};

export default routers
