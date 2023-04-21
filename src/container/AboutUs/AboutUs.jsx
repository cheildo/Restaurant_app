import React from 'react'
import './AboutUs.css'
import { images } from '../../constant/index'

const AboutText= ({title, text}) => {
  return (
    <div className='app__aboutus-info'>
      <h1 className='headtext__cormorant'>{title}</h1>
      <img src={images.spoon} alt="spoon" />
      <p className='p__opensans' style={{ margin: '2rem 0' }}>{text}</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
  )
}

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg section__padding'>
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>
      <div className="app__aboutus-content flex__center">
        <AboutText title="About Us" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et." />
        <div className='app__aboutus_img flex__center'>
          <img src={images.knife} alt="Knife" />
        </div>
        <AboutText title="Our History" text="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet." />
      </div>
    </div>
  )
}

export default AboutUs