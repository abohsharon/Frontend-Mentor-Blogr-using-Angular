/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'Mobile': '375px',
      // => @media (min-width: 365px) { ... }

      'Desktop': '1000px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'header-pattern': "url('/assets/bg-pattern-intro-mobile.svg')",
        'body-pattern': "url('/assets/bg-pattern-circles.svg')"
      },
      colors: {
          'custom-red': 'hsl(356, 100%, 66%)',
        // Light red (CTA text)

          'light-red': 'hsl(355, 100%, 74%)',
        // Very light red (CTA hover background)

          'dark-blue': 'hsl(208, 49%, 24%)',
        // Very dark blue (headings)
        
          'White': 'hsl(0, 0%, 100%)',

          'footer-text-blue': 'hsl(240, 2%, 79%)',
          // grayish-blue (footer text)

          'dark-grayish-blue': 'hsl(207, 13%, 34%)',
          // Very dark grayish blue (body copy)

          'footer-blue': 'hsl(240, 10%, 16%)',
          // Very dark black blue (footer background)

          'custom-dropdown':  '#f1f1f1',
          // Background gradient - Intro/CTA mobile nav:
          'nav-light-red': 'hsl(13, 100%, 72%)',
          //  Very light red

          'nav-red': 'hsl(353, 100%, 62%)',
          // Light red

          // Background gradient - body:
          'body-blue': 'hsl(237, 17%, 21%)',
          // Very dark gray blue

          'desaturated-blue': 'hsl(237, 23%, 32%)'
          // Very dark desaturated blue
      }
    },
  },
  plugins: [],
}