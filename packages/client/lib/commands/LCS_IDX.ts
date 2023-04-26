// import { RedisArgument, TuplesToMapReply, BlobStringReply, ArrayReply, NumberReply, Resp2Reply, Command, TuplesReply } from '../RESP/types';
// import LCS from './LCS';

// export interface LcsIdxOptions {
//   MINMATCHLEN?: number;
// }

// export type LcsIdxRange = TuplesReply<[
//   start: NumberReply,
//   end: NumberReply
// ]>;

// export type LcsIdxMatches = ArrayReply<
//   TuplesReply<[
//     key1: LcsIdxRange,
//     key2: LcsIdxRange
//   ]>
// >;

// export type LcsIdxReply = TuplesToMapReply<[
//   [BlobStringReply<'matches'>, LcsIdxMatches],
//   [BlobStringReply<'len'>, NumberReply]
// ]>;

// export default {
//   FIRST_KEY_INDEX: LCS.FIRST_KEY_INDEX,
//   IS_READ_ONLY: LCS.IS_READ_ONLY,
//   transformArguments(
//     key1: RedisArgument,
//     key2: RedisArgument,
//     options?: LcsIdxOptions
//   ) {
//     const args = LCS.transformArguments(key1, key2);

//     if (options?.MINMATCHLEN) {
//       args.push('MINMATCHLEN', options.MINMATCHLEN.toString());
//     }

//     return args;
//   },
//   transformReply: {
//     2: (reply: Resp2Reply<LcsIdxReply>) => ({
//       matches: reply[1],
//       len: reply[2]
//     }),
//     3: undefined as unknown as () => LcsIdxReply
//   }
// } as const satisfies Command;