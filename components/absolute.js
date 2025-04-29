/**
 * Absolute positioning helper components
 * Provides easy centering and full coverage with absolute positioning
 */
export const absoluteComponents = {
  '.ab-center': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  '.ab-center-v': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  '.ab-center-h': {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  '.ab-full, .ab-full-b::before, .ab-full-a::after, .ab-full-ba::before, .ab-full-ba::after': {
    position: 'absolute',
    inset: '0',
  },
  '.ab-full-b::before, .ab-full-a::after, .ab-full-ba::before, .ab-full-ba::after': {
    content: '""'
  }
};