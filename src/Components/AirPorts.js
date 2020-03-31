import React, { useState, useEffect } from "react";
import axios from 'axios';
import AirPortsData from '../data/airports.json';

function AirPorts() {
  const [cityData, setCityData] = useState([]);


  return (
    <div>
      <table border="2px solid black">
        <thead>
          <tr>
            <th>GMT</th>
            <th>airportId</th>
            <th>codeIataAirport</th>
            <th>codeIataCity</th>
            <th>codeIcaoAirport</th>
            <th>codeIso2Country</th>
            <th>geonameId</th>
            <th>latitudeAirport</th>
            <th>nameAirport</th>
            <th>nameCountry</th>
            <th>phone</th>
            <th>timezone</th>
          </tr>
        </thead>
        <tbody>
          {AirPortsData.map(e => {
            return (
              <tr>
                <td>{e.GMT}</td>
                <td>{e.airportId}</td>
                <td>{e.codeIataAirport}</td>
                <td>{e.codeIataCity}</td>
                <td>{e.codeIcaoAirport}</td>
                <td>{e.codeIso2Country}</td>
                <td>{e.geonameId}</td>
                <td>{e.latitudeAirport}</td>
                <td>{e.nameAirport}</td>
                <td>{e.nameCountry}</td>
                <td>{e.phone}</td>
                <td>{e.timezone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default AirPorts;