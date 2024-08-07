import React, { useState } from 'react';
import {
    AppBar,
    Tabs,
    Tab,
    Theme,
    createStyles,
    makeStyles,
    List,
    Accordion,
    AccordionDetails,
    Divider,
    useTheme,
    useMediaQuery,
} from '@material-ui/core';

import { ResourceRow, PageContent, ExpansionHeader } from '../components';
import { resources } from '../../__configuration__/resources';
import { usePageTitle } from '../hooks/usePageTitle';
import { useGoogleAnalyticsPageView } from '../hooks/useGoogleAnalyticsPageView';
import { useSelector } from 'react-redux';
import { AppState } from '../redux/reducers';
import { FrameworkFilter } from '../../__types__';
import { useBackgroundColor } from '../hooks/useBackgroundColor';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabs: {
            top: theme.spacing(8),
            [theme.breakpoints.down('xs')]: {
                top: theme.spacing(7),
            },
        },
    })
);

export const DevResources: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const [filter, setFilter] = useState<FrameworkFilter>('all');
    const searchActive = useSelector((state: AppState) => state.app.searchActive);
    const theme = useTheme();
    const showBanner = useSelector((state: AppState) => state.app.showBanner);
    const sm = useMediaQuery(theme.breakpoints.down('sm'));

    usePageTitle('Resources');
    useGoogleAnalyticsPageView();
    useBackgroundColor(theme.palette.background.default);
    return (
        <>
            <AppBar
                position={searchActive ? 'static' : 'sticky'} // to avoid the filter bar "pops out" when searching
                color={'secondary'}
                className={classes.tabs}
                elevation={0}
                style={
                    showBanner
                        ? {
                              top: 2 * theme.spacing(sm ? 7 : 8),
                          }
                        : {}
                }
            >
                <Tabs variant={'scrollable'} value={filter}>
                    <Tab
                        style={{ minWidth: 'auto' }}
                        label="All"
                        value={'all'}
                        onClick={(): void => setFilter('all')}
                    />
                    <Tab
                        style={{ minWidth: 'auto' }}
                        label="Angular"
                        value={'angular'}
                        onClick={(): void => setFilter('angular')}
                    />
                    <Tab
                        style={{ minWidth: 'auto' }}
                        label="React"
                        value={'react'}
                        onClick={(): void => setFilter('react')}
                    />
                    <Tab
                        style={{ minWidth: 'auto' }}
                        label="Ionic"
                        value={'ionic'}
                        onClick={(): void => setFilter('ionic')}
                    />
                    <Tab
                        style={{ minWidth: 'auto' }}
                        label="React Native"
                        value={'react-native'}
                        onClick={(): void => setFilter('react-native')}
                    />
                </Tabs>
            </AppBar>

            {/* First expander */}
            <PageContent>
                {resources.map(
                    (bucket, bIndex) =>
                        (!bucket.applies ||
                            bucket.applies.includes(filter) ||
                            bucket.applies.includes('all') ||
                            filter === 'all') && (
                            <Accordion key={`${bucket.name}_${bIndex}`} defaultExpanded>
                                <ExpansionHeader name={bucket.name} description={bucket.description} />
                                <AccordionDetails style={{ display: 'block', padding: 0 }}>
                                    <Divider />
                                    <List style={{ padding: 0 }}>
                                        {bucket.items.map((item, index): JSX.Element | null =>
                                            item.applies === undefined ||
                                            item.applies.includes(filter) ||
                                            item.applies.includes('all') ||
                                            filter === 'all' ? (
                                                <ResourceRow
                                                    key={`${item.name}_${index}`}
                                                    name={item.name}
                                                    package={item.package}
                                                    repository={item.repository || ''}
                                                    description={item.description}
                                                    divider={index < bucket.items.length - 1}
                                                    demoUrl={item.demoUrl}
                                                />
                                            ) : null
                                        )}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        )
                )}
            </PageContent>
        </>
    );
};
