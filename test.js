import test from 'node:test';
import assert from 'node:assert/strict';
import removeLeadingSlash from './index.js';

test('removes leading slash', () => {
  const input = '/some/random/path/';
  const result = removeLeadingSlash(input);
  const expected = 'some/random/path/';

  assert.strictEqual(result, expected);
});

test('removes multiple leading slashes', () => {
  const input = '///some/random/path/';
  const result = removeLeadingSlash(input);
  const expected = 'some/random/path/';

  assert.strictEqual(result, expected);
});

test("doesn't remove trailing slash", () => {
  const input = 'some/random/path/';
  const result = removeLeadingSlash(input);
  const expected = input;

  assert.strictEqual(result, expected);
});

test('string without slashes', () => {
  const input = 'some random string';
  const result = removeLeadingSlash(input);
  const expected = input;

  assert.strictEqual(result, expected);
});

test('throws on non-string types', () => {
  const expectedError = {
    name: 'TypeError',
    message: 'Expected a string'
  };

  assert.throws(() => removeLeadingSlash(null), expectedError);
  assert.throws(() => removeLeadingSlash(undefined), expectedError);
  assert.throws(() => removeLeadingSlash(123), expectedError);
  assert.throws(() => removeLeadingSlash({}), expectedError);
  assert.throws(() => removeLeadingSlash([]), expectedError);
});
