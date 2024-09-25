/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param str ASCII only
 * @param seed Positive integer only
 * @return 32-bit positive integer hash
 */
export declare function murmurhash2_32_gc(str: string | Uint8Array, seed: number): number;
