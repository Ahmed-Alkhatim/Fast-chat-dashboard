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
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield',
    }
  ]
}

export default navigation
