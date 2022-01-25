import React from 'react';
import { Gavel, BugReport, EmojiObjects, QuestionAnswer, ImportExport } from '@material-ui/icons';
import * as Colors from '@brightlayer-ui/colors';
import * as BrandingColors from '@brightlayer-ui/colors-branding';

export const links = [
    {
        title: 'License',
        url: '/community/license',
        description: `Learn about the open source license under which Brightlayer UI is made available.`,
        image: (
            <span style={{ fontSize: 120, color: 'white', display: 'flex' }}>
                <Gavel fontSize={'inherit'} color={'inherit'} />
            </span>
        ),
        background: {
            color: BrandingColors.sky[500],
        },
    },
    {
        title: 'Innersourcing',
        url: '/community/innersourcing',
        description: `Help improve Brightlayer UI for others by sharing your work with the larger community.`,
        image: (
            <span style={{ fontSize: 120, color: 'white', display: 'flex' }}>
                <ImportExport fontSize={'inherit'} color={'inherit'} />
            </span>
        ),
        background: {
            color: Colors.orange[300],
        },
    },
    {
        title: 'Report Bugs',
        url: '/community/bugs',
        description: `Found an issue? Let us know so we can fix it!.`,
        image: (
            <span style={{ fontSize: 120, color: 'white', display: 'flex' }}>
                <BugReport fontSize={'inherit'} color={'inherit'} />
            </span>
        ),
        background: {
            color: Colors.red[400],
        },
    },
    {
        title: 'Request Features',
        url: '/community/features',
        description: `Have an idea for a new addition to Brightlayer UI? Tell us about it!`,
        image: (
            <span style={{ fontSize: 120, color: 'white', display: 'flex' }}>
                <EmojiObjects fontSize={'inherit'} color={'inherit'} />
            </span>
        ),
        background: {
            color: BrandingColors.citron[400],
        },
    },
    {
        title: 'FAQ',
        url: '/community/faq',
        description: `Read answers to common questions about using Brightlayer UI.`,
        image: (
            <span style={{ fontSize: 120, color: 'white', display: 'flex' }}>
                <QuestionAnswer fontSize={'inherit'} color={'inherit'} />
            </span>
        ),
        background: {
            color: BrandingColors.pine[300],
        },
    },
];
