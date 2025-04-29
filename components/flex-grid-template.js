/**
 * Flex grid template helper components
 * Provides a flexible grid system using flexbox
 */
export const flexGridTemplateComponents = {
  '.flex-grid-template': {
    '--grid-gap-x': '30px',
    '--grid-gap-y': '30px',
    '--grid-col': '3',
    '--grid-gap-x-total': 'calc(var(--grid-gap-x) * (var(--grid-col) - 1))',
    '--grid-space-each': 'calc(var(--grid-gap-x-total) / var(--grid-col))',
    'display': 'flex',
    'flex-wrap': 'wrap',
    'gap': 'var(--grid-gap-y) var(--grid-gap-x)'
  },
  '.flex-grid-template > *': {
    'width': 'calc(100% / var(--grid-col) - var(--grid-space-each))'
  },
  '@media only screen and (max-width: 768px)': {
    '.flex-grid-template': {
      '--grid-col': '2'
    }
  },
  '@media only screen and (max-width: 576px)': {
    '.flex-grid-template': {
      '--grid-col': '1'
    }
  },
  '.flex-grid-col-1': { '--grid-col': '1' },
  '.flex-grid-col-2': { '--grid-col': '2' },
  '.flex-grid-col-3': { '--grid-col': '3' },
  '.flex-grid-col-4': { '--grid-col': '4' },
  '.flex-grid-col-5': { '--grid-col': '5' },
  '.flex-grid-col-6': { '--grid-col': '6' },
  '.flex-grid-col-7': { '--grid-col': '7' },
  '.flex-grid-col-8': { '--grid-col': '8' },
  '.flex-grid-col-9': { '--grid-col': '9' },
  '.flex-grid-col-10': { '--grid-col': '10' },
  '.flex-grid-col-11': { '--grid-col': '11' },
  '.flex-grid-col-12': { '--grid-col': '12' }
};