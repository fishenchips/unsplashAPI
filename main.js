//function to get random pic from unsplash
function randomPic () {
    
    // Create request object
    const req = new XMLHttpRequest();

    //give API key and obtain picture ( HAR LAGT IN 6 ST random BIlder (count=6))
    req.open("get", "https://api.unsplash.com/photos/random?count=6&client_id=bz1ptcx847az6rT-Lun7mG4Z__2SWEiCxWBHV1Xihi4")
    //send the request
    req.send();
    


    //hämta datan från API
    req.onload = () =>{
        const data = JSON.parse(req.response)//vart kommer response ifrån?   RESPONSE ÄR ETT OBJEKT FRÅN API
        console.log(data)
        console.log(data[0].urls.small)
        
        //const picOne = data[0].urls.small;
        //const picTwo = data[1].urls.small;

        //nedan skapar picOne och picTwo separat - MEN JAG VILL ATT ALLA 
        //document.querySelector(".pic1").src = picOne;
        //document.querySelector(".pic2").src= picTwo;

        //loopa igenom data[i] och skapa en img tagg för varje url.
        data.map(  (i)=> {
            console.log(i.urls.small)
            const dataSrc = i.urls.small
            document.querySelector(".images").innerHTML += `
            <img src="${dataSrc}">
            `
        }  )

    }


}

document.querySelector("button").addEventListener("click", randomPic);