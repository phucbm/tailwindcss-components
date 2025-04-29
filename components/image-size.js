/**
 * Image size helper components
 * Provides easy image sizing with object-fit
 */
export const imageSizeComponents = {
  '.img-wrapper-cover > img, .img-wrapper-contain > img': {
    'object-position': 'center center',
    'height': '100%',
    'width': '100%',
    'min-height': '100%',
    'min-width': '100%',
    'max-height': '100%',
    'max-width': '100%',
    'display': 'block'
  },
  '.img-wrapper-cover > img': {
    'object-fit': 'cover'
  },
  '.img-wrapper-contain > img': {
    'object-fit': 'contain'
  }
};