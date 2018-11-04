import BN from 'bn.js';

export type RLPInput = Buffer | string | number | Uint8Array | BN;
export type RLPInputOrArray = RLPInput | RLPInput[];

export interface RLPDecoded {
  data: Buffer | Buffer[];
  remainder: Buffer;
}