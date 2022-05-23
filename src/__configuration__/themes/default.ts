import * as BLUIThemes from '@brightlayer-ui/react-themes';
import * as Colors from '@brightlayer-ui/colors';
// import circles from '../../app/assets/themes/circles.svg';
import bg from '../../app/assets/themes/peercoin-docs-banner.jpg';
import { SiteConfig } from './types';

export const defaultTheme: SiteConfig = {
    theme: {
        ...BLUIThemes.blue,
        palette: {
            ...BLUIThemes.blue.palette,
            type: 'light',
            primary: {
                light: Colors.orange[500],
                main: Colors.black[500],
                dark: Colors.orange[500],
            },
            secondary: {
                main: Colors.yellow[500],
            },
        },
        overrides: {
            MuiAppBar: {
                ...BLUIThemes.blue.overrides?.MuiAppBar,
                colorPrimary: {
                    backgroundColor: Colors.orange[500],
                    color: Colors.white[50],
                },
                colorSecondary: {
                    backgroundColor: Colors.orange[500],
                    color: Colors.white[50],
                    '& .MuiInputBase-root': {
                        color: Colors.white[50],
                    },
                    '& .MuiSelect-icon': {
                        color: Colors.white[50],
                    },
                },
                colorDefault: {
                    color: Colors.white[50],
                    backgroundColor: Colors.orange[500],
                },
                body1: {
                    color: Colors.white[500],
                }
            },
            MuiBackdrop: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
            },
            MuiButton: {
                outlined: {},
                outlinedPrimary: {},
            },
            MuiTypography: {
                colorPrimary: {
                    color: '#3cb054',
                },
                h1: {
                    fontWeight: 600,
                },
                h2: {
                    fontWeight: 600,
                },
                h3: {
                    fontWeight: 500,
                },
                h4: {
                    fontWeight: 500,
                },
                body1: {
                    color: Colors.black[500],
                }
            },
            MuiTabs: {
                indicator: {
                    backgroundColor: Colors.orange[500],
                },
            },
            MuiTab: {
                selected: {},
                textColorInherit: {
                    '&$selected': {
                        color: Colors.orange[500],
                    },
                },
            },
        },
    },
    landingPageBanner: { 
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
};
