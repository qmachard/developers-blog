/* eslint-disable import/prefer-default-export */

/**
 * Format number to french
 *
 * @example 2000.34 -> '2 000,34'
 *
 * @param {number} num
 *
 * @return {string}
 */
export const formatNumber = (num) =>
  num
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1\u00a0')
    .replace('.', ',');
