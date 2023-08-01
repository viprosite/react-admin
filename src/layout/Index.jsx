import { Outlet } from 'react-router-dom';

import MenuBar from './MenuBar';
import TopBar from './TopBar';
import './index.scss'



export default function Layout() {
    return (
        <div className='layout__container'>
            <MenuBar />
            <div className="right__content">
                <TopBar />
                <Outlet />
            </div>
        </div>
    )
}