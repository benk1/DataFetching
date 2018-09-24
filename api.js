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

   document.querySelector('#getCountryProperty').addEventListener('click', function(e) {
    e.preventDefault();
    getCountryProperties();
   });

    document.querySelector('#getRegion').addEventListener('click', function(e) {
        e.preventDefault();
        getRegion();
    });
    
 document.querySelector('#getPopulation').addEventListener('click', function(e){ 
    e.preventDefault();
    getPopulation();
 });

 document.querySelector('#getNames').addEventListener('click', function(e){ 
    e.preventDefault();
    getCountryNames();
 });
   
 document.querySelector('#Search').addEventListener('keyup', function(e){ 
    e.preventDefault();
    searchEngine();
 });

        function getCountryProperties(){
           
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                
                let output = "<h2>Country's Properties</h2>";
                countries.forEach((country) =>{
                    
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
                let container = document.querySelector("#searchResults");
                container.innerHTML = output;
            })
        }
        
        
        
    
        function getRegion(){
            
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let output = "<h2>Names of the Regions</h2>";
                countries.forEach(function(country) {
                    output += `${country.name} ---> ${country.region} <br /> ` 
                    
                    
                });
                
                let container = document.querySelector("#searchResults");
                container.innerHTML = output;
            })
        }
       
        
        
       
        
        function getCountryNames(){
    
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let output = "<h2>Countries with their Names</h2>";
                countries.forEach(function(country) {
                    
                    output += `${country.name}  <br /> ` ;
                    
                    
                });
                
                let container = document.querySelector("#searchResults");
                container.innerHTML = output;
            })
        }
        
        function getPopulation(){
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let output = "<h2>Countries with their Population </h2>";
                countries.forEach((country) => {
                    output += `${country.name}--->${country.population} <br /> ` 
                    
                    
                });
                
                let container = document.querySelector("#searchResults");
                container.innerHTML = output;
            })
        } 

        function searchEngine(){
            wrapper.innerHTML = "";
            
             let inputText = document.querySelector('#Search');
            let inputValue = inputText.value.toLowerCase();
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {

                let output = "";
             let results = countries.filter(country => country.name.toLowerCase().startsWith(inputValue));
                 
             results.forEach((result) =>  {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                const image = document.createElement('img');
                let img = `<img src="${result.flag}"/>`;
                
             //output += `${result.name}  ${img},${result.region}, ${result.population} <br /> `;
             singleDiv.innerHTML += ` ${result.name}  ${img}  ${result.region}  `;
            wrapper.appendChild(singleDiv);
             });         
            // let container = document.querySelector("#searchResults");
            // container.innerHTML = output;
             
            
            });
            
        }
       
      

      /* if(getCountryNames.checked === true){
            
            getCountryNames();
        }else if(getRegion.checked === true){
            
            getRegion();
        }else if(getPopulation.checked === true) {
            
            getPopulation();
        }else if(getCountryProperty.checked === true) {
            getCountryProperties();
        }else if(searchEngine.checked === true) {
            searchEngine();
        }*/