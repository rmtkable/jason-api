import React, { Component } from 'react';
 
class Contact extends Component {
    render() {
        return (<div id='mainContact'>

<h1 style={{paddingTop: '5%'}}>Contact Us</h1>
<div class="border"></div>

<div class="contact-info col-lg-6 contactDetails" >
				<h3 style={{margin: '2%', paddingTop: '5%'}}>Contact Details</h3>
				<p style={{margin: '4%', fontSize: '20px'}}>We would love the oppertunity to work with you on designing and implenting your next website or web-based service. We offer a proven track record with the customer testimonials and the service awards that one should expect from a professional business partner.</p>
				<div class="contact-details">
					<div class="con-info clearfix">
						
						<span style={{fontSize: '17px'}}> 4901 Hunt Rd #200, Blue Ash, Ohio, USA</span>
					</div>

					<div class="con-info clearfix">
						<i class="tf-ion-ios-telephone-outline"></i>
						<span style={{fontSize: '17px'}}>Phone: (513) 881-2901</span>
					</div>

					<div class="con-info clearfix">
						<i class="tf-ion-iphone"></i>
						<span style={{fontSize: '17px'}}>Fax: 888-555-5556</span>
					</div>

					<div class="con-info clearfix">
						<i class="tf-ion-ios-email-outline"></i>
						<span style={{fontSize: '17px'}}>Email:info@kableacademy.com</span>
					</div>
				</div>
			</div>
<br /><br /><br />

<div class="contact-form col-lg-6 mt-4 mt-lg-0">
				<form id="contact-form" method="post" action="sendmail.php" role="form">

					<div class="form-group">
						<input type="text" placeholder="Your Name" class="form-control" name="name" id="name"/>
					</div>

					<div class="form-group">
						<input type="email" placeholder="Your Email" class="form-control" name="email" id="email"/>
					</div>

					<div class="form-group">
						<input type="text" placeholder="Subject" class="form-control" name="subject" id="subject"/>
					</div>

					<div class="form-group">
						<textarea rows="6" placeholder="Message" class="form-control" name="message" id="message"></textarea>
					</div>

					<div id="cf-submit">
						<input type="submit" id="contact-submit" class="btn btn-transparent" value="Submit"/>
					</div>

				</form>
			</div>

  
  <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
</div>
            );
    }
}
export default Contact;