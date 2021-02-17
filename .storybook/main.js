// module.exports = {
//   "stories": [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ]
// }


module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    };
    config.resolve.extensions.push('.ts', '.tsx');

    // Return the altered config
    return config;
  },
}