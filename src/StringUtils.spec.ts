import { expect } from 'chai';
import {
  randomString,
} from '@caffedpkg/microcore';
import {
  createCSSObject,
  createCSSString,
  createStyleElement,
  mediaQueryRegex,
  psuedoClassRegex,
} from './StringUtils';

describe('StringUtils', () => {
  describe('createCSSObject', function () {
    it('should have the correct keys', function () {
      expect(createCSSObject('')).to.have.all.keys(['mediaQueries', 'psuedoClasses', 'keyValue']);
    });

    it('should have only keyValue values', function () {
      const cssString = `color: rgb(10,10,10); font-size: 24px;`;
      const expected = ['color: rgb(10,10,10)', 'font-size: 24px'];
      const result = createCSSObject(cssString);
      expect(result.psuedoClasses.length).to.equal(0);
      expect(result.mediaQueries.length).to.equal(0);
      expect(result.keyValue).to.have.members(expected);
    });

    it('should have only psuedoClasses values', function () {
      const cssString = `&:hover { background-color: red; }`;
      const expected = ['&:hover { background-color: red; }'];
      const result = createCSSObject(cssString);
      expect(result.keyValue.length).to.equal(0);
      expect(result.mediaQueries.length).to.equal(0);
      expect(result.psuedoClasses).to.have.members(expected);
    });

    it('should have only media query values', function () {
      const cssString = `@media (max-width: 500px) { & { background-color: red; } }`;
      const expected = ['@media (max-width: 500px) { & { background-color: red; } }'];
      const result = createCSSObject(cssString);
      expect(result.keyValue.length).to.equal(0);
      expect(result.psuedoClasses.length).to.equal(0);
      expect(result.mediaQueries).to.have.members(expected);
    });

    it('should have only media query and key value values', function () {
      const cssString = `color: red; @media (max-width: 500px) { & { background-color: red; } }`;
      const expected = {
        keyValue: ['color: red'],
        mediaQueries: ['@media (max-width: 500px) { & { background-color: red; } }'],
      };
      const result = createCSSObject(cssString);
      expect(result.psuedoClasses.length).to.equal(0);
      expect(result.keyValue.length).to.equal(1);
      expect(result.keyValue).to.have.members(expected.keyValue);
      expect(result.mediaQueries.length).to.equal(1);
      expect(result.mediaQueries).to.have.members(expected.mediaQueries);
    });

    it('should have only media query and psuedoclass values', function () {
      const cssString = `&:hover { color: red; } @media (max-width: 500px) { & { background-color: red; } }`;
      const expected = {
        psuedoClasses: ['&:hover { color: red; }'],
        mediaQueries: ['@media (max-width: 500px) { & { background-color: red; } }'],
      };
      const result = createCSSObject(cssString);
      expect(result.keyValue.length).to.equal(0);
      expect(result.psuedoClasses.length).to.equal(1);
      expect(result.psuedoClasses).to.have.members(expected.psuedoClasses);
      expect(result.mediaQueries.length).to.equal(1);
      expect(result.mediaQueries).to.have.members(expected.mediaQueries);
    });

    it('should have only key value and psuedoclass values', function () {
      const cssString = `color: red; &:hover { color: red; }`;
      const expected = { psuedoClasses: ['&:hover { color: red; }'], keyValue: ['color: red'] };
      const result = createCSSObject(cssString);
      expect(result.mediaQueries.length).to.equal(0);
      expect(result.psuedoClasses.length).to.equal(1);
      expect(result.psuedoClasses).to.have.members(expected.psuedoClasses);
      expect(result.keyValue.length).to.equal(1);
      expect(result.keyValue).to.have.members(expected.keyValue);
    });
  });

  describe('createCSSString', function () {
    it('should create a valid CSS string', function () {
      const className = randomString();
      const obj = {
        keyValue: ['color: white'],
        psuedoClasses: ['&:hover { color: red; }'],
        mediaQueries: ['@media (min-width: 500px;) { & { color: blue; } }'],
      };
      const expected = `.${className} { color: white; }\n.${className}:hover { color: red; }\n@media (min-width: 500px;) { .${className} { color: blue; } }\n`;
      const result = createCSSString(obj, className);
      expect(result).to.eq(expected);
    });
  });

  describe('createStyleElement', function () {
    it('should create a valid HTMLStyleElement', function () {
      const id = randomString();
      const styles = randomString();
      const styleSheet = createStyleElement(id, styles);
      expect(styleSheet.id).to.eq(id);
      expect(styleSheet.innerHTML).to.eq(styles);
      expect(styleSheet instanceof HTMLStyleElement).to.eq(true);
    });
  });

  describe('psuedoClassRegex', function () {
    it("should match between '&' and '}'", function () {
      const testString = 'lorem ipsum & { color: white; } lorem ipsum';
      const result = testString.match(psuedoClassRegex);
      expect(result.length).to.eq(1);
      expect(result[0]).to.eq('& { color: white; }');
    });
  });

  describe('mediaQueryRegex', function () {
    it("should match between '&' and '}'", function () {
      const testString =
        'lorem ipsum @media (min-width: 300px) { & {  color: white;  } } lorem ipsum';
      const result = testString.match(mediaQueryRegex);
      expect(result.length).to.eq(1);
      expect(result[0]).to.eq('@media (min-width: 300px) { & {  color: white;  } }');
    });
  });
});
