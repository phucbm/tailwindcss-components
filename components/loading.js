/**
 * Loading helper components
 * Provides loading spinner animations and overlays
 */
export const loadingComponents = {
  ':root': {
    '--loading-size': '35px',
    '--loading-color': 'theme(\'colors.primary\')',
    '--loading-bg': 'rgba(255, 255, 255, 0.7)'
  },
  '.loading, .woocommerce .blockUI.blockOverlay, .woocommerce .loader': {
    'position': 'relative'
  },
  '.woocommerce .blockUI.blockOverlay::before, .woocommerce .loader::before, .loading::before': {
    'content': '""',
    'position': 'absolute',
    'inset': '0',
    'z-index': '2',
    'background-color': 'var(--loading-bg)'
  },
  '.loading::after, body .xwc--pf-loader-overlay::after, .woocommerce .blockUI.blockOverlay::after, .woocommerce .loader::after': {
    'content': '""',
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'z-index': '3',
    'width': 'var(--loading-size)',
    'height': 'var(--loading-size)',
    'margin': 'calc(-0.5 * var(--loading-size)) 0 0 calc(-0.5 * var(--loading-size))',
    'border-radius': '50%',
    'border': '2px dashed transparent',
    'border-bottom-color': 'var(--loading-color)',
    'border-right-color': 'var(--loading-color)',
    'animation': 'spinner-loading 0.6s linear infinite',
    'box-sizing': 'border-box'
  },
  '@keyframes spinner-loading': {
    'to': {
      'transform': 'rotate(360deg)'
    }
  }
};