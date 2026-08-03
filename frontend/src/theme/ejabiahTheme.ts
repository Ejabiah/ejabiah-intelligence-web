import {
  createDarkTheme,
  type BrandVariants,
  type Theme,
} from '@fluentui/react-components';

const ejabiahBrand: BrandVariants = {
  10: '#020705',
  20: '#03100A',
  30: '#041A10',
  40: '#052416',
  50: '#06301D',
  60: '#073C24',
  70: '#084A2C',
  80: '#095936',
  90: '#0B6940',
  100: '#0D7A4A',
  110: '#0F8B55',
  120: '#119D5F',
  130: '#13B36B',
  140: '#00D27A',
  150: '#27DF91',
  160: '#57E8AB',
};

const baseTheme = createDarkTheme(ejabiahBrand);

export const ejabiahTheme: Theme = {
  ...baseTheme,

  colorBrandBackground: '#00D27A',
  colorBrandBackgroundHover: '#13B36B',
  colorBrandBackgroundPressed: '#0F8F58',
  colorBrandForeground1: '#00D27A',
  colorBrandForeground2: '#13B36B',
  colorBrandStroke1: '#00D27A',
  colorBrandStroke2: '#13B36B',

  colorNeutralBackground1: '#071018',
  colorNeutralBackground1Hover: '#0B1721',
  colorNeutralBackground1Pressed: '#0E1C27',

  colorNeutralBackground2: '#111827',
  colorNeutralBackground2Hover: '#162131',
  colorNeutralBackground2Pressed: '#1A2738',

  colorNeutralBackground3: '#172131',
  colorNeutralBackground4: '#1C2838',

  colorNeutralForeground1: '#FFFFFF',
  colorNeutralForeground2: '#D7E0E8',
  colorNeutralForeground3: '#9BA9B7',
  colorNeutralForegroundDisabled: '#64717D',

  colorNeutralStroke1: '#243140',
  colorNeutralStroke2: '#1A2633',
  colorNeutralStrokeAccessible: '#3B4A5B',

  colorSubtleBackground: 'transparent',
  colorSubtleBackgroundHover: 'rgba(0, 210, 122, 0.08)',
  colorSubtleBackgroundPressed: 'rgba(0, 210, 122, 0.14)',

  colorCompoundBrandForeground1: '#00D27A',
  colorCompoundBrandBackground: '#00D27A',
  colorCompoundBrandBackgroundHover: '#13B36B',
  colorCompoundBrandBackgroundPressed: '#0F8F58',

  borderRadiusMedium: '16px',
  borderRadiusLarge: '18px',
  borderRadiusXLarge: '18px',

  shadow4: '0 0 16px rgba(0, 210, 122, 0.06)',
  shadow8: '0 0 22px rgba(0, 210, 122, 0.09)',
  shadow16: '0 0 30px rgba(0, 210, 122, 0.12)',
  shadow28: '0 0 42px rgba(0, 210, 122, 0.14)',

  fontFamilyBase:
    'Inter, "IBM Plex Sans Arabic", Cairo, Arial, sans-serif',
};