import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends Record<string, any> {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      gray: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    spacing: {
      large: string;
      larger: string;
      largest: string;

      default: string;
      small: string;
      smallest: string;
    };
    padding: {
      large: string;
      larger: string;
      largest: string;

      default: string;
      defaultMd: string;
      defaultLg: string;

      small: string;
      smaller: string;
      smallest: string;
    };
  }
}
