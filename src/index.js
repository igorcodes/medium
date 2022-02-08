import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import TopBar from 'components/topBar'
//у нас абсолютные пути, все пути начинаются от нод модулес
import {CurrentUserProvider} from 'context/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

import {BrowserRouter as Router} from 'react-router-dom';
import Routes from 'routes';

// обычная функция с разметкой внутри
const App = () => {
	return (
		<CurrentUserProvider>
			<CurrentUserChecker>
			{/* <h3>welcome to hooks</h3> */}
			<Router>
				<TopBar />
				<Routes/>
			</Router>
			</CurrentUserChecker>
		</CurrentUserProvider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

