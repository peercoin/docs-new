import components from '../../../src/app/assets/card-images/components.png';
import github from '../../../src/app/assets/card-images/github.png';
import resources from '../../../src/app/assets/card-images/resources.png';
import community from '../../../src/app/assets/card-images/community.png';
import roadmap from '../../../src/app/assets/card-images/roadmap.png';

export const cardData = [
    {
        title: 'V Systems Stack',
        description: `Learn about how how to get started with developoing on VSYS Protocol.`,
        image: roadmap,
        path: '/get-started/vsys-stack',
    },
    {
        title: 'SDKs',
        description: `Check out our libraries that can accelerate your application development.`,
        image: components,
        path: 'https://github.com/virtualeconomy/py-v-sdk',
    },
    {
        title: 'Development Resources',
        description: `Have a look at all of the code examples and packages available. We're constantly updating and adding new materials.`,
        image: resources,
        path: '/get-started/where-to-begin',
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
        path: 'https://discord.gg/cxQdkdEyMU',
    },
];
