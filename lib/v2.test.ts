import { test, assert } from "vitest";
import { murmurhash2_32_gc } from "./v2";

test("murmurhash3_32_gc", () => {
  const hash = murmurhash2_32_gc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 0);
  // console.log(hash); // 1666185278
  assert.equal(hash, 1666185278);
});

test("murmurhash3_32_gc 2", () => {
  const hash = murmurhash2_32_gc("你好世界", 0);
  // console.log(hash); // 154172305
  assert.equal(hash, 154172305);
});
