import home from '../assets/icons/home.svg';
import cart from '../assets/icons/cart.svg';
import notification from '../assets/icons/notification.svg';
import profile from '../assets/icons/profile.svg';

export const appName = 'Eg Shop';

export const pages = [
    {
        title: 'Home',
        path: '/home',
        icon: <img src={home} alt='Home Icon'/>,
    },
    {
        title: 'Cart',
        path: '/cart',
        icon: <img src={cart} alt='Cart Icon'/>,
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <img src={notification} alt='Notification Icon'/>,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <img src={profile} alt='Profile Icon'/>,
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