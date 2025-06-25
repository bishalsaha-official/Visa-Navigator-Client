import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name= form.name.value
        const photoUrl= form.photoUrl.value
        const email= form.email.value
        const password= form.password.value
        const newFormData = {name, photoUrl, email, password}
        if(password.length < 6){
            setErrorMessage("Password Must Contains Atleast 6 Character")
            return
        }
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;
        if(!passwordPattern.test(password)){
            return setErrorMessage("Password must contain at least one uppercase, one lowercase, and one symbol.")
        }

        // Create account here
        createUser(email, password)
        .then((result) => {
            console.log(result)
            form.reset()
            Navigate('/')
        })
        .catch(error => {
            setErrorMessage(error.message)
        })
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
                <p className="my-5">Already Have An Account? <Link to="/login" className="text-primary">Login</Link></p>
                <p className="text-red-600">
                    {
                        errorMessage ?? {errorMessage}
                    }
                </p>
            </div>
        </section>
    );
};

export default Register;