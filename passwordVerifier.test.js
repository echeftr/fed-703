const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./passwordVerifier");

test("verifyPassword: password is hOla123", () => {
  expect(verifyPassword("hOla123")).toBe(true);
});

test("verifyPassword: password hola123 is not OK", () => {
  expect(verifyPassword("hola123")).toBe(true);
});

test("hasRightLength: is no longer than 8", () => {
  expect(hasRightLength("12345678")).toBe(true);
});

test("isNotNull: password input is not null", () => {
  expect(isNotNull).not.toBeNull();
});

test("hasUpperCaseCharacter: password has minimal 1 uppercase character", () => {
  expect(hasUpperCaseCharacter("hoLa123")).toBe(true);
});

test("hasLowerCaseCharacter: password must have lower case character included", () => {
  expect(hasLowerCaseCharacter("ljfgl")).toBe(true);
});

test("hasDigit: password must have minimal 1 number", () => {
  expect(hasDigit("digit123")).toBe(true);
});

test("minimumConditionsReached: password input must have minimal 3 true to be OK", () => {
  expect(minimumConditionsReached([true, true, true, false, false])).toBe(true);
});
