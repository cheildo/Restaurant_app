import React from 'react'
import {images} from '../../constant/index'


const SubHeading = ({title}) => {
  return (
    <div className='app__subheading'>
        <p className="p__cormorant">{title}</p>
        <img src={images.spoon} alt="spoon_image" className="spoon__img" />
    </div>
  )
}

export default SubHeading