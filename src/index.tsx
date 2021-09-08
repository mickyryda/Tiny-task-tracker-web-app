import { render } from "react-dom";

import App from "./App";
import './assets/css/tailwind.css'

import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
    borderRadius: '1px',
    borderWidth: '1px',

    /* Whites */
    alabaster: 'rgb(250, 250, 250)', // #fafafa
    zircon: 'rgb(253, 254, 255)', // #fdfeff

    /* Blacks */
    silver: 'rgb(193, 193, 193)', // #c1c1c1
    tundora: 'rgb(64, 64, 64)', // #404040

    /* Blues */
    denim: 'rgb(19, 140, 211)', // #138CD3

    /* Greens */
    apple: 'rgb(64,151,56)', // #409738
    panache: 'rgb(241, 249, 242)', // #f1f9f2

    /* Reds */
    red: 'rgb(239, 84, 85)', // #ef5455

    /* Brand */
    brandWhite: 'rgb(253, 254, 255)',
    brandBlack: 'rgb(64, 64, 64)',
    brandPrimary: 'rgb(19, 140, 211)',
    brandInteraction: 'rgb(19, 140, 211)',

    fontFamily: 'sans-serif',
    fontSmall: '14px',
    fontRegular: '16px',
    fontLarge: '20px',

    spacingSmall: '8px',
    spacingRegular: '16px',
    spacingMedium: '24px',
    spacingLarge: '64px',

    spacingText: '12px',
    lineHeightRegular: '20px',
}

const rootElement = document.getElementById("root");
render(<ThemeProvider theme={theme}><App /></ThemeProvider>, rootElement);