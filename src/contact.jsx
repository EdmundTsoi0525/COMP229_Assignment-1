import React from 'react';
import { useNavigate } from 'react-router-dom';

/* capture the information entered by the user and redirect them(user?) back to the Home Page */
export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    navigate('/'); // Redirect to home page
  };

  return (
    <>
    <main>
      <h2>My contact</h2>
      <span className="block">Phone number: (416) 899&ndash;1199</span>
      <span className="block">Email: <a href="mailto:htsoi@my.centennialcollege.ca">htsoi@my.centennialcollege.ca</a></span>

      <h2>Contact me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" className="block">Your first name: </label>
          <input id="firstName" name="firstName" type="text" required />
        </div>

        <div>
          <label htmlFor="lastName" className="block">Your last name: </label>
          <input id="lastName" name="lastName" type="text" required />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block">Your Phone Number: </label>
          <input id="phoneNumber" name="phoneNumber" type="tel" required />
        </div>

        <div>
          <label htmlFor="email" className="block">Your Email: </label>
          <input id="email" name="email" type="email" required />
        </div>

        <div>
          <label htmlFor="comments" className="block">Message: </label>
        </div>
        <textarea id="comments" name="comments" rows="5" placeholder="Please write any message you want to leave."></textarea>

        <div>
          <input type="submit" value="Submit"></input>
          <input type="reset" value="Reset"></input>
        </div>
      </form>
      </main>
    </>
  );
}
