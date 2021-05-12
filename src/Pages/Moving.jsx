import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import "./Moving.css"

const Moving = () => {
    return (

        <div>
            <Header />
            <div className="moving">
                <h3>What to bring</h3>
                <p>Our first piece of advice is not to overpack. Remember that the rooms in our halls of residence are for single occupancy and have limited storage space. Bring the essentials with you initially and see how much space you have left.</p>
                <p>If you are travelling from overseas, remember you can buy everything you need when you get here or pre-order the essentials from UniKitOut (see below for details). Just bring essentials such as a winter coat, warm clothes and a few items that will help you feel at home, such as photos to put on your noticeboard.</p>
                <p>If you are travelling within the UK and have space to pack more, you may want to bring the following:</p>

                <ul>
                    <li>Cutlery</li>
                    <li>Crockery</li>
                    <li>Pots and pans (some flats have induction hobs, we suggest that you bring suitable pans - if in doubt then check with your accommodation provider)</li>
                    <li>Cooking utensils (don’t forget a potato peeler!)</li>
                    <li>Tea towels</li>
                    <li>Bedding, Pillows and Bedlinen</li>
                    <li>Towels.</li>
                </ul>

                <p>We would also encourage you to think about bringing a bicycle with you to help with getting around. There is plenty of secure storage at the halls of residence and both campuses. If you do bring your bike then don't forget:</p>

                <ul>
                    <li>Helmet</li>
                    <li>D-Lock</li>
                    <li>Lights</li>
                </ul>
            </div>
            <Footer />
        </div>

    );
}

export default Moving;