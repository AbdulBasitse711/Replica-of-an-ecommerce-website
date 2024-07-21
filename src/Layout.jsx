/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import FlagContextProvider from './contexts/FlagContextProvider'

function Layout() {
  return (
    <FlagContextProvider>
    <Header/>
    <Outlet/>
    <Footer/>
    </FlagContextProvider>
  )
}

export default Layout