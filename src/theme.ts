const GlobalTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Montserrat", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    text: '#454f5b',
    background: '#EEE',
    w3Teal: '#335E67',
    w3MoreTeal: '#509DAC',
    w3NavHighlightTeal: '#243843',

    w3gray: '#1B2731',

    // tealHighlight: '#66E0D9',
    w3lightTeal: '#598188',
    // darkTeal: '#335E67',

    green: '#60c093',
    darkGreen: '#12191E',
    grayGreen: '#1B262C',
    activeGreen: '#243843',

    gray: '#1c272d',

    babyBlue: 'rgba(202,217,243, .3)',
    babyBlueDark: 'rgba(202,217,243)',
    softBlue: '#B2D2D9',

    navy: '#13212C',

    orange: '#E67100',

    greenGradient: 'linear-gradient(0deg, #529DAD 1.85%, #60C092 97.11%)',
    hazeGradient: 'linear-gradient(180deg, #FFFFFF 0%, #E1ECEA 100%)',

    offWhite: '#E9E9E9',
    modes: {
      dark: {
        text: '#3e4155',
        background: '#000639',
        primary: '#9c6ade',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#e6e6e6',
      },
    },
  },
  forms: {
    border: '2px solid',
    bg: 'transparent',
    select: {
      cursor: 'pointer',
      dark: {
        border: '2px solid',
        color: 'white',
        borderColor: 'babyBlue',    
      }
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'w3Teal',
      boxShadow: '0px 15px 30px rgba(20, 102, 204, 0.16)',
      borderRadius: '8px',
      p: 3,
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '14px',
      textAlign: 'center',
      letterSpacing: '-0.6px',
      textTransform: 'uppercase',
      '&:hover': {
        bg: 'w3MoreTeal',
      },
    },
    secondary: {
      color: 'white',
      border: '2px solid black',
      borderColor: 'babyBlue',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '14px',
      textAlign: 'center',
      letterSpacing: '-0.6px',
      textTransform: 'uppercase',
      bg: 'transparent',
      '&:hover': {
        bg: 'rgba(255,255,255,.1)',
      },
    },
    tertiary: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '14px',
      textAlign: 'center',
      letterSpacing: '-0.6px',
      textTransform: 'uppercase',
      bg: 'transparent',
    },
    callout: {
      color: 'white',
      background: 'linear-gradient(0deg, #529DAD 1.85%, #60C092 97.11%)',
      fontFamily: 'Montserrat',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '14px',
      letterSpacing: '-0.6000000238418579px',
      textTransform: 'uppercase',
      py: '20px',
      px: '60px',
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      border: '1px solid black',
      padding: '.75rem',
      borderRadius: '4px',
      marginTop: 0,
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
      m: 0,
      
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default GlobalTheme
