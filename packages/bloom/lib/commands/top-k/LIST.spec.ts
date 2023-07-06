import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../../test-utils';
import LIST from './LIST';

describe('TOPK.LIST', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      LIST.transformArguments('key'),
      ['TOPK.LIST', 'key']
    );
  });

  testUtils.testWithClient('client.topK.list', async client => {
    const [, reply] = await Promise.all([
      client.topK.reserve('key', 3),
      client.topK.list('key')
    ]);

    assert.deepEqual(reply, []);
  }, GLOBAL.SERVERS.OPEN);
});
