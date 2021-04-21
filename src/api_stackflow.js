//install npm i node-fetch --save

const fetch = require("node-fetch"); 

var method=""
var library=""

function get_stackflow(method, library){

    //data is sorted based on "votes"
    api_url="https://api.stackexchange.com/2.2/questions?order=asc&sort=votes&tagged=api%3B" + method + "%3B" + library + "&site=stackoverflow"   
    console.log("\n" , "METHOD: ", method.toUpperCase() ,"\n", "LIBRARY:", library.toUpperCase(), "\n")
    
    getapi(api_url);
    
    async function getapi(url){ 
        
        const response =await fetch(url); //store fetch data in "response"
        var data = await response.json(); //store "response" in form of Json

        // console.log(data); //see json file

        // it will print top 5 Q's title
        for (let i = 0; i < 5; i++){
            var title = data.items[i].title;
            console.log("Title",i+1 ,": ", title)
        }
    }
}

get_stackflow("post","java");