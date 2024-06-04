import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
      <>
      <main>
        <h2>My Services</h2>
        <p>Welcome to my Services page! As a dedicated programmer and developer, I offer a variety of services to meet your technological needs. 
            Here's a brief overview of what I can do for you:
        </p>
        <section>
            <div className="wrapper">
                <img src="images/Service 1 - Web Development.jpg" alt="" width="400" height="225" className="row-image"></img>
                <div className="description">
                    <h3>Web Development</h3>
                    <ul>
                        <li><strong>Custom Website Design</strong></li>
                        <li><strong>Content Management Systems (CMS)</strong></li>
                        <li><strong>Website Maintenance</strong></li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <div className="wrapper">
                <img src="images/Service 2 - Mobile App Development.png" alt="" width="400" height="225" className="row-image"></img>
                <div className="description">
                    <h3>Mobile App Development</h3>
                    <ul>
                        <li><strong>Native App Development</strong></li>
                        <li><strong>UI/UX Design</strong></li>
                        <li><strong>App Maintenance and Support</strong></li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <div className="wrapper">
                <img src="images/Service 3 - General Programming.jpg" alt="" width="400" height="225" className="row-image"></img>
                <div className="description">
                    <h3>General Programming</h3>
                    <ul>
                        <li><strong>Custom Software Development</strong></li>
                        <li><strong>API Integration</strong></li>
                        <li><strong>Database Management</strong></li>
                    </ul>
                </div>
            </div>
        </section>
        <p>
            For more information or to discuss your project requirements, please <Link to="/contact">contact me</Link>. 
            I'm here to help you achieve your technology goals!
        </p>
      </main>
      </>
    );
  }

