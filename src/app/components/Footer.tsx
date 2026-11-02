import { Link, useLocation } from "react-router";
import { app, site, iosNote } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";

// Contact, Support and the legal pages skip the big download CTA above the footer.
const NO_CTA = ["/contact", "/feedback", "/support", "/privacy", "/terms"];

export default function Footer() {
  const { pathname } = useLocation();
  const cta = !NO_CTA.includes(pathname.replace(/\/$/, ""));
  return (
    <footer className="footer">
      {cta && (
        <Reveal className="cta">
          <img className="cta__icon" src={img("/images/app-icon.png")} alt="" width={154} height={154} loading="lazy" />
          <h2 className="cta__title">
            Pick up your phone.<br />Turn on the TV.
          </h2>
          <Btn href={app.url}>Download on the App Store</Btn>
          <p className="muted small">Free on the App Store{iosNote}</p>
        </Reveal>
      )}

      <div className="footer__bar">
        <div className="container footer__top">
          <div className="footer__brand">
            <b>{site.brand}</b>
            <p className="muted">Control your TCL TV from your iPhone.</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="footer__cols">
            <div>
              <span className="muted">Product</span>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app">App</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
              </ul>
            </div>
            <div>
              <span className="muted">Help</span>
              <ul>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container footer__copy">
          <span>© {site.year} {site.operator}. All rights reserved.</span>
          <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
        </div>
      </div>
    </footer>
  );
}
