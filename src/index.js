if ((typeof window !== 'undefined' && !window._babelPolyfill) ||
  (typeof global !== 'undefined' && !global._babelPolyfill)) {
  require('babel-polyfill');
}

import Certificate from './certificate';
import { getSupportedLanguages } from './domain/i18n/useCases';

export { BLOCKCHAINS, STEPS, SUB_STEPS, CERTIFICATE_VERSIONS, VERIFICATION_STATUSES } from './constants';
export { getSupportedLanguages };
export { Certificate };
export { SignatureImage } from './models';
