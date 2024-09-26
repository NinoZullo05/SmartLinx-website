const path = require('path');

module.exports = {
  components: 'src/components/**/*.{js,jsx,ts,tsx}',
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
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  },
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
  theme: {
    color: {
      base: '#000000', // text_light
      light: '#898f80', // text_dark
      lightest: '#FFFFFF', // bg_light
      link: '#998EFE', // text_primary_light
      linkHover: '#DAD5FF', // text_secondary_light
      border: '#998EFE', // border_light
      name: '#998EFE', // text_primary_light
      type: '#DAD5FF', // text_secondary_light
      error: '#ff0000',
      baseBackground: '#FFFFFF', // bg_light
      codeBackground: '#f5f5f5',
      sidebarBackground: '#f5f5f5',
    },
    fontFamily: {
      base: '"SF Pro Display", Helvetica, Arial, sans-serif',
    },
    fontSize: {
      base: 16,
      text: 16,
      small: 14,
      h1: 40,
      h2: 32,
      h3: 24,
      h4: 20,
      h5: 16,
      h6: 16,
    },
  },
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: '"SF Pro Display", Helvetica, Arial, sans-serif',
      },
    },
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
      },
    },
    Code: {
      code: {
        fontSize: 14,
        fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
      },
    },
    ComponentsList: {
      list: {
        fontSize: 14,
      },
    },
    Heading: {
      heading1: {
        fontWeight: 700,
      },
      heading2: {
        fontWeight: 600,
      },
    },
    ReactComponent: {
      tabs: {
        backgroundColor: '#f5f5f5',
        paddingLeft: 16,
        paddingRight: 16,
      },
      tabButtons: {
        marginBottom: 0,
      },
    },
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/components/**/[A-Z]*.{js,jsx,ts,tsx}',
      sectionDepth: 2,
    },
  ],
  pagePerSection: true,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=SF+Pro+Display:400,600,700&display=swap',
        },
      ],
    },
  },
  require: [
    path.join(__dirname, 'src/styles/tailwind.css'),
  ],
};