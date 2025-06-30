import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 text-foreground">AFSIC</div>
            <p className="text-default-600 mb-4">
              Africa Sports Investment Conference 2025. Sustainable Development Through Sports Financing.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-xl text-default-500 hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-xl text-default-500 hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Icon icon="lucide:linkedin" className="text-xl text-default-500 hover:text-foreground" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-xl text-default-500 hover:text-foreground" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-default-600 hover:text-foreground">Home</Link></li>
              <li><Link href="#about" className="text-default-600 hover:text-foreground">About</Link></li>
              <li><Link href="#objectives" className="text-default-600 hover:text-foreground">Objectives</Link></li>
              <li><Link href="#topics" className="text-default-600 hover:text-foreground">Topics</Link></li>
              <li><Link href="#speakers" className="text-default-600 hover:text-foreground">Speakers</Link></li>
              <li><Link href="#pricing" className="text-default-600 hover:text-foreground">Packages</Link></li>
              <li><Link href="#register" className="text-default-600 hover:text-foreground">Register</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Icon icon="lucide:map-pin" className="text-default-500 mr-2 mt-1" />
                <span className="text-default-600">Sandton Convention Centre, Johannesburg, South Africa</span>
              </li>
              <li className="flex items-center">
                <Icon icon="lucide:mail" className="text-default-500 mr-2" />
                <span className="text-default-600">info@afsic2025.com</span>
              </li>
              <li className="flex items-center">
                <Icon icon="lucide:phone" className="text-default-500 mr-2" />
                <span className="text-default-600">+27 10 123 4567</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Subscribe</h3>
            <p className="text-default-600 mb-4">Subscribe to our newsletter for updates on the conference.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-default-100 text-foreground px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md">
                <Icon icon="lucide:send" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-default-200 mt-8 pt-8 text-center text-default-600">
          <p>&copy; 2025 Africa Sports Investment Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
