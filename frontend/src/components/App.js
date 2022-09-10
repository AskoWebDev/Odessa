import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Header from './Header';


function App() {
	


	return(
		<div>
			<BrowserRouter>
		      <Routes>
		        <Route path="/" element={<Layout />}>
		          <Route path="header" element={<Header />} />
		          <Route path="home" element={<Home />} />
		        </Route>
		      </Routes>
		    </BrowserRouter>
		</div>
	);
}

export default App;