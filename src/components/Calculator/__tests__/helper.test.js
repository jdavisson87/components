import { decimalPress, operatorPress } from "../utils/helper";

test("decimalPress function", () => {
  expect(decimalPress("4.")).toBe(true);
  expect(decimalPress("4")).toBe(false);
});

test("operatorPress", () => {
  expect(operatorPress("23", "+")).toBe("23+");
  expect(operatorPress("23+", "+")).toBe("23+");
  expect(operatorPress("23-", "+")).toBe("23+");
});
