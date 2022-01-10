import components from '../../../src/app/assets/card-images/components.png';
import github from '../../../src/app/assets/card-images/github.png';
import resources from '../../../src/app/assets/card-images/resources.png';
import patterns from '../../../src/app/assets/card-images/patterns.svg';
import community from '../../../src/app/assets/card-images/community.png';
import roadmap from '../../../src/app/assets/card-images/roadmap.png';

export const cardData = [
    {
        title: 'Design Patterns',
        description: `Learn about common interactions and designs found in Brightlayer UI applications.`,
        image: patterns,
        path: '/patterns',
    },
    {
        title: 'Component APIs',
        description: `Check out our libraries of pre-built JavaScript components that accelerate your application development.`,
        image: components,
        path: 'https://brightlayer-ui-components.github.io',
    },
    {
        title: 'Development Resources',
        description: `Have a look at all of the code examples and packages available from Brightlayer UI. We're constantly updating and adding new materials.`,
        image: resources,
        path: '/resources/developer',
    },
    {
        title: 'GitHub',
        description: `V Systems GitHub organization.`,
        image: github,
        path: 'https://github.com/virtualeconomy',
    },
    {
        title: 'Community',
        description: `Learn how to join the V Systems developer community by reporting bugs, requesting features, etc.`,
        image: community,
        path: '/community',
    },
    {
        title: 'Roadmap',
        description: `See what the team is currently working on and what we have planned for future updates.`,
        image: roadmap,
        path: '/roadmap',
    },
];
