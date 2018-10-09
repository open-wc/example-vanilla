import {
  html,
  htmlFixture,
  litHtmlFixture,
} from '@open-wc/testing/bdd.js';

import '../example-vanilla';

describe('<example-vanilla>', () => {
  it('has a default property header', async () => {
    const el = await htmlFixture('<example-vanilla></example-vanilla>');
    expect(el.header).to.equal('My Example');
  });

  it('allows property header to be overwritten', async () => {
    const el = await litHtmlFixture(html`
      <example-vanilla .header=${'different'}></example-vanilla>
    `);
    expect(el.header).to.equal('different');
  });
});
