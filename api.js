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
    //e.preventDefault();
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

 //document.querySelector('#getFreq').addEventListener('click', function(e){ 
   // e.preventDefault();
    //getCountryFreq();
 //});

        function getCountryProperties(){
            wrapper.innerHTML = "";
             let inputText = document.querySelector('#getCountryProperty');
            let inputValue = inputText.value.toLowerCase();
           
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                
                
                //let output = "<h2>Country's Properties</h2>";
                countries.forEach((country) =>{
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                
                let lan = country.languages;
                for(let i = 0; i < lan.length; i++) {
                    let  lanValue = lan[i].name;
               
                

                     /* output += `${country.name} --> ${country.capital} <br /> ` */
                   singleDiv.innerHTML  += `
                     <ul>
                       <li>Country:${country.name}</li>
                       <li>Capital:${country.capital}</li>
                       <li>Language:${lanValue}</li>
                       <li>Timezone:${country.timezone}</li>
                       <li>Nativename:${country.nativeName}</li>
                       </ul>
                   `;
                   wrapper.appendChild(singleDiv);
                }
                  });
                  
                //let container = document.querySelector("#searchResults");
                        //container.innerHTML = output;
            })
        }
        
        
        
    
        function getRegion(){
            wrapper.innerHTML = "";
            
            let inputText = document.querySelector('#getRegion');
            let inputValue = inputText.value.toLowerCase();
            
             fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let results = countries.filter(country => country.name.toLowerCase().includes(inputValue));
                
                results.forEach((result) =>  {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                //const image = document.createElement('img');
                //let img = `<img src="${result.flag} "/>`;
                singleDiv.innerHTML += ` ${result.name} Belongs to  ${result.region} continent `;
                wrapper.appendChild(singleDiv);
                    
                     });
                
            })
        }
        
        
       
        
        function getCountryNames(){
            wrapper.innerHTML = "";
            let inputText = document.querySelector('#getNames');
            let inputValue = inputText.value.toLowerCase();
            
             fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let results = countries.filter
                (country => country.capital.toLowerCase().includes(inputValue));
                
                results.forEach((result) =>  {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                const image = document.createElement('img');
                let img = `<img src="${result.flag} "/>`;
                singleDiv.innerHTML += ` ${result.name}` + img ;
                wrapper.appendChild(singleDiv);
                    
                     });
                
            })
        }
        
        function getPopulation(){
            wrapper.innerHTML = "";
            let inputText = document.querySelector('#getPopulation');
            let inputValue = inputText.value.toLowerCase();
            
             fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                let results = countries.filter(country => country.name.toLowerCase().includes(inputValue));
                
                results.forEach((result) =>  {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                //const image = document.createElement('img');
                //let img = `<img src="${result.flag} "/>`;
                singleDiv.innerHTML += ` ${result.name} Has --> ${result.population}  habitants `;
                wrapper.appendChild(singleDiv);
                    
                     });
                
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
             let results = countries.filter(country => country.name.toLowerCase().includes(inputValue)
             || country.capital.toLowerCase().includes(inputValue) || country.region.toLowerCase().includes(inputValue));
             results.forEach((result) =>  {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                const image = document.createElement('img');
                let img = `<img src="${result.flag}"/>`;
                
             //output += `${result.name}  ${img},${result.region}, ${result.population} <br /> `;
             singleDiv.innerHTML += ` ${result.name}'s  capital city is  ${result.capital} and belongs to ${result.region} continent`  + img;
            wrapper.appendChild(singleDiv);
             });         
            // let container = document.querySelector("#searchResults");
            // container.innerHTML = output;
              });
             }

            /* function getCountryFreq(){
                let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
                let countryObj = [];
                
    
                fetch(url)
                .then((response) => response.json())
                .then((countries) => {
                    for(letter of letters) {
               const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                        let times = countries.filter(country => letter === country[0]);
                        countryObj.push({letter,times:times.length})   
                    }
                    countryObj.sort(function(a,b){
                        return b.times - a.times;
                    });
                       return countryObj[0];
                });
                
            }*/
            


            
      

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