import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../../test-utils';
import RESET from './RESET';

describe('TDIGEST.RESET', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      RESET.transformArguments('key'),
      ['TDIGEST.RESET', 'key']
    );
  });

  testUtils.testWithClient('client.tDigest.reset', async client => {
    const [, reply] = await Promise.all([
      client.tDigest.create('key'),
      client.tDigest.reset('key')
    ]);

    assert.equal(reply, 'OK');
  }, GLOBAL.SERVERS.OPEN);
});
