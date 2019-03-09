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

    getCountryProperties();
    
   document.querySelector('#getCountryProperty').addEventListener('click', function(e) {
    //e.preventDefault();
    getCountryProperties();
   });

    document.querySelector('#getRegion').addEventListener('click', function(e) {
        e.preventDefault();
        getRegion();
    });
    
 document.querySelector('#getCapital').addEventListener('click', function(e){ 
    e.preventDefault();
    getCapital();
 });

 document.querySelector('#getCapital2').addEventListener('click', function(e){ 
    e.preventDefault();
    getCapitalDesc();
 });

 document.querySelector('#getNames').addEventListener('click', function(e){ 
    e.preventDefault();
    getCountryNames();
 });
   
 document.querySelector('#Search').addEventListener('keyup', function(e){ 
    e.preventDefault();
    searchEngine();
 });

 document.querySelector('#getNames2').addEventListener('click', function(e){ 
    e.preventDefault();
    getCountryNames2();
 });

 

        function getCountryProperties(){
            wrapper.innerHTML = "";
             let inputText = document.querySelector('#getCountryProperty');
            let inputValue = inputText.value.toLowerCase();
           
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                
                countries.forEach((country) =>{
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                let lang = country.languages[0].name;
                let currency = country.currencies[0].name;  
                    /* output += `${country.name} --> ${country.capital} <br /> ` */
                    singleDiv.innerHTML  += `
                       Country:${country.name}<br />
                       Capital:${country.capital}<br />
                       Language:${lang}<br />
                       Timezone:${country.timezones[0]}<br />
                       Nativename:${country.nativeName}<br />
                       Currency:${currency}<br />   
                   `;
                     wrapper.appendChild(singleDiv);
                   });
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
                
                let results = countries.filter(country => country.name.toLowerCase());
               
                results.forEach((result) =>  {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                const image = document.createElement('img');
                let img = `<img src="${result.flag} "/>`;
                singleDiv.innerHTML += ` ${result.name}` + img ;
                wrapper.appendChild(singleDiv);
                    
                     });
                 });
        }

        function getCountryNames2(){
            
            wrapper.innerHTML = "";
            let inputText = document.querySelector('#getNames2');
            let inputValue = inputText.value.toLowerCase();
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
                
               const namesArray = countries.map(country => {
               return country.name 
            
                });
            namesArray.reverse().forEach(countryName => {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                 singleDiv.innerHTML += ` ${countryName}`  ;
                wrapper.appendChild(singleDiv);
                
            });
           });
         }
                
                
    

        
        function getCapital(){
            wrapper.innerHTML = "";
            let inputText = document.querySelector('#getCapital');
            let inputValue = inputText.value.toLowerCase();
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
               const capitalArray = countries.map(country => {
               
               return country.capital
               
            });
            capitalArray.sort().forEach(countryCapital => {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                singleDiv.innerHTML += ` ${countryCapital}` ;
                wrapper.appendChild(singleDiv);
                
            });
           });
         }

         function getCapitalDesc(){
            wrapper.innerHTML = "";
            let inputText = document.querySelector('#getCapital2');
            let inputValue = inputText.value.toLowerCase();
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {
               const capitalArray = countries.map(country => {
               
               return country.capital
               
            });
            capitalArray.sort().reverse().forEach(countryCapital => {
                const singleDiv = document.createElement('div');
                singleDiv.id = "loopDiv";
                singleDiv.style.backgroundColor = randomHexaNumberGenerator();
                singleDiv.innerHTML += ` ${countryCapital}` ;
                wrapper.appendChild(singleDiv);
                
            });
           });
         }

        function searchEngine(){
            wrapper.innerHTML = "";
            
             let inputText = document.querySelector('#Search');
            let inputValue = inputText.value.toLowerCase();
            fetch(url)
            .then((response) => response.json())
            .then((countries) => {

                //let output = "";
             let results = countries.filter(country => {
                 return country.name.toLowerCase().includes(inputValue)
                    || country.capital.toLowerCase().includes(inputValue)
            });
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
            
              });
            }
            


            
      

      