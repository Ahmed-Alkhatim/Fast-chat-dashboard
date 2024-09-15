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
      icon: 'tabler:school',
    },
    {
      title: 'Orders',
      path: '/orders',
      icon: 'tabler:wallet',
    },
    // {
    //   title: 'Lessons',
    //   path: '/lessons',
    //   icon: 'tabler:book',
    // },
    // {
    //   title: 'Courses',
    //   path: '/courses',
    //   icon: 'tabler:video',
    // },
  ]
}

export default navigation
