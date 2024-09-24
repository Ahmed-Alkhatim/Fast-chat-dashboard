// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    // {
    //   title: 'Home',
    //   path: '/home',
    //   icon: 'tabler:smart-home',
    // },
    {
      title: 'User Management',
      path: '/users',
      icon: 'tabler:users',
    },
    {
      title: 'Orders',
      path: '/orders',
      icon: 'tabler:wallet',
    },
    {
      title: 'categories',
      path: '/categories',
      icon: 'tabler:category',
    },
    {
      title: 'Products',
      path: '/products',
      icon: 'tabler:layout-board-split',
    },
  ]
}

export default navigation
