import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie/:id" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
