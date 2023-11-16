import { HomePage } from 'pages/HomePage'
import { RouteType } from 'types/route'
// import AlbumList from '../pages/Home'
// import Photos from '../pages/Photos';

const routes: RouteType[] = [
    {
        path: '/',
        name: 'Home',
        element: HomePage,
    },
    // {
    //     path: '/album/:albumId',
    //     name: 'Album',
    //     element: Photos
    // },
]

export { routes }