import React, { useState, useEffect } from "react";
import axios from 'axios';
import citiesData from '../data/cities.json'

function Cities() {
  const [cityData, setCityData] = useState([]);

  // useEffect(() => {
  //   if(cityData.length === 0)
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => setCityData(res.data));
  // });

  return (
    <div>
      <table border="2px solid black">
        <thead>
          <tr>
            <th>GMT</th>
            <th>CityId</th>
            <th>CodeIataCity</th>
            <th>CodeIso2Country</th>
            <th>GeonameId</th>
            <th>LatitudeCity</th>
            <th>LongitudeCity</th>
            <th>NameCity</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {citiesData.map(e => {
            return (
              <tr>
                <td>{e.GMT}</td>
                <td>{e.cityId}</td>
                <td>{e.codeIataCity}</td>
                <td>{e.codeIso2Country}</td>
                <td>{e.geonameId}</td>
                <td>{e.latitudeCity}</td>
                <td>{e.longitudeCity}</td>
                <td>{e.nameCity}</td>
                <td>{e.timezone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default Cities;