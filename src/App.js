
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/style.css';

import {BrowserRouter, Routes , Route} from 'react-router-dom';

import ReactBoard from './component/ReactBoard';
import KostaNavBar from './component/KostaNavBar';
import ReactBoardMain from './component/ReactBoardMain';
import BoardForm from './component/BoardForm';
import Login from './component/Login';
import Join from './component/Join';


function App() {
  return (
    <div className="App">
    	<BrowserRouter>
			<KostaNavBar />
				<Routes>
					<Route path="/" element={<ReactBoardMain />}></Route>
					<Route path="/reactboard" element={<ReactBoard />}></Route>
					<Route path="/boardform" element={<BoardForm />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/join" element={<Join />}></Route>
				</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
