import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SellBuyFoodNavBar } from "./components/HomePageNavBar/SellBuyFoodNavBar";
import { PrimeNavbar } from "./components/NavBar/PrimeNavbar";
import { HomePage } from "./pages/HomePage";
function App() {
	return (
		<div className="App bg-primary-bg-page">
			<Router>
				<>
					<SellBuyFoodNavBar />
					<PrimeNavbar />
					<Routes>
						<Route exact path="/" element={<HomePage />} />
					</Routes>
				</>
			</Router>
		</div>
	);
}

export default App;
