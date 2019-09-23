import React from "react";
import API from '../../utils/API';
import './style.css';

function Dashboard() {

  const getHellos = () => {
    API.getHellos().then(response => {
      console.log(response)
    })
    .catch(err => {
        if (err) {
          alert(`There was an error:\n ${err} \n\r\n Redirecting you to landing page...`);

          //redirect to landing page
          window.location.replace('/')
        }
      })
  }

  return (
    <div className="Dashboard">
      <h1 data-test='dashboard-header'>Dashboard</h1>
      <button id="get-hellos-button" className="btn btn-warning" onClick={() => getHellos()}>GetHellos(protected)</button>
    </div>
  );
}

export default Dashboard;
