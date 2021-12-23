import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurants from './Restaurants';
import Home from './Home';
import NotFoundPage from './NotFoundPage';

/**
 * Main App component.
 *
 * @returns {React.ReactElement} Router.
 */
const App = (): React.ReactElement => (
    <div className='App'>
        <div className='App-header'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/restaurants/:categories' element={<Restaurants />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Router>
        </div>
    </div>
);
export default App;
