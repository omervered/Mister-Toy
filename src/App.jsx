import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.css'


import { useState } from 'react'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'
import { ToyIndex } from './pages/ToyIndex'
import { ToyDetails } from './pages/ToyDetails'
import { ToyEdit } from './pages/ToyEdit'
import { store } from '../store/store'
import { UserMsg } from './cmps/UserMsg'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'


export function App() {
  return (


    <section className="main-layout app">
      <AppHeader />
      <main>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ToyIndex />} path="/toy" />
          <Route element={<ToyDetails />} path="/toy/:toyId" />
          <Route element={<ToyEdit />} path="/toy/edit" />
          <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
          <Route element={<Dashboard />} path='/dashboard' />
          <Route element={<About />} path='/about' />
        </Routes>
      </main>
      <UserMsg />
    </section>


  )
}
