let search_div=document.getElementById("search").value; 
    let news_div=document.getElementById("newscont");

    async function homePg(){

        news_div.innerHTML=null;
        let res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8c1d24ab14f444f792f35603483b7acb");
        let data = await res.json();
        console.log('data :>> ', data);
         let news_res=data.articles;
         
        

        news_res.forEach(element => {
            let div=document.createElement("div");
            div.setAttribute("class","topstory");
            div.addEventListener("click",viewnews);
            function viewnews(){
                news_div.innerHTML=null;
                let news_dv=document.createElement("div");
                news_dv.setAttribute("class","nwsd");

                let imgdv=document.createElement("div");
                let imag=document.createElement("img");
                imag.setAttribute("class","newsimg");
                imag.src=element.urlToImage;


                let titl=document.createElement("h1");
                titl.innerText=element.title;
                let auth=document.createElement("h5")
                auth.innerText=element.author;
                let contnt=document.createElement("p");
                contnt.innerText=element.content;
                let des=document.createElement("h3");
                des.innerText=element.description;
                news_dv.append(imag,titl,auth,des,contnt);
                news_div.append(news_dv)

                //export {element}
            }

            let p1=document.createElement("p");
            p1.innerText=element.title;
            

            let img1=document.createElement("img");
            img1.src=element.urlToImage;
            img1.setAttribute("class","image");
            // p1.style.backgroundSize="contain";

            div.append(img1,p1);
            news_div.append(div);
            
        });

        // let div
    }

   homePg();