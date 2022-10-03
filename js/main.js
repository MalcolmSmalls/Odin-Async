const img = document.querySelector('img')
fetch('https://api.giphy.com/v1/gifs/search?api_key=kNz4rhxdiTEePFuPQJXKYZltwUB2S8ae&q=dance')
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        img.src = response.data[Math.floor(Math.random() * 50)].images.original.url
    })

const switchBtn = document.querySelector('button')

switchBtn.addEventListener('click', ()=> {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=kNz4rhxdiTEePFuPQJXKYZltwUB2S8ae&q=dance')
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        img.src = response.data[Math.floor(Math.random() * 50)].images.original.url
    })
})