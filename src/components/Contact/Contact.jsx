import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../components/Contact/Contact.css';


function Contact() {

    return (
        <div id="contact-section">
            <h1 id="contact-us-title">CONTACT US</h1>

            <h4 id='contact-us-text'>
                Remember that We are always here for you!<br />
                If you have any questions, feedback,or you faced<br />
                any problem,let us know and we will do the best to help you.<br />
                You can contact us at our E-mail, Phone number or in the Social media.<br />
                Follow us on Facebook, Instagram, and Twitter for hike offers at
                affordable prices.<br/><br/>We can't wait to help you explore the world!</h4>

            <div id="details">

                <span className="one-detail-line"> <PhoneInTalkIcon />  +1-555-123-4567</span>
                <span className="one-detail-line"> <AlternateEmailIcon /> TravelBeast@gmail.com</span>
                <span className="one-detail-line"> <LocationOnIcon />  ISR</span>
            </div>

        </div>

    )

}



export default Contact


