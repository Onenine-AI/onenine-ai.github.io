const sidebars = {
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docs: [
    {
      id: 'intro',
      type: 'doc'
    },
    {
      id: 'what-is-onenine-cloud',
      type: 'doc',
    },
    {
      label: 'Data Literacy',
      type: 'category',
      items: [
        'data-literacy/data-literacy-intro',
        'data-literacy/start-data-science-journey'
      ]
    },
    {
      label: 'Data Analysis',
      type: 'category',
      items: [
        'data-analysis/data-analysis-intro',
        'data-analysis/one-click-data-analysis',
        'data-analysis/advanced-data-analysis',
      ]
    },
    {
      label: 'Data Visualization',
      type: 'category',
      items: [
        'data-visualisation/data-visualisation-intro',
        'data-visualisation/data-visualisation-types',
        'data-visualisation/creating-charts',
        'data-visualisation/creating-dashboards',
        'data-visualisation/data-visualisation-examples',
      ]
    },
    {
      label: 'AI Projects',
      type: 'category',
      items: [
        'ai-projects/ai-projects-intro',
        'ai-projects/ml-model-types',
        'ai-projects/ai-projects-examples',
      ]
    },
    {
      label: 'Discovery Projects',
      type: 'category',
      items: [
        'discovery-projects/discovery-projects-intro',
        'discovery-projects/deep-learning-model-types',
        'discovery-projects/discovery-projects-examples',
      ]
    },
    {
      label: 'Smart Models',
      type: 'category',
      items: [
        'smart-models/smart-models-intro',
        'smart-models/use-case-driven-models',
        'smart-models/smart-models-examples',
      ]
    },
    {
      label: 'Open Source Data Search',
      type: 'category',
      items: [
        'open-source-data-search/open-source-data-search-intro',
        'open-source-data-search/open-source-data-search-repos',
        'open-source-data-search/open-source-data-search-examples',
      ]
    },
    {
      label: 'Real Time Predictions',
      type: 'category',
      items: [
        'realtime-predictions/realtime-prediction-intro',
        'realtime-predictions/how-to-setup-real-time-predicitons',
        'realtime-predictions/realtime-prediction-examples',
      ]
    },
    {
      label: 'Organising Projects',
      type: 'category',
      items: [
        'organising-projects/organising-projects-intro',
        'organising-projects/how-to-organise-projects',
        'organising-projects/organising-projects-examples',
      ]
    },
    {
      label: 'FAQ',
      id: 'faq',
      type: 'doc',
    },
    {
      type: "link",
      label: "OneNine Cloud",
      href: "https://onenine.cloud",
    }
  ],

  // Tutorials Sidebar
  TutorialSidebar: [
    {
      id: "tutorials-page",
      type: "doc",
    },
    {
      label: "Platform Overview",
      type: "doc",
      id: "tutorials/platform-overview-tutorial",
    },
    {
      id: "tutorials/data-literacy-tutorial",
      type: "doc",
      label: "Data Literacy",
    },
    {
      id: "tutorials/data-exploration-tutorial",
      type: "doc",
      label: "Data Exploration",
    },
    {
      label: "Data Visualisation",
      type: "category",
      items: [
        'tutorials/data-viz-tutorial/upload-data-tutorial',
        'tutorials/data-viz-tutorial/create-charts-bar-or-pie-tutorial',
        'tutorials/data-viz-tutorial/create-sankey-charts-tutorial',
        'tutorials/data-viz-tutorial/create-dashboards-tutorial',
      ]
    },
    {
      label: "AI Projects",
      type: "category",
      items: [
        'tutorials/ai-project-tutorial/regression-tutorial',
        'tutorials/ai-project-tutorial/classification-tutorial',
        'tutorials/ai-project-tutorial/recommendation-tutorial',
        'tutorials/ai-project-tutorial/time-series-tutorial',
      ]
    },
    {
      label: "Smart Models",
      type: "category",
      items: [
        'tutorials/smart-model-tutorial/smart-model-classification-tutorial',
        'tutorials/smart-model-tutorial/smart-model-regression-tutorial',
        'tutorials/smart-model-tutorial/smart-model-nlp-tutorial',
      ]
    },
    {
      label: "Discovery Projects",
      type: "category",
      items: [
        'tutorials/discovery-project-tutorial/category-tutorial',
        'tutorials/discovery-project-tutorial/number-tutorial',
        'tutorials/discovery-project-tutorial/text-tutorial',
      ]
    },
    {
      label: 'Completed Projects',
      type: 'doc',
      id: 'tutorials/completed-project-tutorial',
    },
    {
      label: 'Real Time Predictions',
      type: 'doc',
      id: 'tutorials/real-time-predictions-tutorial',
    },
    {
      type: "link",
      label: "OneNine Cloud",
      href: "https://onenine.cloud",
    }
  ]
};

module.exports = sidebars;
