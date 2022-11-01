import React from 'react';

import Image from 'next/image';

import DicodingLogo from '../../assets/image/Footer Logo.png';
import InstagramLogo from '../../assets/image/bx_bxl-instagram-alt.png';
import YoutubeLogo from '../../assets/image/bx_bxl-youtube.png';
import TwittterLogo from '../../assets/image/bx_bxl-twitter.png';
import FacebookLogo from '../../assets/image/bx_bxl-facebook.png';

import './style.scss';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer--container">
        <div className="footer--container_main">
          <Image src={DicodingLogo} alt="Footer Logo" priority />
          <p>
            Dicoding Space
            <br />
            Jl. Batik Kumeli No.50, Sukaluyu,
            <br />
            Kec. Cibeunying Kaler, Kota Bandung Jawa
            <br />
            Barat 40123
          </p>
        </div>

        <div className="footer--container_footer">
          <h2>Decode ideas Discover Potential</h2>

          <div className="social-media--container">
            <Image src={InstagramLogo} alt="Instagram Logo" priority />
            <Image src={YoutubeLogo} alt="Youtube Logo" priority />
            <Image src={TwittterLogo} alt="Twitter Logo" priority />
            <Image src={FacebookLogo} alt="Facebook Logo" priority />
          </div>

          <div className="other--container">
            <h3>&copy; Dicoding Indonesia 2022</h3>
            <div className="term-and-privacy--container">
              <h3>Term</h3>
              <span></span>
              <h3>Privacy</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
