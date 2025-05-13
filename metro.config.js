// eslint-disable-next-line no-undef
const { getDefaultConfig } = require("expo/metro-config");
// eslint-disable-next-line no-undef
const { withNativeWind } = require("nativewind/metro");
const {
  wrapWithReanimatedMetroConfig,
  // eslint-disable-next-line no-undef
} = require("react-native-reanimated/metro-config");

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

// eslint-disable-next-line no-undef
module.exports = wrapWithReanimatedMetroConfig(
  withNativeWind(config, {
    input: "./__src/shared/styles/index.css",
  }),
);
