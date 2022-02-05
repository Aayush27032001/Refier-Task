import './App.scss';
import React,{useState} from 'react';
import JobPage from './Components/JobCard/JobPage';
import LoginModal from './Components/LoginModal/LoginModal';
import Navbar from './Components/NavBar/Navbar';
import Sidefilter from './Components/Sidefilter/Sidefilter';
import SideForm from './Components/SideForm/SideForm';

const App = () => {

	const [loginModal,setLoginModal] = useState(true);
	const modelcss = {width:"100vw",height:"100vh",overflow:"hidden"}

	return (
		<div className="App" style={loginModal?{}:modelcss}>
			<Navbar setLoginModal={setLoginModal} />
			<div className="app container">
				<div className="sidefilter">
					<Sidefilter />
				</div>
				<div className="JobPage">
					<JobPage />
				</div>
				<div className="sideform">
					<SideForm />
				</div>
			</div>
			{loginModal? <></> : <LoginModal setLoginModal={setLoginModal}/>}
		</div>
	);
}

export default App;
