module.exports = {
  theme: {
    sidebarWidth: 250,
    fontFamily: {
      base: '"Open Sans", "sans-serif", light',
    },
  },
  template: {
    favicon: 'https://beautifulinteractions.com/favicons/bi-favicon.ico',
  },
  styles: {
    Logo: {
      logo: { display: 'none' },
    },
    TableOfContents: {
      search: {
        padding: 0,
        margin: '20px',
      },
      input: {
        borderRadius: 0,
        backgroundColor: 'transparent',
        border: 0,
        paddingLeft: 0,
        outline: 0,
        color: 'white',
        borderBottom: '1px solid white',
        '&:focus': {
          borderColor: 'rgba(255, 255, 255, 0.25)',
          boxShadow: 'unset',
        },
        '&::placeholder': {
          color: 'rgba(255, 255, 255, 0.25)',
        },
      },
    },
    Heading: {
      heading: {
        color: '#3a7bd5',
      },
    },
    Para: {
      para: {
        color: '#332E2E',
      },
    },
    StyleGuide: {
      logo: {
        background: 'url(https://beautifulinteractions.com/img/logo-bi-white.svg) no-repeat left center',
        borderBottom: 'none',
        backgroundSize: 'contain',
        margin: '15px 20px',
        height: '50px',
      },
      sidebar: {
        border: 0,
        background: 'linear-gradient(#5f2c82,#ca4966)',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
      },
      content: {
        maxWidth: '960px',
      },
      root: {
        background: '#f5f8fd',
      },
    },
    Playground: {
      preview: {
        border: '2px solid rgba(0, 0, 0, .05)',
        background: 'white',
        borderRadius: '5px',
        boxShadow: '0 0px 10px 0 rgba(93, 100, 148, 0.05)',
      },
    },
  },
};
