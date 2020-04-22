import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      blue: string;
      orange: string;
      green: string;
      red: string;
      shape: string;
      titles: string;
      text: string;
      background: string;
    };
  }
}
