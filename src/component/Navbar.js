import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const obj = [
        {
            id: 1,
            name: "Home",
            route: "/"
        }, {
            id: 2,
            name: "param",
            route: "/single/${id}"
        }, {
            id: 3,
            name: "Pricing",
            route: "/Part3"
        }
        ,{
            id: 4,
            name: "Contact US",
            route: "/Part"
        }
    ]
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {obj.map((item, index) =>
                         <li className="nav-item" key={index}>
                            <NavLink className="nav-link active" aria-current="page" to={item.route}> {item.name} </NavLink>
                        </li>)}

                    </ul>
                </div>
            </div>
        </nav>

    )
}