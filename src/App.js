import Topbar from "./components/Topbar";
import { Grid } from "@mui/material";


function App() {
  return (
    <div className="App">
      <Topbar/>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <h1 align="center">
            <img src="https://readme-typing-svg.demolab.com?font=Queensides&size=32&duration=2000&pause=2000&color=002D74&vCenter=true&multiline=true&random=false&width=600&height=100&lines=Hello+there!+%F0%9F%91%8B;I'm+Stef+and+I'm+a+Front-end+Developer" alt="Typing SVG" />
          </h1>
        </Grid>
        <Grid item sm={6} xs={12}></Grid>
      </Grid>
      
    </div>
  );
}

export default App;
