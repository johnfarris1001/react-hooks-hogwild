import React, { useState } from "react";
import Nav from "./Nav";
import PigContainer from "./PigContainer";
import SortAndFilter from "./SortAndFilter";
import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false)
	const [sortByWeight, setSortByWeight] = useState("Sort By Weight")
	const [nameSearch, setNameSearch] = useState("")

	function toggleGreased() {
		setShowGreased(!showGreased)
	}

	function searchName(event) {
		setNameSearch(event.target.value)
	}

	function changeWeightSort() {
		if (sortByWeight === "Sort By Weight") {
			setSortByWeight("Sorted (Desc)")
		} else if (sortByWeight === "Sorted (Desc)") {
			setSortByWeight("Sorted (Asc)")
		} else {
			setSortByWeight("Sort By Weight")
		}
	}

	return (
		<div className="App">
			<Nav />
			<SortAndFilter
				toggleGreased={toggleGreased}
				showGreased={showGreased}
				searchName={searchName}
				nameSearch={nameSearch}
				changeWeightSort={changeWeightSort}
				sortByWeight={sortByWeight}
			/>
			<PigContainer
				sortByWeight={sortByWeight}
				hogs={hogs}
				showGreased={showGreased}
				nameSearch={nameSearch}
			/>
		</div>
	);
}

export default App;
