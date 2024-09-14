import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
    text: {
      primary: '#000000', // 기본 색상
    },
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    text: {
      primary: '#FFFFFF', // 다크모드에서 흰색
    },
  },
}
