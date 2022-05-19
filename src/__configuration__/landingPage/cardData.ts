import components from '../../../src/app/assets/card-images/components.png';
import github from '../../../src/app/assets/card-images/github.png';
import resources from '../../../src/app/assets/card-images/resources.png';
import community from '../../../src/app/assets/card-images/community.png';
import roadmap from '../../../src/app/assets/card-images/roadmap.png';

export const cardData = [
    {
        title: 'Peercoin Website',
        description: `Check out the main Peercoin website and find all kinds of additional information.`,
        image: roadmap,
        path: 'https://www.peercoin.net',
    },
    {
        title: 'Peercoin Foundation',
        description: `The Peercoin Foundation has been established with the simple mission of promoting and supporting the continued education, development, and overall progression of the Peercoin project.`,
        image: components,
        path: 'https://www.peercoin.net/foundation',
    },
    {
        title: 'Peercoin University',
        description: `Peercoin university is a community project aimed at less technical members of the community to grasp and understand the complex topic of public blockchain.`,
        image: resources,
        path: 'https://www.peercoin.net/university',
    },
    {
        title: 'GitHub',
        description: `Peercoin GitHub organization.`,
        image: github,
        path: 'https://github.com/peercoin',
    },
    {
        title: 'Community',
        description: `Learn how to join the Peercoin developer community by reporting bugs, requesting features, etc.`,
        image: community,
        path: 'https://discord.gg/XPxfwtG',
    },
];
