import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
    withDefaultColorScheme(
        {
            colorScheme: 'red',
        }
    ),{
        fonts: {
            body: "system-ui, sans-serif",
            heading: "",
            mono: "Menlo, monospace",
        },
    }
); 

export default theme;