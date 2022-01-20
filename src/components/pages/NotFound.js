import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Home from './Home';

function NotFound() {
    return (
        <>
            <div className='notFound'>
                <h1>404</h1>
                <p>Verkar som något gick fel</p>
                <Link
                    to={Home}
                    target='_blank'
                    aria-label='Hem'>
                    Till startsidan
                </Link>
            </div>
        </>
    );
}

export default NotFound;
