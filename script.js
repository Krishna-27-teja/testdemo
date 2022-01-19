//rest countries 
//output of this api is an array of json objects 
//we have 4 steps in performing the operation

//step1: create a XHR object
var request=new XMLHttpRequest();

//step2 Create a connection or extract the information
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//step 3 : sending the request connection
request.send();

//step 4  once the data successfully loaded for every event we need a function
//data coming from the server is of type string 
//we have to convert string to object(JSON)
request.onload=function(){
    var data=JSON.parse(request.response);
    
    for(i=0;i<data.length;i++){
        res=[];
        nam= data[i]["name"]
        res.push(nam)
        region= data[i]["region"]
        res.push(region)
        s_reg= data[i]["subregion"]
        res.push(s_reg)
        population= data[i]["population"]
        res.push(population)
        fla=data[i]["flag"]
        res.push(fla)
        console.log(res)

    }

}

