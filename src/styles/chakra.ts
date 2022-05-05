import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        "primary": {
            "50": "#32fecb",
            "100": "#28f4c1",
            "200": "#1eeab7",
            "300": "#14e0ad",
            "400": "#0ad6a3",
            "500": "#00cc99",
            "600": "#00c28f",
            "700": "#00b885",
            "800": "#00ae7b",
            "900": "#00a471"
        },
        "secondary": {
            "50": "#ae6cda",
            "100": "#a462d0",
            "200": "#9a58c6",
            "300": "#904ebc",
            "400": "#8644b2",
            "500": "#7c3aa8",
            "600": "#72309e",
            "700": "#682694",
            "800": "#5e1c8a",
            "900": "#541280"
        }
    },
    styles: {
        global: {
            body: {
                fontFamily: "Ubuntu, Roboto, sans-serif",
                backgroundColor: "#2A2B2A",
                color: "#fff"
            }
        }
    },
    components: {
        Button: {
            variants: {
                solid: {
                    bgColor: '#12100E',
                    _hover: {
                        bgColor: "primary.400"
                    }
                }
            }
        }
    }
})

export default theme