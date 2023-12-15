import { useState } from 'react';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';


function ContactUS() {
    const [contactData, setContactData] = useState({});
    const handlePostRequest = (event) => {
        event.preventDefault();
        // API endpoint URL
        const apiUrl = 'https://graphic-square-23.onrender.com/contact';
    
        // Fetch options
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        };
    
        // Make the POST request
        fetch(apiUrl, requestOptions)
          .then(response => response.json())
          .then(data => { 
            if(data.status===200){
                setContactData({});
                toast(data.message);
            }
            toast.error(data.error,{theme: "colored",})

            // Handle the response data
            console.log('POST request successful:', data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error making POST request:', error);
          });
      };

    const handleChange=(value,field)=>{
         const nContactData ={...contactData};
         nContactData[field] = value;
         setContactData(nContactData)
    }

    console.log({contactData})
  return (
    <div id="contact" className="form-1">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">Book a Meeting</h2>
                    <p className="p-heading">Vel malesuada sapien condimentum nec. Fusce interdum nec urna et finibus pulvinar tortor id</p>
                    <ul className="list-unstyled li-space-lg">
                        <li><i className="fas fa-map-marker-alt"></i> &nbsp;22 Praesentum, Pharetra Fin, CB 12345, KL</li>
                        <li><i className="fas fa-phone"></i> &nbsp;<a href="tel:00817202212">+81 720 2212</a></li>
                        <li><i className="fas fa-envelope"></i> &nbsp;<a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6">
            <img class="img-fluid" src="images/details-1.svg" alt="alternative"/>
            </div>
                <div className="col-lg-6">
                <ToastContainer />
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control-input" placeholder="Name" onChange={e=>handleChange(e.target.value,'name')} value={contactData.name ||""} required/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" placeholder="Email" required onChange={e=>handleChange(e.target.value,'email')} value={contactData.email || ""}/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control-input" placeholder="Mobile Number" required onChange={e=>handleChange(e.target.value,'phone')} value={contactData.phone || ""}/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control-input" placeholder="Whatapp Number" required onChange={e=>handleChange(e.target.value,'whatapp')} value={contactData.whatapp || ""}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control-input" placeholder="City" required onChange={e=>handleChange(e.target.value,'city')} value={contactData.whatapp || ""}/>
                        </div>
                        <div className="form-group" onChange={e=>handleChange(e.target.value,'project_type')} value={contactData.project_type || ""}>
                            <select className="form-control-select" required>
                                <option className="select-option" value="" disabled selected>Project type</option>
                                <option className="select-option" value="Company Website">Social Media Management</option>
                                <option className="select-option" value="Landing Page">SEO Services</option>
                                <option className="select-option" value="Online Shop">CMS SEO</option>
                                <option className="select-option" value="Company Website">PPC Services</option>
                                <option className="select-option" value="Landing Page">Web Design Services</option>
                                <option className="select-option" value="Online Shop">Graphic Design</option>
                                <option className="select-option" value="Online Shop">Photoshoot</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" placeholder="Message" required onChange={e=>handleChange(e.target.value,'message')} value={contactData.message ||""}></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button" onClick={(e)=>handlePostRequest(e)}>Submit</button>
                        </div>
                    </form>
            </div>
        </div>
    </div> 
    </div>
  );
}

export default ContactUS;
