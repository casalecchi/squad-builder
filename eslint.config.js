import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import prettierConfig from "eslint-config-prettier"

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    prettierConfig,
    {
        rules: {
            "react/react-in-jsx-scope": 0,
            "react/jsx-sort-props": [
                2,
                {
                    shorthandFirst: true,
                    multiline: "last",
                    ignoreCase: true,
                },
            ],
        },
    },
]
