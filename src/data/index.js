import {RiHome4Line, RiNotification4Line} from 'react-icons/ri';
import {CgShoppingCart, CgProfile} from 'react-icons/cg';

export const appName = 'Eg Shop';

export const pages = [
    {
        title: 'Home',
        path: '/home',
        icon: <RiHome4Line size={24}/>,
    },
    {
        title: 'Cart',
        path: '/cart',
        icon: <CgShoppingCart size={24}/>,
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <RiNotification4Line size={24}/>,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgProfile size={24}/>,
    },
]

export const shop = [
    {
        id: 11,
        name: 'Shop 1',
        location: 'location 1',
        rate: 110
    }, {
        id: 12,
        name: 'Shop 2',
        location: 'location 2',
        rate: 120
    }, {
        id: 13,
        name: 'Shop 3',
        location: 'location 3',
        rate: 105
    }, {
        id: 14,
        name: 'Shop 4',
        location: 'location 4',
        rate: 140
    },
]