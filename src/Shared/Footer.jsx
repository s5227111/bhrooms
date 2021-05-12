// Styles
import "./Footer.css"

// Images
import { AiFillPhone } from 'react-icons/ai';

/**
 * Component that renders the Footer.
 */
function Footer() {
  return (
    <footer className="footer" >
      <div style={{ width: '50%', display: 'flex', alignItems: 'center' }}>
        <p>We are a well known estate agent specialized in helping worldwide students to find a personalised room in the Bournemouth city. 
          Our main goal is to make our clients happy, relaxed and well settled to enjoy the best of their studies.
        </p>
      </div>

      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img src="/images/footer-map.jpg" alt="bh" style={{ width: 200, height: 100, marginBottom: 10 }} />
          <p style={{ margin: 0 }}><AiFillPhone /> Phone: (+44)01202 111222</p>
          <p style={{ margin: 0 }}>Email: info@bhrooms.co.uk</p>
          <p style={{ margin: 0 }}>Address: 19 Christchurch Rd, Bournemouth BH1 3LH </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
