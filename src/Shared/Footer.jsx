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
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book.
          </p>
      </div>

      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img src="/images/footer-map.jpg" alt="bh" style={{ width: 200, height: 100, marginBottom: 10 }} />
          <p style={{ margin: 0 }}><AiFillPhone /> Phone: (+44)333 333 33333</p>
          <p style={{ margin: 0 }}>Email: bhcompany@gmail.com</p>
          <p style={{ margin: 0 }}>Address: </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
