import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'

const AuthContext = createContext()

import React from 'react'

function AuthContextProvider(props) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const run = async () => {
            try {
                setLoading(true)
                let token = localStorage.getItem('token')
                // console.log(token);
                if (!token) return
                const rs = await axios.get('http://localhost:8888/auth/me', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                // console.log(rs.data);
                setUser(rs.data.user)
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false)
            }
        }
        run()
    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider }
export default AuthContext