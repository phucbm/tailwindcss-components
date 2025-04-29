/**
 * Flex grid utilities
 * Provides utilities for customizing flex grid settings
 */
export const registerFlexGridUtilities = ({matchUtilities, theme}) => {
    // Register utility for setting flex-grid-gap-x
    matchUtilities(
        {
            'flex-grid-gap-x': (value) => ({
                '--grid-gap-x': value
            }),
        },
        {values: theme('spacing')}
    );

    // Register utility for setting flex-grid-gap-y
    matchUtilities(
        {
            'flex-grid-gap-y': (value) => ({
                '--grid-gap-y': value
            }),
        },
        {values: theme('spacing')}
    );

    // Register utility for setting both x and y gaps together
    matchUtilities(
        {
            'flex-grid-gap': (value) => ({
                '--grid-gap-x': value,
                '--grid-gap-y': value,
            }),
        },
        {values: theme('spacing')}
    );
};