// eslint-disable-next-line no-unused-vars
import styles from "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="page-bottom-holder">
      <div className="quote-holder">
        <div className="quote-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ut
          optio
        </div>
        <div className="company-logos">
          <span className="company-logo vogue">VOGUE</span>
          <span className="company-logo time">TIME</span>
          <span className="company-logo bof">BOF</span>
        </div>
      </div>
      <footer>
        <div className="footer-top">
          <div className="stores">
            <div className="stores-circle"></div>
            <div className="stores-text">
              <FontAwesomeIcon icon="map-marked-alt" />
              <span className="stores-text-top"> Stores</span>More here
            </div>
          </div>
          <div className="country">
            <FontAwesomeIcon icon="globe-americas" />
            country <span className="country-span"> United States </span>
          </div>
        </div>
        <div className="icon-reference-holder">
          <div className="icon-reference-text">ICONS USED IN NAV:</div>
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className="flaticon-site"
          >
            www.flaticon.com
          </a>
          <div className="icon-ref">
            <div className="ref-title">MENU:</div>
            <a
              href="https://www.freepik.com"
              title="Freepik"
              className="icon-listing"
            >
              Freepik | Menu free icon
            </a>
          </div>
          <div className="icon-ref">
            <div className="ref-title">SEARCH:</div>
            <a
              href="https://www.freepik.com"
              title="Freepik"
              className="icon-listing"
            >
              Freepik | Magnifiying Glass free icon
            </a>
          </div>
          <div className="icon-ref">
            <div className="ref-title">USER:</div>
            <a
              href="https://www.freepik.com"
              title="Freepik"
              className="icon-listing"
            >
              Freepik | User free icon
            </a>
          </div>
          <div className="icon-ref">
            <div className="ref-title">CART:</div>
            <a
              href="https://www.freepik.com"
              title="Freepik"
              className="icon-listing"
            >
              Freepik | Shopping Cart free icon
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-email">
            <p>
              <span>Lorem ipsum dolor</span>
              sit amet consectetur, adipisicing elit. Magni ut optio
            </p>
            <div className="emailBox">
              <span className="your-email">Your email_</span>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-col link-about">
              <span className="link-heading">ABOUT</span>
              <ul className="footer-list">
                <li>ABOUT US</li>
                <li>CAREERS</li>
                <li>COMPANY BLOG</li>
              </ul>
            </div>
            <div className="link-col link-help">
              <span className="link-heading">HELP</span>

              <ul className="footer-list">
                <li>CONTACT</li>
                <li>REDEEM GIFT CARD</li>
                <li>RETURNS & EXCHANGES</li>
                <li>HELP & FAQ</li>
              </ul>
            </div>
            <div className="link-col link-more">
              <span className="link-heading">MORE</span>
              <ul className="footer-list">
                <li>INTO THE GLOSS</li>
                <li>FREE STUFF</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-logo">G</div>
            <div className="footer-copyright">
              © 2021 Copyright. All rights reserved.
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="social-media">
              <div className="social-media-icon"></div>
              <div className="social-media-icon"></div>
              <div className="social-media-icon"></div>
              <div className="social-media-icon"></div>
              <div className="social-media-icon"></div>
              <div className="social-media-icon"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
