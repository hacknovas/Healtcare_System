import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <>
            <header className="top-header">
                <nav className="navbar header-nav navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src="images/sslogo.png" alt="image"></img></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd"
                            aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                            <ul className="navbar-nav">
                                <li><Link className="nav-link active" to="/">Home</Link></li>
                                <li><Link className="nav-link" to="/checker">WeTalk</Link></li>
                                <li><Link className="nav-link" to="/appointment">Appointment</Link></li>
                                <li><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

