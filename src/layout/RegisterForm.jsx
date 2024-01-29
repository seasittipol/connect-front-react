import { useState } from 'react'
import axios from 'axios';

function RegisterForm() {
    const [input, setInput] = useState({
        s_code: '',
        firstname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const hdlChangeInput = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        // prv = previous values
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlSubmit = async (e) => {
        try {
            e.preventDefault()
            const rs = await axios.post('http://localhost:8888/auth/register', input)
            console.log(rs);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Register new student</h1>
                    <p className="py-6"></p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={hdlSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Student Code</span>
                            </label>
                            <input type="text" placeholder="กรอกรหัสนักศึกษา" className="input input-bordered" required name='s_code' value={input.s_code} onChange={hdlChangeInput} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="กรอกชื่อ" className="input input-bordered" required name='firstname' value={input.firstname} onChange={hdlChangeInput} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">E-mail</span>
                            </label>
                            <input type="text" placeholder="กรอกอีเมลล์" className="input input-bordered" required name='email' value={input.email} onChange={hdlChangeInput} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="กรอกพาสเวิด" className="input input-bordered" required name='password' value={input.password} onChange={hdlChangeInput} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="กรอกยืนยันพาสเวิด" className="input input-bordered" required name='confirmPassword' value={input.confirmPassword} onChange={hdlChangeInput} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm