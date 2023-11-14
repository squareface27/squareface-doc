/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'documentation/intro',
    {
      label: 'Symfony',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'documentation/symfony/installation',
        'documentation/symfony/prerequis',
      ],
    },
    {
      label: 'Linux',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'documentation/linux/commandes',
      ],
    },
  ],
  certifs: [
    'certification/intro',
    {
        label: 'CNIL - Atelier RGPD',
        type: 'category',
        link: {
            type: 'generated-index',
        },
        items: [
            {
                type: 'category',
                label: 'Module 1 : Le RGPD et ses notions clés',
                items: [
                    'certification/cnil/module1/index',
                    {
                        type: 'category',
                        label: 'Activités',
                        items: ['certification/cnil/module1/activites/activite1'],
                    },
                ],
            },
        ],
    },
],

}

export default sidebars;
