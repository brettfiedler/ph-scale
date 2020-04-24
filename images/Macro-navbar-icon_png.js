/* eslint-disable */
import SimLauncher from '../../joist/js/SimLauncher.js';
const image = new Image();
const unlock = SimLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;