import { NavLink } from "react-router-dom";
import "../Shared/Header.css";
import Header from '../Shared/Header';

const ContactUs = () => {
    return (
        <div>
            <Header />

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                <div style={{ display: 'flex', flex: 1 }}>
                    <img src="/images/logo.png" alt="bh" style={{ width: 400, height: 400 }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flex: 1 }}>
                    <p>We are a well known estate agent specialized in helping worldwide students to find a personalised room in the Bournemouth city. 
                        Our main goal is to make our clients happy, relaxed and well settled to enjoy the best of their studies.
                    </p>
                </div>

                <div style={{ marginTop: 20, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h4>Phone: (+44) 01202 111222</h4>
                    <h4>Email: info@bhrooms.co.uk</h4>
                    <h4>Address: 19 Christchurch Rd, Bournemouth BH1 3LH</h4>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;