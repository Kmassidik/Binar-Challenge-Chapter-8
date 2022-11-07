import React from 'react'

function Navbar(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ps-5">
                    <li className="nav-item ps-3">
                    <a className="nav-link active" aria-current="page" href="/create">{props.create}</a>
                    </li>
                    <li className="nav-item ps-3">
                    <a className="nav-link active" aria-current="page" href="/edit">{props.edit}</a>
                    </li>
                    <li className="nav-item ps-3">
                    <a className="nav-link active" aria-current="page" href="/find">{props.find}</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar