//Arquivo de definição de tipos, pode ter somente arquivos de tipagem

import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}