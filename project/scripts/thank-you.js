
import('./common.js');

function displayorder(){
    const url = window.location.href;

    const urlQuery = url.split("?");
    const queryString = urlQuery[1];
    if(queryString){
        const keyValuePairs = queryString.split("&");

        const details = keyValuePairs.map((pair)=>{
            const [key, value] = pair.split("=");
            const decodedValue = decodeURIComponent(value).replace(/\+/g, ' ');
            return `${key}: ${decodedValue}`;
        });

        document.querySelector("#orderDetails").innerHTML= details.join("<br>");
        
    }


}
document.addEventListener("DOMContentLoaded", displayorder);