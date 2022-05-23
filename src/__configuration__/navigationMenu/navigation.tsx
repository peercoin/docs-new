import React from 'react';
import * as Docs from '../../docs';
import { MarkdownPage } from '../../app/pages';

export type SimpleNavItem = {
    title: string;
    url?: string;
    icon?: JSX.Element;
    pages?: SimpleNavItem[];
    component?: JSX.Element;
    hidden?: boolean;
};

export type RedirectItem = {
    oldUrl: string;
    newUrl: string;
};

// Change scripts/crawl/sitemap.json after you make changes here.
export const pageDefinitions: SimpleNavItem[] = [
    {
        title: 'Introduction to Peercoin',
        url: '/overview',
        component: <MarkdownPage title={'Introduction to Peercoin'} markdown={Docs.Overview} />,
    },
    {
        title: 'Peercoin in comparison',
        url: '/comparison',
        component: (
            <MarkdownPage title={'Comparison with other blockchain networks'} markdown={Docs.Comparison.Intro} />
        ),
        pages: [
            {
                title: 'Consensus',
                url: '/consensus',
                component: <MarkdownPage title={'Consensus algorithm'} markdown={Docs.Comparison.Consensus} />,
            },
            {
                title: 'Distribution',
                url: '/distribution',
                component: (
                    <MarkdownPage title={'Distribution and Block Rewards'} markdown={Docs.Comparison.Distribution} />
                ),
            },
            {
                title: 'Fees',
                url: '/fees',
                component: <MarkdownPage title={'Burned and Fixed Fees'} markdown={Docs.Comparison.Fees} />,
            },
            {
                title: 'Block size and time spacing',
                url: '/blocksizeandtiming',
                component: (
                    <MarkdownPage
                        title={'Block size limit and block time spacing'}
                        markdown={Docs.Comparison.Blocksize}
                    />
                ),
            },
        ],
    },
    {
        title: 'Wallets',
        url: '/wallets',
        pages: [
            {
                title: 'Offical Client (Core)',
                url: '/core',
                component: <MarkdownPage title={'Consensus algorithm'} markdown={Docs.Wallets.Core} />,
            },
            {
                title: 'Using Multisig',
                url: '/multisig',
                component: <MarkdownPage title={'Using Multisig'} markdown={Docs.Wallets.UsingMultisig} />,
            },
            {
                title: 'Hardware Wallets',
                url: '/hardware-wallets',
                component: <MarkdownPage title={'Hardware Wallets'} markdown={Docs.Wallets.HardwareWallets} />,
            },
            {
                title: 'Paperwallets',
                url: '/paperwallet',
                component: <MarkdownPage title={'Paper Wallet Tutorial'} markdown={Docs.Wallets.Paperwallet} />,
            },
            {
                title: 'Bootstrapping',
                url: '/bootstrapping',
                component: <MarkdownPage title={'Bootstrapping Tutorial'} markdown={Docs.Wallets.Bootstrapping} />,
            },
        ],
    },
    {
        title: 'PeerAssets',
        url: '/peerassets',
        component: <MarkdownPage title={'Introduction to PeerAssets'} markdown={Docs.PeerAssets.PeerAssets} />,
    },
    {
        title: 'Proof-of-Stake',
        url: '/proof-of-stake',
        component: <MarkdownPage title={'Introduction to Proof-of-Stake'} markdown={Docs.ProofOfStake.ProofOfStake} />,
    },
    {
        title: 'Mining',
        url: '/mining',
        component: <MarkdownPage title={'Mining'} markdown={Docs.Mining.Mining} />,
    },
    {
        title: 'Developers',
        url: '/developers',
        pages: [
            {
                title: 'Compiling',
                url: '/compiling',
                component: <MarkdownPage title={'Compiling'} markdown={Docs.Developers.Compiling} />,
            },
            {
                title: 'JSON-RPC API reference',
                url: '/json-rpc-reference',
                component: <MarkdownPage title={'JSON-RPC'} markdown={Docs.Developers.JsonReference} />,
            },
            {
                title: 'Developer Notes',
                url: '/developer-notes',
                component: <MarkdownPage title={'Developer Notes'} markdown={Docs.Developers.DeveloperNotes} />,
            },
            {
                title: 'Bitcore Example',
                url: '/bitcore-example',
                component: <MarkdownPage title={'Bitcore Example'} markdown={Docs.Developers.BitcoreExample} />,
            },
        ],
    },
    {
        title: 'Frequently Asked Questions',
        url: '/faq',
        component: <MarkdownPage title={'Frequently Asked Questions'} markdown={Docs.FAQ.FAQ} />,
    },
    {
        title: 'Protocol Versions (Changelog)',
        url: '/changelog',
        component: <MarkdownPage title={'Protocol Versions (Changelog)'} markdown={Docs.Changelog.Changelog} />,
    },
    {
        title: 'Legal Notice',
        url: '/legal',
        component: <MarkdownPage title={'Legal Notice'} markdown={Docs.Legal.Legal} />,
    },
    {
        title: 'Press Mentions',
        url: '/press',
        component: <MarkdownPage title={'Press Mentions'} markdown={Docs.Press.Press} />,
    },
];

export const pageRedirects: RedirectItem[] = [
    {
        oldUrl: '/patterns/login',
        newUrl: '/patterns/user-auth',
    },
    // Remove this when we have a landing page for all the resources
    {
        oldUrl: '/resources',
        newUrl: '/resources/developer',
    },
];
