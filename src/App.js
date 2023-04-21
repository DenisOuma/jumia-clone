import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SellBuyFoodNavBar } from "./components/HomePageNavBar/SellBuyFoodNavBar";
import { HomePage } from "./pages/HomePage";
function App() {
	return (
		<div className="App bg-primary-bg-page">
			<Router>
				<>
					<div className="container w-3/4  mx-auto">
						<SellBuyFoodNavBar />
						<Routes>
							<Route exact path="/catalog" element={<HomePage />} />
						</Routes>
					</div>
				</>
			</Router>
		</div>
	);
}

export default App;
