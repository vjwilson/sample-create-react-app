import Helpers from './Helpers';

it('returns a CSS-style ID from a string', () => {
  const actual = Helpers.makeCssId('Norville Shaggy Rogers');

  const expected = 'norville-shaggy-rogers';

  expect(actual).toEqual(expected);
});
