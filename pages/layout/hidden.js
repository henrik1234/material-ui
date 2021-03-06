import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./hidden${props.lang}.md`)}
      demos={{
        'pages/layout/hidden/BreakpointUp.js': {
          js: require('docs/src/pages/layout/hidden/BreakpointUp').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/hidden/BreakpointUp'), 'utf8')
`,
        },
        'pages/layout/hidden/BreakpointDown.js': {
          js: require('docs/src/pages/layout/hidden/BreakpointDown').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/hidden/BreakpointDown'), 'utf8')
`,
        },
        'pages/layout/hidden/BreakpointOnly.js': {
          js: require('docs/src/pages/layout/hidden/BreakpointOnly').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/hidden/BreakpointOnly'), 'utf8')
`,
        },
        'pages/layout/hidden/GridIntegration.js': {
          js: require('docs/src/pages/layout/hidden/GridIntegration').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/layout/hidden/GridIntegration'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
