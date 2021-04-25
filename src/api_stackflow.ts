const fetch = require("node-fetch"); 

function get_stackflow(method: string, library: string){

    //data is sorted based on "votes"
    let api_url="https://api.stackexchange.com/2.2/questions?order=asc&sort=votes&tagged=api%3B" + method + "%3B" + library + "&site=stackoverflow"   
    console.log("\n" , "METHOD: ", method.toUpperCase() ,"\n", "LIBRARY:", library.toUpperCase(), "\n")

    getapi(api_url);
    
    async function getapi(url: string){ 
        
        const response =await fetch(url); //store fetch data in "response"
        var data = await response.json(); //store "response" in form of Json

        let i =0;
        let n =0;

        while(i<5){

            let item = data.items[n];
            
            if (item!=null && item.is_answered==true){
                return item.link;
                n++;i++;
            }
            else if(item.is_answered==false){
                n++;
            }
            else{
                return 'We are sorry, Stack Deficiency!'
                break;
            };
        };
    };
};

export default get_stackflow;