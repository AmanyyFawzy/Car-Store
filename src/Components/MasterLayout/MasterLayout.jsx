import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

export default function MasterLayout() {
  const location = useLocation();

  const hideNavOn = ['/AllCars']; 

  return (
    <>
      {!hideNavOn.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
}
