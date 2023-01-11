import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';

export default function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Outlet />
    </div>
  );
}
