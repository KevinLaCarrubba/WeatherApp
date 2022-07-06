import React from 'react'
import SearchInfoProvider from './context/SearchContext'

import Nav from './components/Nav'
import CurrentDay from './pages/CurrentDay'
import Footer from './components/Footer'

import './styles/global.scss'

const App = () => {
    return (
        <main>
            <SearchInfoProvider>
                <Nav />
                <div>
                    <CurrentDay />
                </div>
                <Footer />
            </SearchInfoProvider>
        </main>
    )
}

export default App
