import { formatNumber } from './numbers';

test('formatNumber(0) -> "0"', () => {
  expect(formatNumber(0)).toBe('0');
});

test('formatNumber(1000) -> "1 000"', () => {
  expect(formatNumber(1000)).toBe('1 000');
});

test('formatNumber(14567.87) -> "14 567,87"', () => {
  expect(formatNumber(14567.87)).toBe('14 567,87');
});
