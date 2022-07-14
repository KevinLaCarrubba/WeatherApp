import React from 'react'
import SearchInfoProvider from './context/SearchContext'

import Nav from './components/Nav'
import Content from './pages/Content'
import Footer from './components/Footer'

import './styles/global.scss'

const App = () => {
    return (
        <main>
            <SearchInfoProvider>
                <Nav />
                <div>
                    <Content />
                </div>
                <Footer />
            </SearchInfoProvider>
        </main>
    )
}

export default App
