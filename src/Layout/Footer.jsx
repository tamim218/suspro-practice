
import {
  FaCloud,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#101D3A] to-[#07518B] text-white px-6 md:px-12 pt-20 pb-5 mt-20">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">

          {/* Logo and Description */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold mb-3">
              <FaCloud className="text-white" />
              SassPro
            </h2>

            <p className="text-sm leading-6 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Dictumst aliquam amet,
              luctus quis gravida nulla netus ut platea.
            </p>

            <div className="flex gap-4 mt-5">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold mb-4">More Links</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li><a href="#" className="hover:text-white">Blog Details</a></li>
              <li><a href="#" className="hover:text-white">Service Details</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold mb-4">Contact Details</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>Amsterdam Netherlands</li>
              <li>+1 62 19 22 705</li>
              <li>7 Days - 8am - 10pm</li>
              <li>info@stdev.com</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-5 text-center text-sm font-semibold">
          © 2021 All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
