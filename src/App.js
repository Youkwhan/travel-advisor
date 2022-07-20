import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {
	return (
		<>
			<CssBaseline />
      {/* The header navbar section */}
			<Header />
			<Grid container spacing={3} style={{ width: "100%" }}>
        {/* The list of rec portion of the screen */}
				<Grid item xs={12} md={4}>
					<List />
				</Grid>

        {/* The map portion of the screen */}
				<Grid item xs={12} md={8}>
					<Map />
				</Grid>
			</Grid>
		</>
	);
}

export default App;
