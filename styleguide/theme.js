import createMakeTheme, { toMakeTheme } from 'bootstrap-styled/lib/utils';
import { makeTheme as makeThemeBs } from 'bootstrap-styled/lib/theme';
import { makeTheme as makeThemeRollupUmdDocumentationBootstrapStyled } from '@bootstrap-styled/documentation/lib/theme';
import { makeTheme as makeThemeMotion } from '../src/theme';

export const makeTheme = createMakeTheme([
  makeThemeBs,
  makeThemeRollupUmdDocumentationBootstrapStyled,
  makeThemeMotion,
]);

export default makeTheme();
