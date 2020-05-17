const config = require("../../config");

const correctResponse = [
  { name: "content", url: "https://not.a.real.url" },
  { name: "versioning", url: "https://also.not.real" },
  { name: "media", url: "https://the.fakest.url" },
];

describe("Config setup", () => {
  test("returns the correct service list for federated APIs passed to env variables", () => {
    expect(config.federatedApis).toEqual(correctResponse);
  });
});

// describe('Bad env', () => {
// const OLD_ENV = process.env;
// beforeEach(() => {
// jest.resetModules();
// process.env = { ...OLD_ENV };
// delete process.env.NODE_ENV;
// })

// afterEach(() => {
// process.env = OLD_ENV;
// });

// test('will cause config.federatedApis() to throw an error', () => {
// expect(config.federatedApis).toThrowError(new Error('You must provide a content api url'));
// });
// });
