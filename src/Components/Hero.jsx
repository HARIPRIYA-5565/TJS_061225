// import React, { useState, useEffect } from 'react';
// import { SectionId } from '../constants';

// export const Hero = () => {
//   const [active, setActive] = useState(0);

//   const heroImages = [
//     '/Images/imageThirtySixCrop.jpg',
//     '/Images/imageThirtySixSunset.jpg',
//     '/Images/imageTwentyOne.jpg',
//     '/Images/imageFourteen.jpg',
//     '/Images/imageThirtyThree.jpg',
//     '/Images/imageThree.jpg',
//     '/Images/imageFour.jpg',
//     '/Images/imageFive.jpg',
//     '/Images/imageSix.jpg',
//   ];

//   useEffect(() => {
//     const id = setInterval(() => {
//       setActive(prev => (prev + 1) % heroImages.length);
//     }, 3500);
//     return () => clearInterval(id);
//   }, [heroImages.length]);

//   const slideStyle = (position) => {
//     const base = {
//       position: 'absolute',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       borderRadius: '24px',
//       overflow: 'hidden',
//       boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
//       transition: 'all 0.6s ease',
//       cursor: 'pointer',
//     };
//     if (position === -1)
//       return { ...base, left: '5%', width: '26%', height: '58%', opacity: 0.7, transform: 'translateY(-50%) rotate(-3deg)' };
//     if (position === 1)
//       return { ...base, right: '5%', width: '26%', height: '58%', opacity: 0.7, transform: 'translateY(-50%) rotate(3deg)' };
//     return { ...base, left: '50%', width: '52%', height: '70%', transform: 'translate(-50%, -50%)', zIndex: 5, opacity: 1 };
//   };

//   const getIndex = (offset) =>
//     (active + offset + heroImages.length) % heroImages.length;

//   return (
//     <section id={SectionId.HOME} style={{ width: '100%', backgroundColor: '#f7f7f7', paddingBottom: '4rem' }}>
//       <div style={{ width: '100%', height: '520px', paddingTop: '80px', position: 'relative' }}>
//         <div style={slideStyle(-1)} onClick={() => setActive(getIndex(-1))}>
//           <img src={heroImages[getIndex(-1)]} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         </div>

//         <div style={slideStyle(0)}>
//           <img src={heroImages[active]} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         </div>

//         <div style={slideStyle(1)} onClick={() => setActive(getIndex(1))}>
//           <img src={heroImages[getIndex(1)]} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         </div>
//       </div>
//     </section>
//   );
// };



import React, { useState, useEffect } from 'react';
import { SectionId } from '../constants';

export const Hero = () => {
  const [active, setActive] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const heroImages = [
    '/Images/imageThirtySixCrop.jpg',
    '/Images/imageThirtySixSunset.jpg',
    '/Images/imageTwentyOne.jpg',
    '/Images/imageFourteen.jpg',
    '/Images/imageThirtyThree.jpg',
  ];

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % heroImages.length);
    }, 3500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [heroImages.length]);

  const slideStyle = (position) => {
    const base = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
      transition: 'all 0.6s ease',
      cursor: 'pointer',
    };
    if (position === -1)
      return {
        ...base,
        left: '5%',
        width: '26%',
        height: '58%',
        opacity: 0.7,
        transform: `translateY(-50%) rotate(-3deg) translateY(${offsetY * 0.2}px)`,
      };
    if (position === 1)
      return {
        ...base,
        right: '5%',
        width: '26%',
        height: '58%',
        opacity: 0.7,
        transform: `translateY(-50%) rotate(3deg) translateY(${offsetY * 0.2}px)`,
      };
    return {
      ...base,
      left: '50%',
      width: '52%',
      height: '70%',
      transform: `translate(-50%, -50%) translateY(${offsetY * 0.4}px)`,
      zIndex: 5,
      opacity: 1,
    };
  };

  const getIndex = (offset) =>
    (active + offset + heroImages.length) % heroImages.length;

  return (
    <section id={SectionId.HOME} style={{ width: '100%', backgroundColor: '#FFD9DC', paddingBottom: '4rem', position: 'relative', height: '520px',marginTop: '50px', boxShadow: '0px 20px 40px rgba(0,0,0, 0.2)',  }}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div style={slideStyle(-1)} onClick={() => setActive(getIndex(-1))}>
          <img src={heroImages[getIndex(-1)]} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={slideStyle(0)}>
          <img src={heroImages[active]} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={slideStyle(1)} onClick={() => setActive(getIndex(1))}>
          <img src={heroImages[getIndex(1)]} alt="Slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
};
