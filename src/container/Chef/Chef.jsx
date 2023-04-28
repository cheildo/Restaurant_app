import React from 'react';
import './Chef.css'
import { images } from '../../constant/index'
import { SubHeading } from '../../components';

const Chef = () => {
  return (
    <div className='app__chef section__padding'>
      <div className="app__chef-image">
        <img src={images.chef} alt="" />
      </div>
      <div className="app__chef-text">
        <SubHeading title="Chef’s Word" />
        <h1>What we believe in</h1>
        <p className= "p__opensans">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc..</p>
        <div className="app__chef-text-sign">
          <p className="app__chef-text-sign-name">Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
        </div>
        <img  className="signature_image" src={images.sign} alt="Signature" />
      </div>
    </div>
  )
}

export default Chef