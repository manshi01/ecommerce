import React from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css'; // Import CSS module

function Carousel() {
  return (
    <div className='container '>
    <div className={styles.carouselContainer}>
      <Image 
        src="/assets/jeans.png"
        layout="fill" 
        objectFit="cover" 
        alt="image"
      />
    </div>
    </div>
  );
}

export default Carousel;
