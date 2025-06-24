import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 px-4 text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">Oops! The page you are looking for does not exist or has been moved.</p>
            <Link to="/" className="btn btn-primary">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;