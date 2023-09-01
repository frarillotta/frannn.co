const size = {
    start: '0px',
    mobile: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1332px',
    desktop: '2560px'
}
export const device = {
    start: `(min-width: ${size.start})`,
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL:  `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};

export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
