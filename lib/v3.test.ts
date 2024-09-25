import { test, assert } from "vitest";
import { murmurhash3_32_gc } from "./v3";

test("murmurhash3_32_gc", () => {
  const hash = murmurhash3_32_gc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 0);
  // console.log(hash); // 2771212629
  assert.equal(hash, 2771212629);
});

test("murmurhash3_32_gc 2", () => {
  const hash = murmurhash3_32_gc("你好世界", 0);
  // console.log(hash); // 806296289
  assert.equal(hash, 806296289);
});
