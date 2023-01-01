import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal
        <br className='sm:block hidden' />
        in a few steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With just completing simple steps you can get the card
        you always desired all hassle-free and on your palms with little
        effort.
      </p>
      <Button styles="mt-10 rounded-[10px]" text="Get started" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CardDeal