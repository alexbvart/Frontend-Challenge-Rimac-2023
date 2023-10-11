import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
export default function Layout() {
    return (
        <>
            <div className='body-layout'>
                <Navbar />            
                <div className='max-w-screen lg:w-10/12 overflow-x-hidden' >
                    <Outlet />
                </div>
            </div>
        </>
    )
}
