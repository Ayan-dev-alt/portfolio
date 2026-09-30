import { profile } from "../data/portfolio";
import SocialLinks from "./SocialLinks";
export default function Footer() {
    return (
        <footer>
            <div>
                <b>{profile.shortName}</b>
                <p>Frontend developer crafting modern web experiences.</p>
            </div>
            <SocialLinks />
            <small>© 2026 {profile.name}. All rights reserved.</small>
        </footer>
    );
}
