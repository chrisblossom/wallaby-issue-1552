import path from 'path';

import wallabyIssue1552 from './wallaby-issue-1552';

describe('wallaby-issue-1552', () => {
    it('works', () => {
        const file = path.resolve(__dirname, '__sandbox__/example.js');
        wallabyIssue1552(file);

        expect(1).toEqual(1);
    })
})
