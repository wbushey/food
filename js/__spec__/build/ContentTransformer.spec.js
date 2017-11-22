// @flow
import path from 'path';
import ContentTransformer from 'Build/ContentTransformer';

ContentTransformer.inputRootPath = __dirname;
const mockInputPath = path.join(__dirname, 'test_path', 'test_file.md');

const mockInputBody = `1. Do something
2. Do something else
`;
const expectedOutputContent =
  '<ol><li>Do something</li><li>Do something else</li></ol>';

const mockInputYaml = `---
title: A Content
ingredients:
  salt: a lot
  pepper: some
isGlutenFree: true
time: a lot
servings: few
---
`;

let mockInputFile;
let transformed;

describe('ContentTransformer', () => {
  describe('with no yaml', () => {
    beforeEach(() => {
      mockInputFile = Buffer.from(mockInputBody);
      transformed = ContentTransformer.transform(mockInputFile, mockInputPath);
    });

    describe('transformed', () => {
      it('produces expected JSON', () => {
        expect(JSON.parse(transformed.toString())).toEqual({
          data: {
            id: 'test_path/test_file',
            content: expectedOutputContent,
          },
          links: {
            self: '/api/test_path/test_file.json',
          },
        });
      });
    });
  });

  describe('with yaml', () => {
    beforeEach(() => {
      mockInputFile = Buffer.from(`${mockInputYaml}\n\n${mockInputBody}`);
      transformed = ContentTransformer.transform(mockInputFile, mockInputPath);
    });

    describe('transformed', () => {
      it('produces expected JSON', () => {
        expect(JSON.parse(transformed.toString())).toEqual({
          data: {
            id: 'test_path/test_file',
            title: 'A Content',
            content: expectedOutputContent,
            ingredients: {
              salt: 'a lot',
              pepper: 'some',
            },
            isGlutenFree: true,
            time: 'a lot',
            servings: 'few',
          },
          links: {
            self: '/api/test_path/test_file.json',
          },
        });
      });
    });

    describe('with duplicate ingredients', () => {
      beforeEach(() => {
        mockInputFile = Buffer.from(`---
title: A Content
ingredients:
  salt: a lot
  salt: a pinch
  pepper: some
isGlutenFree: true
time: a lot
servings: few
---

${mockInputBody}`);

        transformed = ContentTransformer.transform(
          mockInputFile,
          mockInputPath,
        );
      });

      test('it uses the value of the last duplicate', () => {
        expect(
          JSON.parse(transformed.toString()).data.ingredients.salt,
        ).toEqual('a pinch');
      });
    });
  });
});
