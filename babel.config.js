module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["nativewind/babel"],
    [
      "module-resolver",
      {
        alias: {
          "@/api": "./app/api",
          "@/navigation": "./app/navigation",
          "@/data": "./app/data",
          "@/helpers": "./app/helpers",
          "@/components": "./app/components",
          "@/hooks": "./app/hooks",
          "@/assets": "./app/assets",
          "@/kommon": "./app/kommon",
          "@/screens": "./app/screens",
          "@/models": "./app/models",
        },
      },
    ],
  ],
};
