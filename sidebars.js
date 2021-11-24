module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'doc',
      id: 'vision-purpose-values',
    },
    {
      type: 'category',
      label: 'Contributor Guide',
      items: [
        'contributor-guide/community-contributors',
        'contributor-guide/core-contributors',
      ],
    },
    {
      type: 'category',
      label: 'The Polywrap DAO',
      items: ['dao/what-is-a-dao', 'dao/working-groups', 'dao/governance'],
    },
    {
      type: 'category',
      label: 'Polywrap Improvement Proposal (PIP) Overview',
      items: ['pip/steps', 'pip/editors', 'pip/pip-template'],
    },
    {
      type: 'category',
      label: 'Enacted PIPs',
      items: [],
    },
  ],
};
