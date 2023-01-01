import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%]
         h-[100%] relative z-[5]' />
      </div>
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] 
      rounded-full white__gradient'></div>
      <div className='absolute z-[0] -bottom-1/2 top-0 w-[50%] h-[50%] 
      rounded-full pink__gradient'></div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your billing
          <br className='sm:block hidden' />& invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With our payment sponsors and partners, we
          allow seamless connection between your credit
          card and our services
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="appstore logo" className='w-[128px] h-[42px]
          object-contain mr-5 cursor-pointer' />
          <img src={google} alt="playstore logo" className='w-[128px] h-[42px]
          object-contain mr-5 cursor-pointer' />
        </div>
      </div>
    </section>)
}

export default Billing