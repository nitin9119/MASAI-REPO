

let search_div=document.getElementById("search").value; 
let news_div=document.getElementById("newscont");


async function searchNews(){
    news_div.innerHTML=null;
    let keywrd=document.getElementById("search").value;

    try{
        let res = await fetch(`https://newsapi.org/v2/everything?q=${keywrd}&apiKey=8c1d24ab14f444f792f35603483b7acb`);

        let data = await res.json();
        console.log('data :>> ', data);
        var result = data.articles;
    }
    catch(error){
        console.log('error :>> ', error);
    }





    result.forEach(ele => {

        
        let div1=document.createElement("div");
        div1.setAttribute("class","searchres");
        

        let p2=document.createElement("p");
        p2.innerText=ele.title;
        

        let img2=document.createElement("img");
        img2.src=ele.urlToImage;
        img2.setAttribute("class","resimage");
        // p1.style.backgroundSize="contain";

        div1.append(img2,p2);
        news_div.append(div1);
    })
}