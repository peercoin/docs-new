import style from '../../../src/app/assets/card-images/style.png';
import patterns from '../../../src/app/assets/card-images/patterns.svg';
import designPatternLibrary from '../../../src/app/assets/card-images/design-pattern-library.svg';
import variantSwitcher from '../../../src/app/assets/card-images/variant-switcher-plugin.svg';

export const patternLinks = [
    {
        title: 'Style Guides',
        url: '/style',
        description: 'Brightlayer UI style guidelines, including colors, themes, icons, typography, and more.',
        image: style,
        background: { position: 'center' },
    },
    {
        title: 'Design Patterns',
        url: '/patterns',
        description: 'Common interactions and designs found in Brightlayer UI applications.',
        image: patterns,
        background: { position: 'right' },
    },
];

