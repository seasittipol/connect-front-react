import { useState } from 'react'
import axios from 'axios';
import useAuth from '../hooks/useAuth';

function LoginForm() {
    const [input, setInput] = useState({
        code: '',
        password: '',
    })
    const { setUser } = useAuth()

    const hdlChangeInput = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        // prv = previous values
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlSubmit = async (e) => {
        try {
            e.preventDefault()
            let codeFor = (input.code.toLowerCase().startsWith('t')) ? 't_code' : 's_code'
            const output = {
                [codeFor]: input.code,
                password: input.password
            }
            const rs = await axios.post('http://localhost:8888/auth/login', output)
            // if (rs.status === 200) {make your solve}
            console.log(rs.data);
            localStorage.setItem('token', rs.data.token)
            const rs1 = await axios.get('http://localhost:8888/auth/me', {
                headers: { Authorization: `Bearer ${rs.data.token}` }
            })
            setUser(rs1.data.user)
            // console.log(rs1.data.user);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login</h1>
                    <p className="py-6"></p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={hdlSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Teacher or Student Code</span>
                            </label>
                            <input type="text" placeholder="กรอกรหัสนักศึกษา" className="input input-bordered" required name='code' value={input.code} onChange={hdlChangeInput} pattern='^[st]\d{3}$' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="กรอกพาสเวิด" className="input input-bordered" required name='password' value={input.password} onChange={hdlChangeInput} />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm