import home from '../assets/icons/home.svg';
import cart from '../assets/icons/cart.svg';
import notification from '../assets/icons/notification.svg';
import profile from '../assets/icons/profile.svg';

export const appName = 'Eg Shop';

export const pages = [
    {
        title: 'Home',
        path: '/home',
        icon: <img src={home} alt='Home Icon' />,
    },
    {
        title: 'Cart',
        path: '/cart',
        icon: <img src={cart} alt='Cart Icon' />,
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icon: <img src={notification} alt='Notification Icon' />,
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <img src={profile} alt='Profile Icon' />,
    },
]

export const shop = [
    {
        id: 11,
        name: 'YTES',
        location: 'location 1',
        rate: 100
    }, {
        id: 12,
        name: 'FTES',
        location: 'location 2',
        rate: 120
    }, {
        id: 13,
        name: 'AES',
        location: 'location 3',
        rate: 105
    }, {
        id: 14,
        name: 'MES',
        location: 'location 4',
        rate: 140
    },
]

export const nullShop = [{
    id: null,
    name: 'Offline',
    location: 'Offline',
    rate: '000'
}];

export const accountSettings = [
    {
        title: 'Update Profile',
        subTitle: 'Change your profile information',
        icon: 'profile-bg.svg',
        path: '/profile/view'
    }, {
        title: 'Payment Method',
        subTitle: 'Manage payments and cards',
        icon: 'payment-bg.svg',
        path: '/profile/manage-payments'
    }, {
        title: 'Address',
        subTitle: 'Manage your delivery location',
        icon: 'location-bg.svg',
        path: '/profile/update-address'
    }, {
        title: 'Orders history',
        subTitle: 'View your Orders history',
        icon: 'history-bg.svg',
        path: '/profile/orders'
    },
];