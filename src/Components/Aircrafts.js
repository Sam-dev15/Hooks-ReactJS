import React, { useState, useEffect } from "react";
import axios from 'axios';
import AirCraftsData from '../data/aircrafts.json'

function Aircrafts() {
  const [aircraftsData, setAirCraftsData] = useState([]);

  return (
    <div>
      <table border="2px solid black">
        <thead>
          <tr>
            <th>CodeIataAircraft</th>
            <th>NameAircraft</th>
            <th>PlaneTypeId</th>       
          </tr>
        </thead>
        <tbody>
          {AirCraftsData.map(e => {
            return (
              <tr>
                <td>{e.codeIataAircraft}</td>
                <td>{e.nameAircraft}</td>
                <td>{e.planeTypeId}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default Aircrafts;