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
import Try from './Pages/Desktop/Try';
import Search from './Pages/Desktop/Search';
import DesktopWalletAddress from './Pages/Desktop/DesktopWalletAddress';
import WalletAdress from './Pages/Combine/WalletAdress';
import MyActivation from './Pages/Combine/MyActivation';
import MainWallet from './Pages/Combine/MainWallet';
import NewActivation from './Pages/Combine/NewActivation';
import MobNewActivation from './Pages/Mobile/MobNewActivation';
import MainWalletTransfer from './Pages/Combine/MainWalletTransfer';
import LoanList from './Pages/Combine/LoanList';
import LoanInstallment from './Pages/Combine/LoanInstallment';
import IncomeWallet from './Pages/Combine/IncomeWallet';
import ActivationWallet from './Pages/Combine/ActivationWallet';
import FundWallet from './Pages/Combine/FundWallet';
import AddFund from './Pages/Combine/AddFund';
import Profile from './Pages/Combine/Profile';
import Withdrawal from './Pages/Combine/Withdrawal';
import Sign from './Form/Sign';
import Dashboardd from './Pages/Combine/Dashboardd';
import Treee from './Pages/Combine/Treee';
import AddBank from './Pages/Combine/AddBank';
import MobChangePassword from './Pages/Mobile/MobChangePassword';
import ChangePassword from './Pages/Combine/ChangePassword';
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
				<Route path='/dashboard' element={<Dashboardd />} />
				<Route path='/landing' element={<LandingPage />} />
				<Route path='/addmember' element={<AddMember />} />
				<Route path='/direct' element={<Directt />} />
				<Route path='/tree' element={<Treee />} />
				<Route path='/try' element={<Try />} />
				<Route path='/search' element={<Search />} />
				<Route path='/myactivation' element={<MyActivation />} />
				<Route path='/mainwallet' element={<MainWallet />} />
				<Route path='/mainwallettransfer' element={<MainWalletTransfer />} />
				<Route path='/walletaddress' element={<WalletAdress />} />
				<Route path='/newactivationn' element={<NewActivation />} />
				<Route path='/mobnew' element={<MobNewActivation />} />
				<Route path='/loanlist' element={<LoanList />} />
				<Route path='/loaninstallment' element={<LoanInstallment />} />
				<Route path='/incomewallet' element={<IncomeWallet />} />
				<Route path='/activationwallet' element={<ActivationWallet />} />
				<Route path='/fundwallet' element={<FundWallet />} />
				<Route path='/addfund' element={<AddFund />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/withdrawal' element={<Withdrawal />} />
				<Route path='/addnewmember' element={<Sign />} />
				<Route path='/addbank' element={<AddBank />} />
				<Route path='/changepassword' element={<ChangePassword />} />

				<Route
					path='/dashboard'
					element={<PrivateRoute element={<Dashboard />} />}
				/>
			</Routes>
		</Router>
	);
};

export default MainRouter;
