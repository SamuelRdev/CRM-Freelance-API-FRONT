import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InvoicesPage from './pages/InvoicesPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to="/">Invoices</Link>
      <Link to="/customers">Customers</Link>
        <Switch>
          <Route path="/" component={InvoicesPage}/>
          <Route path="/customers"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
