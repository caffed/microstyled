import { expect } from 'chai';
import type { InlineBlocks } from './types';
import {
  createCSSObject,
  createCSSString,
  createStyleElement,
  interpolate,
  mediaQueryRegex,
  psuedoClassRegex,
  randomString,
  removeWhitespace,
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

  describe('interpolate', function () {
    it('should interpolate strings correctly', function () {
      const testTemplateStrings = ['color: white;\n font-size: 24px;'];
      const testTemplateValues: InlineBlocks = [''];
      const testProps = {};
      const result = interpolate(testTemplateStrings, testTemplateValues, testProps);
      expect(result).to.eq('color: white;\n font-size: 24px;');
    });

    it('should interpolate strings with values correctly', function () {
      const testTemplateStrings = ['color: white;\n font-size: ', 'px;'];
      const testTemplateValues: InlineBlocks = ['24'];
      const testProps = {};
      const result = interpolate(testTemplateStrings, testTemplateValues, testProps);
      expect(result).to.eq('color: white;\n font-size: 24px;');
    });

    it('should interpolate strings and values with props correctly', function () {
      const testTemplateStrings = ['color: white;\n background-color: ', ';'];
      const testTemplateValues: InlineBlocks = [(props: any) => props.theme.color];
      const testProps = { theme: { color: 'white' } };
      const result = interpolate(testTemplateStrings, testTemplateValues, testProps);
      expect(result).to.eq('color: white;\n background-color: white;');
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

  describe('randomString', function () {
    it('should return a 20 alpha character string', function () {
      expect(randomString().length).to.eq(20);
    });

    it('should return an arbitrary character length string', function () {
      const number = Math.floor(Math.random() * 100);
      expect(randomString(number).length).to.eq(number);
    });

    it('should return an only alpha character string', function () {
      expect(/\d+/.exec(randomString())).to.be.an('null');
    });

    it('should return an alphanumeric character string', function () {
      const result = randomString(20, '', false);
      expect(/\d+/.exec(result).length).to.be.at.least(1);
      expect(/[A-Za-z]+/.exec(result).length).to.be.at.least(1);
    });
  });

  /**
   * @name removeWhitespace
   */
  describe('removeWhitespace', function () {
    const correctString = 'test string';

    it('should remove whitespace', async () => {
      expect(removeWhitespace('test   string')).to.eq(correctString);
    });

    it('should trim whitespace', async () => {
      expect(removeWhitespace(' test string ')).to.eq(correctString);
    });

    it('should not affect correctly formatted string', async () => {
      const noopString = 'test string';
      expect(removeWhitespace(noopString)).to.eq(noopString);
    });
  });
});
