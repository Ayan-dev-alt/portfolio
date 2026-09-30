import {
    FaGithub,
    FaInstagram,
    FaFacebookF,
    FaPinterestP,
} from "react-icons/fa6";
import { profile } from "../data/portfolio";

const links = [
    ["GitHub", profile.github, FaGithub, "#ffffff"],
    ["Instagram", profile.instagram, FaInstagram, "#ff4d9d"],
    ["Facebook", profile.facebook, FaFacebookF, "#1877f2"],
    ["Pinterest", profile.pinterest, FaPinterestP, "#e60023"],
];

export default function SocialLinks() {
    return (
        <div className="socials">
            {links.map(([label, url, Icon, hoverBorderColor]) => (
                <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="social-link"
                    style={{
                        "--hover-border": hoverBorderColor,
                    }}
                >
                    <Icon size={18} />
                </a>
            ))}
        </div>
    );
}
