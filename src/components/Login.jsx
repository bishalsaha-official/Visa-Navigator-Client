import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
        console.log('login')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label" htmlFor="password">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <a href="#" className="label-text-alt link link-hover text-sm text-primary"> Forgot password?</a>

                    {/* Login Button */}
                    <div className="form-control mt-4">
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </div>
                </form>
                <p className="mt-5">Don't Have An Account? <Link to="/register" className="text-primary">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;