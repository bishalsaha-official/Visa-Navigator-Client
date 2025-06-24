import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label" htmlFor="name">
                            <span className="label-text font-medium">Name</span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label" htmlFor="photoUrl">
                            <span className="label-text font-medium">Photo URL</span>
                        </label>
                        <input
                            id="photoUrl"
                            name="photoUrl"
                            type="text"
                            placeholder="Link to your photo"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
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
                            placeholder="Create a password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <div className="form-control mt-4">
                        <button type="submit" className="btn btn-primary w-full">Register</button>
                    </div>
                </form>
                <p className="mt-5">Already Have An Account? <Link to="/login" className="text-primary">Login</Link></p>
            </div>
        </section>
    );
};

export default Register;