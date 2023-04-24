import { RedisArgument, NumberReply, Command } from '../RESP/types';
import { pushVariadicArguments } from './generic-transformers';

export interface SInterCardOptions {
  LIMIT?: number;
}

export default {
  FIRST_KEY_INDEX: 2,
  IS_READ_ONLY: true,
  transformArguments(
    keys: Array<RedisArgument> | RedisArgument,
    options?: SInterCardOptions | number // `number` for backwards compatibility
  ) {
    const args = pushVariadicArguments(['SINTERCARD'], keys);

    if (typeof options === 'number') { // backwards compatibility
      args.push('LIMIT', options.toString());
    } else if (options?.LIMIT !== undefined) {
      args.push('LIMIT', options.LIMIT.toString());
    }

    return args;
  },
  transformReply: undefined as unknown as () => NumberReply
} as const satisfies Command;