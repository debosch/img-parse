import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Gallery from '../gallery/Gallery';
import About from '../about/About';
import Start from '../start/Start';

import './header.scss';

const Header = () => {
    return (
        <Router>
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__link"><Link to="/">Gallery</Link></li>
                        <li className="header__link"><Link to="/about">About</Link></li>
                        <li className="header__link"><Link to="/start">Start</Link></li>
                    </ul>
                </nav>
            </header>

            <Switch>
                <Route path="/" exact component={ Gallery } />
                <Route path="/about" exact component={ About } />
                <Route path="/start" exact component={ Start }/>
            </Switch>
        </Router>
    );
};

export default Header;