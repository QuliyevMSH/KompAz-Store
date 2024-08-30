import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import ReadMore from '../Components/ReadMore/ReadMore'
import Login from '../Pages/Login/Login'
import Profile from '../Pages/Profile/Profile'
import Register from '../Pages/Register/Register'
import Haqqimizda from '../Components/Haqqimizda/Haqqimizda'
import Basket from '../Pages/Basket/Basket'
import KlaviaturaCatagory from '../Catagory/KlaviaturaCatagory'
import MonitorCatagory from '../Catagory/MonitorCatagory'
import KresloCatagory from '../Catagory/KresloCatagory'
import MouseCatagory from '../Catagory/MouseCatagory'
import NotbukCatagory from '../Catagory/NotbukCatagory'
import OyunPCCatagory from '../Catagory/OyunPCCatagory'
import QulaqliqCatagory from '../Catagory/QulaqliqCatagory'
import YaddasKartiCatagory from '../Catagory/YaddasKartiCatagory'
import DashBoard from '../Pages/DashBoard/DashBoard'
import Payment from '../Pages/Basket/Payment'
import ContactUsCompliment from './ContantUs/ContactUsCompliment'
import Commentar from '../Comment/Commentar'
import Comment from '../Comment/Comment'
import Wishlist from '../Pages/Wishlist/Wishlist'
import AdminHome from '../Pages/Register/Adminhome'
import CardWish from '../Pages/Wishlist/CardWish'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:note_id" element={<ReadMore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/odenis" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/haqqimizda" element={<Haqqimizda/>} />
        <Route path="/sebet" element={<Basket/>} />
        <Route path="/klaviaturalar" element={<KlaviaturaCatagory/>} />
        <Route path="/kreslolar" element={<KresloCatagory/>} />
        <Route path="/monitorlar" element={<MonitorCatagory/>} />
        <Route path="/mouse" element={<MouseCatagory/>} />
        <Route path="/notbuklar" element={<NotbukCatagory/>} />
        <Route path="/oyunpc-ve-kasasi" element={<OyunPCCatagory/>} />
        <Route path="/qulaqliqlar" element={<QulaqliqCatagory/>} />
        <Route path="/sd-kartlar" element={<YaddasKartiCatagory/>} />
        <Route path='/contact' element={<ContactUsCompliment />} />
        <Route path='/commentler' element={<Commentar />} />
        <Route path='/comment-yaz' element={<Comment />} />
        <Route path='/favoriler' element={<Wishlist />} />
        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/wishpost' element={<CardWish />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
