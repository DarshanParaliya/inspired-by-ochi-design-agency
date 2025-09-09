import React from 'react';
import 'remixicon/fonts/remixicon.css';

const socialLinks = [
  { icon: <i className="ri-instagram-line text-4xl"></i>, label: "Instagram", url: "https://instagram.com" },
  { icon: <i className="ri-facebook-line text-4xl"></i>, label: "Facebook", url: "https://facebook.com" },
  { icon: <i className="ri-linkedin-line text-4xl"></i>, label: "LinkedIn", url: "https://linkedin.com" },
  { icon: <i className="ri-twitter-line text-4xl"></i>, label: "Twitter", url: "https://twitter.com" },
];

function Contact() {
  return (
    <div className="relative h-screen w-full bg-white flex items-center justify-center">
      <div className="flex gap-12">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-32 h-32 bg-black rounded-full flex items-center justify-center overflow-hidden group cursor-pointer"
          >
            {/* Icon */}
            <span className="absolute inset-0 flex items-center justify-center text-white text-4xl transition-transform duration-500 group-hover:-translate-y-full">
              {link.icon}
            </span>

            {/* Text Label */}
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl transition-transform duration-500 group-hover:translate-y-0 translate-y-full">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;


