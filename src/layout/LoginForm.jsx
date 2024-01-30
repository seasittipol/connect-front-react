import { useState } from 'react'

function LoginForm() {
    const [input, setInput] = useState({
        code: '',
        password: '',
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
            const rs = await axios.post('http://localhost:8888/auth/login', input)
            console.log(rs);
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
                            <input type="text" placeholder="กรอกรหัสนักศึกษา" className="input input-bordered" required name='code' value={input.code} onChange={hdlChangeInput} />
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