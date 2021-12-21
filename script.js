const getWeather=()=>{
    var city =document.querySelector('input').value;
    var cityDiv=document.querySelector('.city');
    var temp =document.querySelector('.temper');
    var desc =document.querySelector('.desc');
    var imgDiv=document.querySelector('.image');
    
    
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a5c85643e48aa9366371f1f89f1a1dc`)
   
    .then(response=>{
        console.log(response);
        document.querySelector('.weatherContainer').style.display= 'flex';
        cityDiv.innerHTML=city;
        temp.innerHTML=`${Math.round(response['data']['main']['temp'])-273}<sup>&deg;C</sup>`
        desc.innerHTML=`${response['data']['weather'][0]['description']}`
        
        while (imgDiv.firstChild) imgDiv.firstChild.remove();
        var image=document.createElement('img');
        image.src=`http://openweathermap.org/img/w/${response['data']['weather'][0]['icon']}.png`
        imgDiv.append(image);
    })
    .catch(error=>{
        console.log('Error',error)
    });

    return false;

}