'use strict';

/**
 * base64toBlob
 *
 * @static
 * @since 1.0.0
 * @category Lang
 * @param {string} b64Data The value to process.
 * @param {string} contentType The value to process.
 * @param {string} sliceSize The value to process.
 * @returns {blob} Returns the number.
 * @example
 *
 * _.parseURL(3.2);
 * // => 3.2
 *
 */
function base64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {
    type: contentType
  });
  return blob;
}

module.exports = base64toBlob;