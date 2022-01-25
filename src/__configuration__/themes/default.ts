import * as BLUIThemes from '@brightlayer-ui/react-themes';
import * as Colors from '@brightlayer-ui/colors';
// import circles from '../../app/assets/themes/circles.svg';
import bg from '../../app/assets/themes/vsys-docs-banner.jpg';
import { SiteConfig } from './types';

export const defaultTheme: SiteConfig = {
    theme: {
        ...BLUIThemes.blue,
        overrides: {
            MuiAppBar: {
                colorDefault: {
                    color: Colors.white[50],
                    backgroundColor: '#231815',
                },
                colorPrimary: {
                    color: Colors.black[50],
                    backgroundColor: '#231815',
                },
                colorSecondary: {
                    color: Colors.white[200],
                    backgroundColor: '#231815',
                },
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
            MuiDrawer: {
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
