import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { useRequireAuth } from './auth';
import Dashboard from './Pages/Dashboard';
import Login from './Form/Login';
import RightNavbar from './ReusableComnent/RightNavbar';
import LandingPage from './Pages/LandingPage';
import AddMember from './Pages/Desktop/AddMember';
// import Direct from './Pages/Desktop/direct';
import Directt from './Pages/Desktop/Directt';
import Tree from './Pages/Desktop/Tree';
import WalletAddress from './Pages/Desktop/WalletAddress';
// import Login from './Pages/Login';

const PrivateRoute = ({ element, ...props }) => {
	const isAuthenticated = useRequireAuth();

	return isAuthenticated ? (
		React.cloneElement(element, { ...props })
	) : (
		<Navigate to='/' replace />
	);
};

const MainRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/rightnavbar' element={<RightNavbar />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/landing' element={<LandingPage />} />
				<Route path='/addmember' element={<AddMember />} />
				<Route path='/direct' element={<Directt />} />
				<Route path='/tree' element={<Tree />} />
				<Route path='/walletaddress' element={<WalletAddress />} />
				<Route
					path='/dashboard'
					element={<PrivateRoute element={<Dashboard />} />}
				/>
			</Routes>
		</Router>
	);
};

export default MainRouter;
