const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');

process.env.BROWSER = 'none';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/assets/styles/antd.customize.less'),
        javascriptEnabled: true,
      },
    },
  ],
  webpack: {
    configure: (webpackConfig: any, { env, paths }: any): any => {
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule: any) => {
        if (rule.oneOf instanceof Array) {
          return {
            ...rule,
            oneOf: [{ test: /\.wasm$/, type: 'webassembly/async' }, ...rule.oneOf],
          };
        }
        return rule;
      });
      //
      const fallback = webpackConfig.resolve.fallback || {};
      Object.assign(fallback, {
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
      });
      webpackConfig.resolve.fallback = fallback;
      //
      webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      ]);
      //
      webpackConfig.experiments = {
        asyncWebAssembly: true,
      };
      return webpackConfig;
    },
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === 'development' ? [new BundleAnalyzerPlugin({ openAnalyzer: false })] : []),
    ],
  },
};
