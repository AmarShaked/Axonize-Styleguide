const path = require('path');
const { version } = require('./package.json');

const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (Array.isArray(value)
  ? value.map(v => `${basis * v}${unit}`).join(' ')
  : `${basis * value}${unit}`);

const colors = {
  light: '#fff',
  dark: '#000',
  grey: '#7a898f',
  lightGrey: '#aec0c6',
  paleGrey: '#ebf1f3',
  primary: '#42399b',
  secondary: '#ad29b6',
  tertiary: '#203a44',
  danger: '#d9534f',
};

const theme = {
  color: {
    baseBackground: colors.light,
    border: colors.paleGrey,
    codeBackground: colors.paleGrey,
    error: colors.danger,
    light: colors.grey,
    lightest: colors.lightGrey,
    name: colors.primary,
    type: colors.secondary,
    base: colors.dark,
    link: colors.primary,
    linkHover: colors.tertiary,
    sidebarBackground: colors.primary,
  },
  fontFamily: {
    base: '"Open Sans", sans-serif',
    monospace: 'Consolas, "Liberation Mono", Menlo, monospace',
  },
  fontSize: {
    base: 15,
    text: 16,
    small: 13,
    h1: 38,
    h2: 32,
    h3: 18,
    h4: 18,
    h5: 16,
    h6: 16,
  },
  maxWidth: 780,
  sidebarWidth: 240,
};

const styles = {
  ComponentsList: {
    heading: {
      fontWeight: '700 !important',
    },
  },
  Heading: {
    heading1: {
      display: 'block',
      color: '#ffc600',
      position: 'relative',
      paddingBottom: rhythm(0.75),
      marginBottom: rhythm(0.75),
      fontWeight: 700,
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: rhythm(3),
        height: '4px',
        backgroundColor: colors.primary,
        borderRadius: '4px',
      },
      '& > a': {
        fontWeight: '700 !important',
      },
    },
    heading2: {
      marginBottom: rhythm(0.5),
    },
    heading3: {
      borderBottom: `thin solid ${colors.lightGrey}`,
      paddingBottom: rhythm(0.25),
      marginBottom: rhythm(1),
      textTransform: 'uppercase',
      fontWeight: '700',
    },
  },
  ReactComponent: {
    tabs: {
      backgroundColor: colors.paleGrey,
      padding: rhythm([0.5, 1]),
      overflow: 'auto',
    },
    tabButtons: {
      marginBottom: 0,
    },
  },
  SectionHeading: {
    sectionName: {
      display: 'block',
      paddingTop: `${rhythm(1)} !important`,
      textDecoration: 'none !important',
      '&:hover': {
        opacity: 0.75,
      },
    },
  },
  Logo: {
    logo: {
      color: '#ffc600',
    },
  },
  StyleGuide: {
    content: {
      paddingTop: rhythm(2.5),
      '@media (max-width: 600px)': {
        padding: rhythm(1),
      },
    },
    sidebar: {
      border: 0,
      '& li > a': {
        color: `${colors.light} !important`,
      },
    },
  },
  TabButton: {
    button: {
      width: '100%',
    },
    isActive: {
      border: 0,
    },
  },
  Table: {
    table: {
      marginTop: rhythm(0.5),
      marginBottom: rhythm(0.5),
      minWidth: '600px',
    },
    cellHeading: {
      borderBottom: `thin solid ${colors.lightGrey}`,
    },
    cell: {
      paddingBottom: 0,
      '& p': {
        marginBottom: `${rhythm(0.125)} !important`,
      },
      '& div[class*="para"]': {
        marginBottom: `${rhythm(0.125)} !important`,
      },
    },
  },
  Link: {
    heading: { color: '#ffc600' },
  },
};

module.exports = {
  title: `AxoKit ${version}`,
  sections: [
    {
      name: 'Components',
      components: () => [
        path.resolve(__dirname, 'src/components/Button', 'index.js'),
        path.resolve(__dirname, 'src/components/ButtonGroup', 'index.js'),
        path.resolve(__dirname, 'src/components/Input', 'index.js'),
        path.resolve(__dirname, 'src/components/Select', 'index.js'),
      ],
    },
    {
      name: 'Providers',
      components: () => [
        path.resolve(__dirname, 'src/providers/TrackingProvider', 'Provider.js'),
        path.resolve(__dirname, 'src/providers/StyleProvider', 'index.js'),
      ],
    },
  ],
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, 'styleguide/Wrapper', 'Wrapper.js'),
  },
  theme,
  styles,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1',
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        },
      ],
    },
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.12.1/antd.min.css',
        },
      ],
    },
  },
};
