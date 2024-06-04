import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
      <>
      <main>
      <h3>Welcome to my website! I am Ho Ting Edmund Tsoi. You can call me Edmund and I&apos;m a software engineer.</h3>
      <section>
        <h2>Mission Statement</h2>
        <p>
          My goal is to use technology to build smart, efficient, and easy-to-use software solutions that help businesses succeed. 
          As a software engineer, I&apos;m always learning about the latest industry trends and best practices so that I can create high-quality, 
          reliable, and secure applications. I would like to work closely with my clients to understand their needs and turn their requirements into 
          user-friendly software that makes their jobs and lives easier. My aim is to provide exceptional service and exceed my clients&apos; 
          expectations by delivering innovative technology that empowers them to achieve their goals.
        </p>
      </section>
      <section>
        <h2>For more information:</h2>
        <p>Go to <span><Link to="/about">About Me Page</Link> and learn more about me!</span></p>
        <p><span><Link to="/contact">Contact Me!</Link></span></p>
      </section>
      </main>
      </>
    ); 
  }

