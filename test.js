import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import components from './index.js';

// Helper function to process CSS with tailwind and our plugin
async function generateTailwindCss(content){
    // Basic tailwind config with our plugin
    const config = {
        content: [{raw: content}],
        plugins: [components],
    };

    // Process with postcss and tailwindcss
    const result = await postcss(
        tailwindcss(config)
    ).process('@tailwind components; @tailwind utilities;', {
        from: undefined,
    });

    return result.css;
}

describe('tailwindcss-components', () => {
    // Test flex components
    test('it generates flex components correctly', async() => {
        const css = await generateTailwindCss('<div class="fl-center"></div>');
        expect(css).toContain('display: flex');
        expect(css).toContain('align-items: center');
        expect(css).toContain('justify-content: center');
    });

    // Test absolute components
    test('it generates absolute components correctly', async() => {
        const css = await generateTailwindCss('<div class="ab-center"></div>');
        expect(css).toContain('position: absolute');
        expect(css).toContain('top: 50%');
        expect(css).toContain('left: 50%');
        expect(css).toContain('transform: translate(-50%, -50%)');
    });

    // Test image size components
    test('it generates image sizing components correctly', async() => {
        const css = await generateTailwindCss('<div class="img-wrapper-cover"><img></div>');
        expect(css).toContain('object-fit: cover');
    });

    // Test list style none components
    test('it generates list style none components correctly', async() => {
        const css = await generateTailwindCss('<ul class="list-style-none"></ul>');
        expect(css).toContain('list-style: none');
    });

    // Test transition components
    test('it generates transition components correctly', async() => {
        const css = await generateTailwindCss('<div class="t"></div>');
        expect(css).toContain('transition-duration: .25s');
    });

    // Test loading components
    test('it generates loading components correctly', async() => {
        const css = await generateTailwindCss('<div class="loading"></div>');
        expect(css).toContain('position: relative');
    });

    // Test flex grid template components
    test('it generates flex grid template components correctly', async() => {
        const css = await generateTailwindCss('<div class="flex-grid-template"></div>');
        expect(css).toContain('display: flex');
        expect(css).toContain('flex-wrap: wrap');
    });

    // Test skeleton components
    test('it generates skeleton background components correctly', async() => {
        const css = await generateTailwindCss('<div class="skeleton-bg"></div>');
        expect(css).toContain('background-repeat: no-repeat');
    });

    // Test flex grid utilities
    test('it generates flex grid utilities correctly', async() => {
        const css = await generateTailwindCss('<div class="flex-grid-gap-4"></div><div class="flex-grid-gap-x-8"></div><div class="flex-grid-gap-y-2"></div>');

        // Test flex-grid-gap utility
        expect(css).toContain('--grid-gap-x: 1rem');
        expect(css).toContain('--grid-gap-y: 1rem');

        // Test flex-grid-gap-x utility
        expect(css).toContain('--grid-gap-x: 2rem');

        // Test flex-grid-gap-y utility
        expect(css).toContain('--grid-gap-y: 0.5rem');
    });
});