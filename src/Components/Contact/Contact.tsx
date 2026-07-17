import message from "../../assets/chat-bubble.svg";


function Contact() {
    return (
        <button className="contact">
            <span className="border-layer">
                <span className="shine"></span>
            </span>

            <span className="content">
                <img src={message} alt="" />
                <span>Contact Us</span>
            </span>
        </button>
    );
}

export default Contact;