const img = document.querySelector('img')
fetch('https://api.giphy.com/v1/gifs/translate?api_key=kNz4rhxdiTEePFuPQJXKYZltwUB2S8ae&s=dance')
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        img.src = response.data.images.original.url
    })