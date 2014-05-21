var assert = require('assert'),
    getElapsed = require('../index');

assert.strictEqual(getElapsed(0, 1), 'Just now');
assert.strictEqual(getElapsed(0, 30 * 1000), 'Just now');
assert.strictEqual(getElapsed(0, 50 * 1000), 'About a minute ago');
assert.strictEqual(getElapsed(0, 90 * 1000), 'About a minute ago');
assert.strictEqual(getElapsed(0, 120 * 1000), '2 minutes ago');
assert.strictEqual(getElapsed(0, 50 * 60 * 1000), 'About an hour ago');
assert.strictEqual(getElapsed(0, 100 * 60 * 1000), 'About an hour ago');
assert.strictEqual(getElapsed(0, 2 * 60 * 60 * 1000), '2 hours ago');
assert.strictEqual(getElapsed(0, 10 * 60 * 60 * 1000), '10 hours ago');
assert.strictEqual(getElapsed(0, 20 * 60 * 60 * 1000), 'About a day ago');
assert.strictEqual(getElapsed(0, 40 * 60 * 60 * 1000), 'About a day ago');
assert.strictEqual(getElapsed(0, 48 * 60 * 60 * 1000), '2 days ago');
assert.strictEqual(getElapsed(0, 100 * 24 * 60 * 60 * 1000), '100 days ago');
