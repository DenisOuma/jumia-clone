import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddvertBarTop } from "./components/AddvertBarTop";
import { AllAbouJumiaFooter } from "./components/Footers/AllAbouJumiaFooter";
import { FooterPrime } from "./components/Footers/FooterPrime";
import { SellBuyFoodNavBar } from "./components/HomePageNavBar/SellBuyFoodNavBar";
import { PrimeNavbar } from "./components/NavBar/PrimeNavbar";
import { HomePage } from "./pages/HomePage";
function App() {
	return (
		<div className="App bg-primary-bg-page">
			<Router>
				<>
					<AddvertBarTop />
					<SellBuyFoodNavBar />
					<PrimeNavbar />
					<Routes>
						<Route exact path="/" element={<HomePage />} />
					</Routes>
					<FooterPrime />
					<AllAbouJumiaFooter />
				</>
			</Router>
		</div>
	);
}

export default App;
