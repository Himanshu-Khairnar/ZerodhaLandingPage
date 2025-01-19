import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top section */}
                <div className="flex flex-wrap justify-between items-center border-b border-gray-300 pb-6 mb-6">
                    <div className="flex items-center space-x-2">
                        <div className="text-blue-600 text-xl font-bold">ZERODHA</div>
                    </div>
                    <div className="text-gray-500 text-sm">
                        © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
                    </div>
                </div>

                {/* Links section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Products</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Referral programme</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Zerodha.tech</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Open source</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Press & media</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Zerodha Cares (CSR)</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Support portal</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Z-Connect blog</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">List of charges</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Downloads & resources</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Videos</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Market overview</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">How to file a complaint?</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Status of your complaints</a></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Account</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Open an account</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-blue-600">Fund transfer</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-whatsapp"></i></a>
                            <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-telegram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
