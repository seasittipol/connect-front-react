import React from 'react'
import { Link } from 'react-router-dom'

const guestNav = [
    { to: '/login', text: 'Login' },
    { to: '/register', text: 'Register' }
]

export default function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><Link to='/login'>Login</Link></li>
                    <li><Link to='register'>Register</Link></li> */}
                    {guestNav.map(el => <li><Link to={el.to}>{el.text}</Link></li>)}
                </ul>
            </div>
        </div>
    )
}
