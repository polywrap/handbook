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
      items: ['dao/core-team', 'dao/working-groups'],
    },
    {
      type: 'category',
      label: 'Spending Proposals',
      items: ['spending/steps', 'spending/spending-template'],
    },
    {
      type: 'category',
      label: 'Governance Proposal Process Overview',
      items: [
        'governance-proposals/steps',
        'governance-proposals/proposal-template',
      ],
    },
    {
      type: 'category',
      label: 'Enacted Governance Proposals',
      items: [],
    },
    {
      type: 'category',
      label: 'DAO Operations',
      items: ['dao-ops/contributor-payments'],
    },
  ],
};
