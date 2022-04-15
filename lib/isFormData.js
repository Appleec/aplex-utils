/**
 *  Create by appleex on 2022/4/11 4:05 下午.
 */
'use strict';

/**
 * Checks if `value` is classified as an `FormData` object.
 *
 * @static
 * @since 1.0.4
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isFile(new File());
 * // => true
 *
 * _.isFile(NaN);
 * // => false
 *
 */
function isFormData (value) {
  return (typeof FormData !== 'undefined') && (value instanceof FormData);
}

module.exports = isFormData;