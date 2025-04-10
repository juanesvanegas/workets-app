
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListWorkers from './modules/worket/ListWorkers';
import AddWorket from './modules/worket/AddWorket';
import EditWorkers from './modules/worket/EditWorkers';
import Navegation from './plantilla/Navegation';
function App() {
  return (
    <div className="container">
  <BrowserRouter>
    <Navegation />
    <Routes>
      <Route exact path="/" element={<ListWorkers />} />
      <Route  exact path="/add" element={<AddWorket />} />
      <Route  exact path="/worket/edit/:id" element={<EditWorkers />} />
    </Routes>
  </BrowserRouter>
     </div>
  );
}

export default App;
