// import React, { useState, useEffect } from 'react';
// import { Leaf } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import AuthModal from './AuthModal';

// const navItems = [
//   { label: 'Home', path: '/' },
//   { label: 'Rooms', path: '/#rooms' },
//   { label: 'Gallery', path: '/gallery' },
//   { label: 'Testimonials', path: '/#testimonials' },
//   { label: 'About Us', path: '/#about' },
//   { label: 'Contact Us', path: '/#contact' },
// ];

// export const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hoveredNav, setHoveredNav] = useState(null);
//   const [hoverCTA, setHoverCTA] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const styles = {
//     header: (scrolled) => ({
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 50,
//       padding: scrolled ? '1rem 0' : '1.5rem 0',
//       backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.10)',
//       backdropFilter: 'blur(10px)',
//       borderBottom: '1px solid rgba(0,0,0,0.08)',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
//       transition: 'all 0.3s',
//     }),
//     container: {
//       width: '90%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//     },
//     nav: {
//       display: 'flex',
//       gap: '2rem',
//       alignItems: 'center',
//     },
//     navItem: (isHovered) => ({
//       fontSize: '0.95rem',
//       fontWeight: '500',
//       color: '#1e293b',
//       textDecoration: 'none',
//       cursor: 'pointer',
//       padding: '0.4rem 0.9rem',
//       borderRadius: '50px',
//       backgroundColor: isHovered ? '#acd8aa' : 'transparent',
//       transition: 'all 0.3s',
//     }),
//   };

//   return (
//     <>
//       <header style={styles.header(isScrolled)}>
//         <div style={styles.container}>
//           <Link
//             to="/"
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '0.5rem',
//               textDecoration: 'none',
//             }}
//           >
//             <Leaf size={28} style={{ color: '#14532d' }} />
//             <span
//               style={{
//                 fontWeight: 'bold',
//                 fontSize: '1.6rem',
//                 color: '#14532d',
//               }}
//             >
//               The Jungle Story
//             </span>
//           </Link>

//           <nav style={styles.nav}>
//             {navItems.map((item, index) => (
//               <Link
//                 key={item.label}
//                 to={item.path}
//                 style={styles.navItem(hoveredNav === index)}
//                 onMouseEnter={() => setHoveredNav(index)}
//                 onMouseLeave={() => setHoveredNav(null)}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           <span
//             onClick={() => setShowModal(true)}
//             style={{
//               display: 'inline-flex',
//               padding: '0.625rem 1.5rem',
//               backgroundColor: hoverCTA ? '#14532d' : '#acd8aa', // default pastel, hover dark green
//               borderRadius: '9999px',
//               color: 'white', // always white
//               fontWeight: 600,
//               cursor: 'pointer',
//               transition: '0.3s',
//             }}
//             onMouseEnter={() => setHoverCTA(true)}
//             onMouseLeave={() => setHoverCTA(false)}
//           >
//             Book Now
//           </span>
//         </div>
//       </header>

//       <AuthModal open={showModal} onClose={() => setShowModal(false)} />
//     </>
//   );
// };



import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/#rooms' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/#testimonials' },
  { label: 'About Us', path: '/#about' },
  { label: 'Contact Us', path: '/#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoverCTA, setHoverCTA] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    header: (scrolled) => ({
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.10)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      transition: 'all 0.3s',
    }),
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    navItem: (isHovered) => ({
      fontSize: '0.95rem',
      fontWeight: '500',
      color: '#1e293b',
      textDecoration: 'none',
      cursor: 'pointer',
      padding: '0.4rem 0.9rem',
      borderRadius: '50px',
      backgroundColor: isHovered ? '#acd8aa' : 'transparent',
      transition: 'all 0.3s',
    }),
  };

  return (
    <>
      <header style={styles.header(isScrolled)}>
        <div style={styles.container}>
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
          >
            <Leaf size={28} style={{ color: '#14532d' }} />
            <span style={{ fontWeight: 'bold', fontSize: '1.6rem', color: '#14532d' }}>
              The Jungle Story
            </span>
          </Link>

          <nav style={styles.nav}>
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                style={styles.navItem(hoveredNav === index)}
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <span
            onClick={() => setShowModal(true)}
            style={{
              display: 'inline-flex',
              padding: '0.625rem 1.5rem',
              backgroundColor: hoverCTA ? '#14532d' : '#acd8aa',
              borderRadius: '9999px',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer',
              transition: '0.3s',
            }}
            onMouseEnter={() => setHoverCTA(true)}
            onMouseLeave={() => setHoverCTA(false)}
          >
            Book Now
          </span>
        </div>
      </header>

      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
