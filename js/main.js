let searchInput = document.querySelector('#search')
let searchVal = searchInput.value 
searchVal = "dance"
let searchBtn = document.querySelector('#searchBtn')
searchBtn.addEventListener('click', () => {
    searchVal = searchInput.value
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=kNz4rhxdiTEePFuPQJXKYZltwUB2S8ae&q=${searchVal}`)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        img.src = response.data[Math.floor(Math.random() * 50)].images.original.url
    })
})

const img = document.querySelector('img')
fetch(`https://api.giphy.com/v1/gifs/search?api_key=kNz4rhxdiTEePFuPQJXKYZltwUB2S8ae&q=${searchVal}`)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        img.src = response.data[Math.floor(Math.random() * 50)].images.original.url
    })

const switchBtn = document.querySelector('#moreSmax')

switchBtn.addEventListener('click', ()=> {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=kNz4rhxdiTEePFuPQJXKYZltwUB2S8ae&q=${searchVal}`)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        img.src = response.data[Math.floor(Math.random() * 50)].images.original.url
    })
})
