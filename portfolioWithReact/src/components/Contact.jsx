import { Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import { profile } from "../data/portfolio";
export default function Contact() {
    return (
        <section id="contact" className="section contact">
            <SectionHeading
                eyebrow="GET IN TOUCH"
                title="Let's build something."
                text="Have a project or idea? Send a message and I’ll get back to you."
            />
            <div className="contact-grid">
                <div className="contact-info reveal">
                    <div>
                        <Mail />
                        <span>
                            <small>Email</small>
                            <a href={`mailto:${profile.email}`}>{profile.email}</a>
                        </span>
                    </div>
                    <div>
                        <Phone />
                        <span>
                            <small>Phone</small>
                            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                        </span>
                    </div>
                    <div>
                        <MapPin />
                        <span>
                            <small>Location</small>
                            <b>{profile.location}</b>
                        </span>
                    </div>
                    <SocialLinks />
                </div>
                <form
                    className="contact-form reveal"
                    action="https://formspree.io/f/xkodzlae"
                    method="POST"
                >
                    <div className="form-row">
                        <input name="name" placeholder="Your name" required />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <input name="phone" placeholder="Phone number" />
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Tell me about your project..."
                        required
                    ></textarea>
                    <button className="btn primary" type="submit">
                        Send Message <Send size={17} />
                    </button>
                </form>
            </div>
        </section>
    );
}
