import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'ri-dashboard-2-line',
    subItems: [
      {
        id: 3,
        label: 'MENUITEMS.DASHBOARD.LIST.ANALYTICS',
        link: '/analytics',
        parentId: 2
      },
      {
        id: 7,
        label: 'MENUITEMS.DASHBOARD.LIST.PROJECTS',
        link: '/projects',
        parentId: 2
      },
      {
        id: 7,
        label: 'MENUITEMS.DASHBOARD.LIST.NFT',
        link: '/nft',
        parentId: 2,
      },
      {
        id: 8,
        label: 'MENUITEMS.DASHBOARD.LIST.JOB',
        link: '/job',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.DASHBOARD.BADGE',
        },
        parentId: 2,
      }
    ]
  },

  {
    id: 82,
    label: 'Traine',
    icon: 'ri-pages-line',
    link: '/trainee',
  },

  {
    id: 82,
    label: 'Trainer',
    icon: 'ri-pages-line',
    link: '/trainer',
  },
  
  {
    id: 8,
    label: 'MENUITEMS.APPS.TEXT',
    icon: 'ri-apps-2-line',
    subItems: [
      {
        id: 12,
        label: 'MENUITEMS.APPS.LIST.ECOMMERCE',
        link: '/mailbox',
        parentId: 8,
        subItems: [
          {
            id: 13,
            label: 'MENUITEMS.APPS.LIST.PRODUCTS',
            link: '/ecommerce/products',
            parentId: 12
          },
          {
            id: 14,
            label: 'MENUITEMS.APPS.LIST.PRODUCTDETAILS',
            link: '/ecommerce/product-detail/1',
            parentId: 12
          },
          {
            id: 15,
            label: 'MENUITEMS.APPS.LIST.CREATEPRODUCT',
            link: '/ecommerce/add-product',
            parentId: 12
          },
          {
            id: 16,
            label: 'MENUITEMS.APPS.LIST.ORDERS',
            link: '/ecommerce/orders',
            parentId: 12
          },
          {
            id: 17,
            label: 'MENUITEMS.APPS.LIST.ORDERDETAILS',
            link: '/ecommerce/order-details',
            parentId: 12
          },
          {
            id: 18,
            label: 'MENUITEMS.APPS.LIST.CUSTOMERS',
            link: '/ecommerce/customers',
            parentId: 12
          },
          {
            id: 19,
            label: 'MENUITEMS.APPS.LIST.SHOPPINGCART',
            link: '/ecommerce/cart',
            parentId: 12
          },
          {
            id: 20,
            label: 'MENUITEMS.APPS.LIST.CHECKOUT',
            link: '/ecommerce/checkout',
            parentId: 12
          },
          {
            id: 21,
            label: 'MENUITEMS.APPS.LIST.SELLERS',
            link: '/ecommerce/sellers',
            parentId: 12
          },
          {
            id: 22,
            label: 'MENUITEMS.APPS.LIST.SELLERDETAILS',
            link: '/ecommerce/seller-details',
            parentId: 12
          }
        ]
      },
      {
        id: 23,
        label: 'MENUITEMS.APPS.LIST.PROJECTS',
        parentId: 8,
        subItems: [
          {
            id: 24,
            label: 'MENUITEMS.APPS.LIST.LIST',
            link: '/projects/list',
            parentId: 23
          },
          {
            id: 25,
            label: 'MENUITEMS.APPS.LIST.OVERVIEW',
            link: '/projects/overview',
            parentId: 23
          },
          {
            id: 26,
            label: 'MENUITEMS.APPS.LIST.CREATEPROJECT',
            link: '/projects/create',
            parentId: 23
          }
        ]
      },
      {
        id: 27,
        label: 'MENUITEMS.APPS.LIST.TASK',
        parentId: 8,
        subItems: [
          {
            id: 28,
            label: 'MENUITEMS.APPS.LIST.KANBANBOARD',
            link: '/tasks/kanban',
            parentId: 27
          },
          {
            id: 29,
            label: 'MENUITEMS.APPS.LIST.LISTVIEW',
            link: '/tasks/list-view',
            parentId: 27
          },
          {
            id: 30,
            label: 'MENUITEMS.APPS.LIST.TASKDETAILS',
            link: '/tasks/details',
            parentId: 27
          }
        ]
      },
      {
        id: 46,
        label: 'MENUITEMS.APPS.LIST.SUPPORTTICKETS',
        parentId: 8,
        subItems: [
          {
            id: 47,
            label: 'MENUITEMS.APPS.LIST.LISTVIEW',
            link: '/tickets/list',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.TICKETDETAILS',
            link: '/tickets/details',
            parentId: 46
          }
        ]
      },
      {
        id: 46,
        label: 'MENUITEMS.APPS.LIST.NFTMARKETPLACE',
        parentId: 8,
        subItems: [
          {
            id: 47,
            label: 'MENUITEMS.APPS.LIST.MARKETPLACE',
            link: '/marletplace/marketplace',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.EXPLORENOW',
            link: '/marletplace/explore',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.LIVEAUCTION',
            link: '/marletplace/auction',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.ITEMDETAILS',
            link: '/marletplace/item-details',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.COLLECTIONS',
            link: '/marletplace/collections',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.CREATORS',
            link: '/marletplace/creators',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.RANKING',
            link: '/marletplace/raking',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.WALLETCONNECT',
            link: '/marletplace/wallet',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.CREATENFT',
            link: '/marletplace/create',
            parentId: 46
          },
        ]
      },
    ]
  },
  {
    id: 54,
    label: 'MENUITEMS.PAGES.TEXT',
    isTitle: true
  },
  {
    id: 82,
    label: 'MENUITEMS.PAGES.TEXT',
    icon: 'ri-pages-line',
    subItems: [
      {
        id: 92,
        label: 'MENUITEMS.PAGES.LIST.MAINTENANCE',
        link: '/pages/maintenance',
        parentId: 82
      },
      {
        id: 93,
        label: 'MENUITEMS.PAGES.LIST.COMINGSOON',
        link: '/pages/coming-soon',
        parentId: 82
      }
    ]
  },
  

];
