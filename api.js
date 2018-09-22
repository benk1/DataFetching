const url = 'https://restcountries.eu/rest/v2/all';
let wrapper = document.createElement('div');
wrapper.id = "wrapperId";
document.body.appendChild(wrapper);

function randomHexaNumberGenerator(num){
    let result = "#";
    for(let i = 0; i < 6; i++){
    result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
    }

    document.querySelector('#getCountryName').addEventListener('click', getCountryNames());
    document.querySelector('#getRegion').addEventListener('click', getRegion());
    document.querySelector('#getPopulation').addEventListener('click', getPopulation());
   

   
    

        function getCountryNames(){
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let output = "<h2>Names of the Countries</h2>";
                countries.forEach(function(country) {
                   /* output += `${country.name} --> ${country.capital} <br /> ` */
                   output += `
                     <ul>
                       <li>Country:${country.name}</li>
                       <li>Capital:${country.capital}</li>
                       <li>Language:${country.language}</li>
                       <li>Timezone:${country.timezone}</li>
                       <li>Nativename:${country.nativeName}</li>
                       
                     </ul>
                   `;
                    
                });
                document.querySelector("#getCountryName").innerHTML = output;
            })
        }
        wrapper.innerHTML = "";
        getCountryNames();
       
        
    
        function getRegion(){
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let output = "<h2>Names of the corresponding Regions</h2>";
                countries.forEach(function(country) {
                    output += `${country.region} <br /> ` 
                    
                    
                });
                document.querySelector("#getRegion").innerHTML = output;
            })
        }
        getRegion();
        wrapper.innerHTML = "";

        
        function getPopulation(){
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let output = "<h2>Names of the Countries with their Population</h2>";
                countries.forEach(function(country) {
                    output += `${country.name} ---->${country.population} <br /> ` 
                    
                });
                document.querySelector("#getPopulation").innerHTML = output;
            })
        }
        getPopulation();