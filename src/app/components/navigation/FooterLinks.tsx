import React from 'react';
import { Typography, Theme, useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import * as Colors from '@brightlayer-ui/colors';
import { NavLink } from './NavLink';
import { VsysWhite } from '../../assets/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: Colors.darkBlack[100],
            color: Colors.white[500],
            display: 'flex',
            flexWrap: 'wrap',
        },
        divider: {
            width: 1,
            background: Colors.black[800],
            height: 115,
            alignSelf: 'center',
        },
        navLink: {
            color: Colors.gray[300],
            display: 'block',
            marginLeft: 0,
            '&:not(:first-child)': {
                marginTop: theme.spacing(3),
            },
        },
        hotLinks: {
            flex: '1 1 0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        socialIcon: {
            marginLeft: theme.spacing(2),
            cursor: 'pointer',
        },
    })
);

export const FooterLinks: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const classes = useStyles();
    const singleColumn = useMediaQuery('(max-width:928px)');
    const xxs = useMediaQuery('(max-width:614px)');
    const padding = xxs ? theme.spacing(2) : singleColumn ? theme.spacing(4) : theme.spacing(8);
    return (
        <div className={classes.root} style={{ textAlign: singleColumn ? 'center' : 'left' }}>
            {/* Section 1: Brightlayer UI description */}
            <div style={{ flex: '1 1 0px', padding: padding, minWidth: xxs ? '100%' : '' }}>
                <div style={{ minWidth: xxs ? '100%' : 300 }}>
                    <VsysWhite />
                    <Typography variant={'caption'} display={'block'} style={{ marginTop: theme.spacing(2) }}>
                        V Systems is a blockchain infrastructure provider with a focus on database and cloud services. Led by Chief Architect Sunny King, the V Systems blockchain aims to create a secure underlying infrastructure platform for blockchain database through his new innovation - Supernode Proof of Stake (SPoS) consensus algorithm. 
                    </Typography>
                </div>
            </div>

            {!singleColumn && <div className={classes.divider} />}

            {/* Section 2: Quick Links */}
            <div className={classes.hotLinks} style={{ minWidth: xxs ? '100%' : '', padding: padding }}>
                <div style={{ width: xxs ? '100%' : 550, columnCount: xxs ? 1 : 3, columnGap: padding }}>
                    <NavLink
                        to={'/overview'}
                        title={'What is Brightlayer UI?'}
                        className={classes.navLink}
                        hoverColor={Colors.white[50]}
                    />
                    <NavLink
                        to={'/design/intro'}
                        title={'For Designers'}
                        className={classes.navLink}
                        hoverColor={Colors.white[50]}
                    />
                    <NavLink
                        to={'/development/environment'}
                        title={'For Developers'}
                        className={classes.navLink}
                        hoverColor={Colors.white[50]}
                    />
                    <NavLink
                        to={'/patterns'}
                        title={'Design Patterns'}
                        className={classes.navLink}
                        hoverColor={Colors.white[50]}
                    />
                    <NavLink
                        to={'https://brightlayer-ui-components.github.io/'}
                        title={'Component Libraries'}
                        className={classes.navLink}
                        hoverColor={Colors.white[50]}
                    />
                    <NavLink
                        to={'/attributions'}
                        title={'Image Attributions'}
                        className={classes.navLink}
                        hoverColor={Colors.white[50]}
                    />
                    <NavLink
                        to={'/resources'}
                        title={'Resources'}
                        className={classes.navLink}
                        hoverColor={Colors.white[50]}
                    />
                    <NavLink
                        to={'/roadmap'}
                        title={'Roadmap'}
                        className={classes.navLink}
                        hoverColor={Colors.white[50]}
                    />
                </div>
            </div>

            {!singleColumn && <div className={classes.divider} />}

        </div>
    );
};
FooterLinks.displayName = 'FooterLinks';
