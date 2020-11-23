# 🍃 Covid-19 DashBoard 

Project showcases graphs , charts, map & lists relevant to covid-19 

Built using Html, Css, Javascript, React, Gatsby, leaflet, Recharts & axios


# 🍃 Documentation 

# Api

Used the following api https://corona.lmao.ninja/  and with the help of axios got the data and saved it to variable like such
Example:
```
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
```
# MAP

Map was built using leaflet https://leafletjs.com/ , the code is too long to put here but i used the default map from the site

# Markers

Leaflet alllows markers to be placed using a lat lng value, i got the lat long lng value of each nation from the Api and used it on leaflet like such 
Example:
```
features: data.map((country = {}) => {
    const { countryInfo = {} } = country;
    const { lat, long: lng } = countryInfo;
    }
```
# Charts 

I used the Recharts framework https://recharts.org/en-US/, got the number of Cases/Deaths and used them as the data for the chart , code is too long too long/pointless to put here but i used the linechart component from the site

# Todays Cases/Deaths List

The lists were made by getting the daily Cases/Deaths and stringifying them with the name of the country like such
Example:
```
let TodaysDeaths = Object.values(data).map(({deaths,  country}) => 
  `${country} + ${deaths}` 
);
```

# Higest  Cases/Deaths/Recoveries

The numbers were made by getting the highest Cases/Deaths/Recoveries from the api , then getting their index and using it to find the name of the country as such 
Example:
```
let RecoveredV  = Math.max(...data.map(o => o.todayRecovered), 0)
  let indexOfRecoveredv = data.map(function(e) { return e.todayRecovered; }).indexOf(RecoveredV);
  const nationOfRecoveredV = data[indexOfRecoveredv].country
```

# Total current Cases/Deaths/Recoveries

List was made by getting all the Cases/DeathsRecoveries, adding them together and showing them as such
Example:
```
let allCases = Object.values(data).map(({cases}) => 
cases
);
let totalOfCases = allCases.reduce((a, b) => a + b, 0)
document.getElementById("totalOfCases").innerHTML = totalOfCases.toLocaleString()
```
# On Marker Click/Hover

The popup on marker Click/Hover was done using the .on  function on  the leaflet marker and then showing a div when it happens as such
Example:
```
L.MARKER.on('mouseover', function (e) { .... code that happens when you hover over marker }
L.MARKER.on('click', function (e) {  .... code that happens when you hover over marker }
```

# Finale

That is all if you wish to contribute feel free to send a pr , for any further info do contact me on linkedin 

Thanks BYE!!
