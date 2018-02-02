import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/clients/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/clients/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/clients/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/clients/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/clients/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/clients/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/clients/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/clients/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/clients/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/clients/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/clients/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/clients/components/tree',
      }, {
        title: 'Notifications',
        link: '/clients/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/clients/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/clients/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/clients/maps/bubble',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/clients/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/clients/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/clients/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/clients/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/clients/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/clients/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
