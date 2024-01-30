import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'

const AuthContext = createContext()

import React from 'react'

function AuthContextProvider(props) {
    const [user, setUser] = useState({ id: 1 })

    useEffect(() => {
        const run = async () => {
            try {
                let token = localStorage.getItem('token')
                // console.log(token);
                if (!token) return
                const rs = await axios.get('http://localhost:8888/auth/me', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                console.log(rs.data);
                setUser(rs.data.user)
            } catch (err) {
                console.log(err);
            }
        }
        run()
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider }
export default AuthContext