import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={AboutMe} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/resume" component={Resume} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}