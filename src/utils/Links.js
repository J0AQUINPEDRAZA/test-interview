import { GrHomeRounded } from 'react-icons/gr'
import { CiFolderOn, CiStar } from 'react-icons/ci'
import { PiNotificationFill } from 'react-icons/pi'
import { HiOutlineUser } from 'react-icons/hi'

export const LinksHeaderLanding = [
  {
    label: 'Content 1',
    path: '/#content1'
  },
  {
    label: 'Content 2',
    path: '/#content2'
  },
  {
    label: 'Login',
    path: '/newSale'
  }
]

export const LinksSidebarNewSale = [
  {
    label: 'Home',
    path: '/newSale',
    icon: GrHomeRounded
  },
  {
    label: 'Star',
    path: '/newSale/star',
    icon: CiStar
  },
  {
    label: 'Notification',
    path: '/newSale/notification',
    icon: PiNotificationFill
  },
  {
    label: 'Folder',
    path: '/newSale/Sales',
    icon: CiFolderOn
  },
  {
    label: 'User',
    path: '/newSale/user',
    icon: HiOutlineUser
  }
]
