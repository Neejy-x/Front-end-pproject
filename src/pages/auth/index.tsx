import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import image1 from '../../assets/images/image 1.jpg';
import image2 from '../../assets/images/image 2.avif';
import image3 from '../../assets/images/image 3.jpg';
import image4 from '../../assets/images/image 4.jpg';
import image5 from '../../assets/images/image 5.jpeg';
import image6 from '../../assets/images/image 6.jpg';
import image7 from '../../assets/images/image 7.jpg';
import image8 from '../../assets/images/image 8.jpg';
import image9 from '../../assets/images/image 9.avif';
import image10 from '../../assets/images/image 10.jpg';
import image11 from '../../assets/images/image 12.jpg';
import image12 from '../../assets/images/image 13.jpg';
import image13 from '../../assets/images/image 14.png';
import image14 from '../../assets/images/image 15.jpg';
import image15 from '../../assets/images/image 16.webp';
import image16 from '../../assets/images/image 17.jpg';
import image17 from '../../assets/images/image 18.jpg';


const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
  image16, image17
];
  
export const Auth = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  const changeBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  };

  useEffect(() => {
    changeBackgroundImage(); // Set initial image
    const interval = setInterval(changeBackgroundImage, 10000); // Change image every 10 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);
  return (
    <div className="sign-in-container">
      <SignedOut>
        <div className="sign-in-left">
        <h1> Welcome to Your Own Personal Finance Tracker!</h1>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
        </div>
        <div className="sign-in-right" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> </div>
      </SignedOut>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
    </div>
  );
};
