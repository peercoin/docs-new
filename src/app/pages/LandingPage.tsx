import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Grid,
    Theme,
    useTheme,
    createStyles,
    makeStyles,
} from '@material-ui/core';
import {
    InfoCard,
    Section as LandingSection,
    CardCarousel,
    CarouselCard,
    FooterLinks,
    SharedToolbar,
} from '../components';
import * as Colors from '@brightlayer-ui/colors';
import { useHistory } from 'react-router-dom';

import { cardData } from '../../__configuration__/landingPage/cardData';
import { getScheduledSiteConfig } from '../../__configuration__/themes';
// import { Spacer } from '@brightlayer-ui/react-components';

import developImage from '../assets/home/develop.jpg';
import { usePageTitle } from '../hooks/usePageTitle';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';

import { PXBLogo } from '../assets/icons/PXBLogo';
import { Menu, DeveloperMode } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        banner: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${theme.spacing(8)}px ${theme.spacing(4)}px`,
            marginTop: 50,
            width: '100%',
            minHeight: 300,
            color: '#231815',
            backgroundColor: '#FF8232',
            backgroundSize: 'cover',
            backgroundPosition: '-240px center',
        },
        customBannerText: {
            maxWidth: '100%',
            width: 400,
            height: 250,
            display: 'block',
        },
        footer: {
            zIndex: 0,
            backgroundColor: Colors.darkBlack[100],
            color: Colors.white[50],
            textAlign: 'center',
        },
    })
);

export const LandingPage: React.FC = (): JSX.Element => {
    const history = useHistory();
    const theme = useTheme();
    const classes = useStyles();
    const themeConfig = getScheduledSiteConfig();
    const landingPageBanner = themeConfig.landingPageBanner;
    const logoColor = themeConfig.logoColor;
    const tagline = themeConfig.landingPageTagline;
    const customBannerText = themeConfig.customBannerText;
    usePageTitle('');
    useGoogleAnalyticsPageView();

    return (
        <>
            <SharedToolbar navigationIcon={<Menu />} />
            <div className={classes.banner} style={landingPageBanner}>
                {customBannerText ? (
                    <div style={customBannerText} className={classes.customBannerText} />
                ) : (
                    <PXBLogo color={logoColor} tagline={tagline} />
                )}
                <Button
                    variant={'outlined'}
                    color={'inherit'}
                    style={{ minWidth: 150, fontWeight: 600, margin: `${theme.spacing(2)}px 0 0` }}
                    onClick={(): void => {
                        history.push('overview');
                    }}
                >
                    GET STARTED
                </Button>
            </div>
            <LandingSection title={'V Systems Development'} align={'left'} background={'light'}>
                <Grid container spacing={6} style={{ marginTop: theme.spacing(2) }}>
                    {cardData.map((item, ind) => (
                        <Grid key={`grid${ind}`} item xs={12} sm={6} md={4}>
                            <InfoCard
                                spacing={6}
                                source={item.image}
                                title={item.title}
                                aspectRatio={'3x2'}
                                description={item.description}
                                onClick={(): void => {
                                    if (item.path.startsWith('/')) history.push(item.path);
                                    else window.open(item.path, '_blank');
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </LandingSection>

            {/* Carousel Section */}
            <CardCarousel>
                <CarouselCard
                    backgroundImage={developImage}
                    title={'Getting started as a developer'}
                    description={
                        'We have prepared numerous resources for Peercoin.'
                    }
                    icon={<DeveloperMode fontSize={'large'} />}
                    onClick={(): void => history.push('/get-started/where-to-begin')}
                />
            </CardCarousel>

            {/* Footer Section */}
            <FooterLinks />
            <AppBar position={'static'} className={classes.footer} elevation={0}>
                <Toolbar variant={'dense'}>
                    <Typography variant={'caption'} align={'center'} style={{ flex: '1 1 0px' }}>
                        Copyright © {new Date().getFullYear()} Peercoin Foundation. Licensed under BSD-3-Clause.
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};
