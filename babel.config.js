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
                    "@/components": "./app/components",
                    "@/hooks": "./app/hooks",
                    "@/kommon": "./app/kommon",
                    "@/screens": "./app/screens",
                    "@/models": "./app/models",
                },
            },
        ],
    ],
};
