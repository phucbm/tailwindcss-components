/**
 * List style none helper components
 * Provides clean list styling without bullets or padding
 */
export const listStyleNoneComponents = {
  'ul.list-style-none, .list-style-none ul': {
    'margin': '0',
    'list-style': 'none'
  },
  'ul.list-style-none > li, .list-style-none ul > li': {
    'padding': '0'
  }
};