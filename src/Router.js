import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import _404 from './pages/_404'

const Router = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<_404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router