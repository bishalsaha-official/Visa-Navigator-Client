import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content py-10 w-full static bottom-0">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Website Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary">Visa Navigator</h2>
                        <p className="text-sm mt-2 text-gray-600">Helping you explore visa options, application processes, and requirements with ease.</p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Email: support@visanavigator.com</li>
                            <li>Phone: +880 1234 567 890</li>
                            <li>Location: Khulna, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex gap-4 text-2xl">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:support@visanavigator.com" className="hover:text-primary">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm text-gray-500 border-t pt-4">
                    &copy; {new Date().getFullYear()} VisaNavigator. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
