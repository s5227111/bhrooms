import { NavLink } from "react-router-dom";
import "../Shared/Header.css";

const ContactUs = () => {
    return (
        <>
            <header className="header" >
                <div className="column1"><NavLink exact to="/">BH ROOMS</NavLink></div>
                <div className="column2">
                    <ul>
                        <li><a href="/">Moving to Bournemouth</a></li>
                        <li><NavLink exact to="/contact-us">Contact us</NavLink></li>
                    </ul>
                </div>
            </header>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                <div style={{ display: 'flex', flex: 1 }}>
                    <img src="/images/logo.png" alt="bh" style={{ width: 400, height: 400 }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', flex: 1 }}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                        has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div style={{ marginTop: 20, display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h4>Phone: (+44)333 333 33333</h4>
                    <h4>Email: bhcompany@gmail.com</h4>
                    <h4>Address: </h4>
                </div>
            </div>
        </>
    );
}

export default ContactUs;