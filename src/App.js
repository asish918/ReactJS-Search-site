import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Route, Routes as Rts, Navigate } from "react-router-dom";
import { Results } from "./components/Results";

const App = () => {
    const [darkTheme, setDarkTheme] = useState('false');

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <div className="p-4">
                    <Rts>
                        <Route path="/" element={<Navigate replace to='/search' />} />
                        <Route path="/search" element={<Results />} />
                        <Route path="/images" element={<Results />} />
                        <Route path="/videos" element={<Results />} />
                        <Route path="/news" element={<Results />} />
                    </Rts>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;