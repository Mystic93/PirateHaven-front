import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      navBar: string;
      button: string;
      light: string;
      dark: string;
      title: string;
      positiveFeedback: string;
      negativeFeedback: string;
      lightOpacity: string;
      disabledNavlink: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
