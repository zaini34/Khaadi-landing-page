import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f9f9f9', padding: '40px 20px' }}>
      {/* Top Section - Need Help and Contact Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ddd', paddingBottom: '20px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>NEED HELP?</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: '20px', marginRight: '10px' }} />
          <span style={{ marginRight: '30px' }}>0800 74007</span>
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', marginRight: '10px' }} />
          <span>EMAIL US</span>
        </div>
      </div>

      {/* Middle Section - Footer Links */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {/* Help Section */}
        <div>
          <h4>HELP</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Track Your Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Customer Support Section */}
        <div>
          <h4>CUSTOMER SUPPORT</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Customer Service</li>
            <li>Store Locator</li>
            <li>Disclaimer</li>
            <li>Delivery</li>
            <li>Exchange</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* More Section */}
        <div>
          <h4>MORE FROM KHAADI</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4>OUR SOCIALS</h4>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faTiktok} style={{ fontSize: '24px' }} />
            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '24px' }} />
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '24px' }} />
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px' }} />
          </div>
          <div>
            <p>GET THE LATEST NEWS</p>
            <input type="email" placeholder="Email Address" style={{ padding: '10px', width: '200px', marginRight: '10px' }} />
            <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none' }}>CONFIRM</button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Payment and Security */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        <div>
          <p>100% Safe Checkout</p>
          <img src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw568e0aba/images/FooterImages/0.0-0.0-0.0-0.0-PK-2024-08-20-updated-1.svg" alt="Visa" style={{ height: '30px', marginRight: '10px' }} />
          <img src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif" alt="Mastercard" style={{ height: '30px' }} />
        </div>
        <div>
          <p>Secured by</p>
          <img src="https://seal.godaddy.com/images/3/en/siteseal_gd_3_h_l_m.gif" alt="GoDaddy Secured" style={{ height: '40px' }} />
        </div>
        <div>
          <img src="https://pk.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw6994d6b6/images/FooterImages/Khaadi-Logo.png" alt="Khaadi" style={{ height: '40px' }} />
          <p>&copy; 2024 Khaadi Corporation Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
