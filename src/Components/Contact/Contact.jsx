import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] =React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9d975a40-903e-4f63-8de3-c61bc3e3750b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully , Your query is send to mail adhikarisooraj105@gmail.com");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below.your feedbacks, questions and suggestions are important to us as we strive to provide exceptionalservice to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />adhikari@gmail.com </li>
                <li><img src={phone_icon} alt="" />+91 123-456-7890 </li>
                <li><img src={location_icon} alt="" />77 Town road Pune <br /> Maharashtra, India</li>
            </ul>
        </div>
        <div className="contact-col">
 <form onSubmit={onSubmit}>
    <label >Your Name</label>
    <input type="text" name='name' placeholder='Enter your Name' required />

    <label >Phone Number</label>
    <input type="text" name='tel' placeholder='Enter your Mobile Number' required />

    <label >Write Your massage here</label>
    <textarea name="msg" id="" rows='4' placeholder='Enter Your message'></textarea>
    <button type='submit' className='btn dark'>Submit now <img src={white_arrow} alt="" /></button>
 </form>
 <span>{result}</span>
 </div>
    </div>
  )
}

export default Contact
