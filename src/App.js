import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Theme from './Components/Theme/Theme';
import Date from './Components/Date/Date';
import Call from './Components/Call/Call';
import Timelines from './Components/Timelines/Timelines';
import Plan from './Components/Plan/Plan';
import Accomodation from './Components/Accomodation/Accomodation';
import Registration from './Components/Registration/Registration';
import Committee from './Components/Committee/Committee';
import Gallery from './Components/Gallery/Gallery';
import Budget from './Components/Budget/Budget';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <Home />
      <Theme />
      <Date />
      <Call />
      <Timelines />
      <Registration />
      <Plan />
      <Accomodation />
      <Committee />
      <Gallery />
      <Budget />
      </div>
    </div>
  );
}

export default App;
