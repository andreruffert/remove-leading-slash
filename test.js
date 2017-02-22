import test from 'ava';
import removeLeadingSlash from './';

test('removes leading slash', t => {
  const result = removeLeadingSlash('/some/random/path/');
  const expected = 'some/random/path/';

  t.is(result, expected, `Expected "${result}" to be equal to "${expected}"`);
});

test('removes multiple leading slashes', t => {
  const result = removeLeadingSlash('///some/random/path/');
  const expected = 'some/random/path/';

  t.is(result, expected, `Expected "${result}" to be equal to "${expected}"`);
});

test('does\'t remove trailing slash', t => {
  const string = 'some/random/path/';
  const result = removeLeadingSlash(string);
  const expected = string;

  t.is(result, expected, `Expected "${result}" to be equal to "${expected}"`);
});

test('string without slashes', t => {
  const string = 'some random string';
  const result = removeLeadingSlash(string);
  const expected = string;

  t.is(result, expected, `Expected "${result}" to be equal to "${expected}"`);
});
