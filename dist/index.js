function g(n, a = 0) {
  typeof n == "string" && (n = new TextEncoder().encode(n));
  let i = n.length, t = a ^ i, e = 0, h;
  for (; i >= 4; )
    h = n[e] & 255 | (n[++e] & 255) << 8 | (n[++e] & 255) << 16 | (n[++e] & 255) << 24, h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16), h ^= h >>> 24, h = (h & 65535) * 1540483477 + (((h >>> 16) * 1540483477 & 65535) << 16), t = (t & 65535) * 1540483477 + (((t >>> 16) * 1540483477 & 65535) << 16) ^ h, i -= 4, ++e;
  switch (i) {
    case 3:
      t ^= (n[e + 2] & 255) << 16;
    case 2:
      t ^= (n[e + 1] & 255) << 8;
    case 1:
      t ^= n[e] & 255, t = (t & 65535) * 1540483477 + (((t >>> 16) * 1540483477 & 65535) << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + (((t >>> 16) * 1540483477 & 65535) << 16), t ^= t >>> 15, t >>> 0;
}
function u(n, a = 0) {
  typeof n == "string" && (n = new TextEncoder().encode(n));
  const i = n.length & 3, t = n.length - i;
  let e = a;
  const h = 3432918353, o = 461845907;
  let l = 0, s, c;
  for (; l < t; )
    c = n[l] & 255 | (n[++l] & 255) << 8 | (n[++l] & 255) << 16 | (n[++l] & 255) << 24, ++l, c = (c & 65535) * h + (((c >>> 16) * h & 65535) << 16) & 4294967295, c = c << 15 | c >>> 17, c = (c & 65535) * o + (((c >>> 16) * o & 65535) << 16) & 4294967295, e ^= c, e = e << 13 | e >>> 19, s = (e & 65535) * 5 + (((e >>> 16) * 5 & 65535) << 16) & 4294967295, e = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16);
  switch (c = 0, i) {
    case 3:
      c ^= (n[l + 2] & 255) << 16;
    case 2:
      c ^= (n[l + 1] & 255) << 8;
    case 1:
      c ^= n[l] & 255, c = (c & 65535) * h + (((c >>> 16) * h & 65535) << 16) & 4294967295, c = c << 15 | c >>> 17, c = (c & 65535) * o + (((c >>> 16) * o & 65535) << 16) & 4294967295, e ^= c;
  }
  return e ^= n.length, e ^= e >>> 16, e = (e & 65535) * 2246822507 + (((e >>> 16) * 2246822507 & 65535) << 16) & 4294967295, e ^= e >>> 13, e = (e & 65535) * 3266489909 + (((e >>> 16) * 3266489909 & 65535) << 16) & 4294967295, e ^= e >>> 16, e >>> 0;
}
export {
  g as murmurhash2_32_gc,
  u as murmurhash3_32_gc,
  g as v2,
  u as v3
};
