import React from "react";
import "../styles/SocialLinks.css";

export default function SocialLinks() {
  const socials = [
    { name: "GitHub", href: "https://github.com/yourusername", icon: "fa-brands fa-github" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: "fa-brands fa-linkedin" },
    { name: "CodePen", href: "https://codepen.io/yourusername", icon: "fa-brands fa-codepen" },
    { name: "Goodreads", href: "https://goodreads.com/user/show/yourid", icon: "fa-brands fa-goodreads" },
  ];

  return (
    <ul className="social-links" aria-label="Social media">
      {socials.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.name}
            title={social.name}
          >
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
      <div className="social-line"></div>
    </ul>
  );
}
