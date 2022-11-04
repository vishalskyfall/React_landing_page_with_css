import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className="gpt3__header_content">
        <h1 className='gradient__text'>Building this website to revise designing and React JS</h1>
        <p>just basic copied text for description nothing mcuh just ignore</p>
        <div className="gpt3__header-content__input">
          <input type="email"  placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people who're using this" />
          <p>just basic copied text for description nothing mcuh just ignore</p>
        </div>
        
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="AI image" />
        </div>
    </div>
  )
}

export default Header