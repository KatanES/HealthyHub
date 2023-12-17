
const size = {
    mobileS: '300px',
    tablet: '768px',
   desktop: '1024px',
  }

  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
  };