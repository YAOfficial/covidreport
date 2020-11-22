import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import ListGroup from 'react-bootstrap/ListGroup'
import L from 'leaflet';
import Cards from "components/content"
import Card2 from "components/content2"
import ReactDom from "react-dom";
import Layout from 'components/Layout';
import axios from 'axios';
import Map from 'components/Map';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';
import { doc } from 'prettier';
import Card from 'react-bootstrap/Card'
const LOCATION = {
  lat:  -3,
  lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 3;


const IndexPage = () => {
 
  const mapRef = useRef();

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
  
    setInterval(function () {
      map.invalidateSize();
   }, 100);
  
  
    let response;

    try {
      response = await axios.get('https://corona.lmao.ninja/v2/countries');
    } catch(e) {
      console.log(`Failed to fetch countries: ${e.message}`, e);
      return;
    }

    const { data = [] } = response;
   
const hasData = Array.isArray(data) && data.length > 0;

      
if ( !hasData ) return;
let spinnerWrapper = document.querySelector('.spinner-wrapper');
window.addEventListener('load', function () {
  // spinnerWrapper.style.display = 'none';
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});


if(spinnerWrapper){
spinnerWrapper.parentElement.removeChild(spinnerWrapper);
}

document.body.style.backgroundColor ="rgb(1, 15, 36)"
document.getElementById("main").style.display="initial"
document.getElementById("tests").innerHTML = "Hover over a circle on the map"


  let arr = Object.values(data).map(({todayCases, country}) => 
  `${country} + ${todayCases}`
);
let deathy = Object.values(data).map(({deaths,  country}) => 
  `${country} + ${deaths}` 
);
let deathyTot = Object.values(data).map(({deaths}) => 
deaths
);
let caseyyTot = Object.values(data).map(({cases}) => 
cases
);
let recovyTot = Object.values(data).map(({recovered}) => 
recovered
);
let testyTot = Object.values(data).map(({tests}) => 
tests
);
let countryTot = Object.values(data).map(({countryInfo}) => 
    countryInfo
    );
   
    let flagTot = Object.values(data).map(({countryInfo}) => 
    countryInfo
    );
   
    
    

       
          
            class Appo2 extends React.Component {
   
              render() {
               
                return (
                  <>
                  {deathy.map(item => <Cards  value={item} />)}
                  </>
                );
              }
            }
            
           

            ReactDom.render(<Appo2/>, document.getElementById("deat"))
            class Appo3 extends React.Component {
   
              render() {
               
                return (
                  <>
                  {arr.map(item => <Cards  value={item} />)}
                  </>
                );
              }
            }
            
           

            ReactDom.render(<Appo3/>, document.getElementById("container1"))
               
               

function RenderLineChart() {
  return (
    
      <ResponsiveContainer width="100%" height='100%' width='100%'>
  <LineChart  data={data}>
  
   <Line type="monotone" dataKey="deaths" stroke="rgba(21, 142, 255, 0.541)" />
 
  <XAxis dataKey="country" stroke="white" />
  <YAxis stroke="white"  />
  <Tooltip id="tools" backgroundColor="blue"/>
   </LineChart>
   </ResponsiveContainer>

  )
};
ReactDom.render(<RenderLineChart />, document.getElementById("chartcont"));
function RenderLineChart2() {
  return (
    
      <ResponsiveContainer width="100%" height='100%' width='100%'>
        
  <LineChart  data={data}>
  
   <Line type="monotone" dataKey="cases" stroke="rgba(21, 142, 255, 0.541)" />
 
  <XAxis dataKey="country" stroke="white" />
  <YAxis stroke="white"  />
  <Tooltip id="tools" backgroundColor="blue"/>
   </LineChart>
   </ResponsiveContainer>

  )
};
ReactDom.render(<RenderLineChart2 />, document.getElementById("chartcont2"));

    
     
          

  let todc  = Math.max(...data.map(o => o.todayCases), 0)
  let oc = data.map(function(e) { return e.todayCases; }).indexOf(todc);
  const ac = data[oc].country
  let todd  = Math.max(...data.map(o => o.todayDeaths), 0)
  let od = data.map(function(e) { return e.todayDeaths; }).indexOf(todd);
  const ad = data[od].country
  let todt  = Math.max(...data.map(o => o.todayRecovered), 0)
  let ot = data.map(function(e) { return e.todayRecovered; }).indexOf(todt);
  const at = data[ot].country
 
  

 
 
  document.getElementById("todaynationc").innerHTML = ac
  document.getElementById("todaycase").innerHTML = todc.toLocaleString()
  document.getElementById("todaynationd").innerHTML = ad
  document.getElementById("todaydeath").innerHTML = todd.toLocaleString()
  document.getElementById("todaynationr").innerHTML = at
  document.getElementById("todayrecovered").innerHTML = todt.toLocaleString()

  let totalD = deathyTot.reduce((a, b) => a + b, 0)
  document.getElementById("totald").innerHTML = totalD.toLocaleString()
  let totalC = caseyyTot.reduce((a, b) => a + b, 0)
  document.getElementById("totalc").innerHTML = totalC.toLocaleString()
  let totalR = recovyTot.reduce((a, b) => a + b, 0)
  document.getElementById("totalr").innerHTML = totalR.toLocaleString()
  let totalT = testyTot.reduce((a, b) => a + b, 0)
  document.getElementById("totalt").innerHTML = totalT.toLocaleString()

    
 
    // Ref - https://github.com/jesseokeya/Forbes400  / https://forbes400.herokuapp.com/
    
 
    
   
    

  

const geoJson = {
  type: 'FeatureCollection',
  features: data.map((country = {}) => {
    const { countryInfo = {} } = country;
    const { lat, long: lng } = countryInfo;
    const bill = {}
    

    return {
      type: 'Feature',
      properties: {
       ...country,
      },
      geometry: {
        type: 'Point',
        coordinates: [ lng, lat ]
      }
    }
  })
  }

  
  const geoJsonLayers = new L.GeoJSON(geoJson, {
 
    pointToLayer: (feature = {}, latlng) => {
      const { properties = {} } = feature;
      let updatedFormatted;
      let casesString;
   
      const {
        country,
        updated,
        cases,
        deaths,
        recovered,
        tests,
        
        todayCases,
      
      } = properties
     
      casesString = `${cases}`;
     
  
      if ( cases > 1000 ) {
        casesString = `${casesString.slice(0, -3)}k+`
      }
      if ( cases > 1000000 ) {
        casesString = `${casesString.slice(0, -5)}m+`
      }
     
  
      if ( updated ) {
        updatedFormatted = new Date(updated).toLocaleString();
      }
     
    
      const html = `
        <span id="billy" class="icon-marker">
        ${ casesString }
          <span class="icon-marker-tooltip">
          
            <h2>${country}</h2>
            <ul>
            <li>Last updated at: ${updatedFormatted}</li>
            </ul>
          </span>
        </span>
        `;
        let floga = Object.values(flagTot).map(({flag}) => 
    flag
    );       

        return L.marker( latlng, {
        icon: L.divIcon({

          className: 'icon',
      
          html
        }),
    
        riseOnHover: true,
      
      }).on('mouseover', function (e) {
        var index = data.map(function(e) { return e.country; }).indexOf(country);
        document.getElementById("contain").style.backgroundColor = "#022b61"
        document.getElementById("contain").style.backgroundImage= 'url(' + floga[index] + ')';
       document.getElementById("tests").innerHTML = cases.toLocaleString()
       document.getElementById("deaths").innerHTML = deaths.toLocaleString() 
       document.getElementById("country").innerHTML = country
       document.getElementById("hidt").innerHTML = "Cases"
       document.getElementById("hidd").innerHTML = "Deaths"
     
    })
    
     

    } 
  });geoJsonLayers.addTo(map)}
 

  
  
  
 
  const mapSettings = {
    
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
   
  };

  
  
  
 
  return (
   
    <Layout  id="home" pageName="home">
      <Helmet>
        <title >Home Page</title>
      </Helmet>
      <div id="container2" ><h1 id="sidehead">Todays Cases Update</h1> <br></br><div id="cont31"></div><div id="container1"></div></div>
    
     <Map  noWrap= "true" ref={mapRef} {...mapSettings}></Map>
    
    
       <div id="container3" ><h1 id="sidehead">Todays Deaths Update</h1> <br></br><div id="deat"></div></div>
    
    
    <div id="contain" >
    <div id="testBox1" >
    <h1 id="country"></h1>
    </div>
   
    <div id="testBox" >
      
      <h1 id="tests">Check wifi or wait for site to finish loading the  api data and run calculations </h1>
      <h2 id="hidt"></h2>
    
     
      <h1 id="deaths"></h1>
      <h2 id="hidd"></h2>
    </div>
    
      </div>
      <div id="bottomcont">
      <div id="sider">
      <h1  id="head">Total Deaths Global </h1>
     <p id="totald"></p>
      </div>
      <div id="sider">
      <h1  id="head">Total Cases Global </h1>
     <p id="totalc"></p>
      </div>
      <div id="sider">
      <h1  id="head">Total Tests Global </h1>
     <p id="totalt"></p>
      </div>
      <div id="sider">
      <h1  id="head">Total Recovered Global </h1>
     <p id="totalr"></p>
      </div>
</div>  
<div id="texthold2">
<h1 id="chartext">Deaths Per country</h1>
</div>
<div id="chartcont"></div>
<div id="contains">

<div id="container4">
      <h1  id="head1">Todays Highest Deaths  :</h1>
      <h3 id="todaynationd"></h3>
      <h3 id="todaydeath"></h3>
      </div> 
      <div id="container4">
      <h1  id="head1">Todays Highest Cases :</h1>
      <h3 id="todaynationc"></h3>
      <h3 id="todaycase"></h3>
      </div> 
      <div id="container6">
      <h1  id="head1">Todays Highest Recoveries :</h1>
      <h3 id="todaynationr"></h3>
      <h3 id="todayrecovered"></h3>
      </div> 
      </div>
      <div id="texthold2">
      <h1 id="chartext">Cases Per country</h1>
      </div>
<div id="chartcont2"></div>

    
     
     
      
     
   
    
 
 </Layout>
  );
};

export default IndexPage;
