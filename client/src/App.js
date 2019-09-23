import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from "./pages/dashboard/Dashboard";
import Landing from "./pages/landing/Landing";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notify = (type, message) => {
    switch (type) {
      case 'info':
        toast.info(message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;

      case 'success':
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
        });
        break;

      case 'error':
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;
      
      default:
        toast.info(message, {
          position: toast.POSITION.TOP_CENTER
        })
    }
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Landing notify={notify} />}
          />
          <Route
            exact
            path='/dashboard'
            render={() => <Dashboard notify={notify} />}
          />
          <Route
            render={() => <Landing notify={notify} />}
          />
        </Switch>
        <ToastContainer autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;
