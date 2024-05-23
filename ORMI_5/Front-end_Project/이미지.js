const loadMoreBtn = document.getElementById('loadMoreBtn');
const imageContainer = document.getElementById('imageContainer');
let imageCount = 0;

function loadImages(count) {
  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/v2/list?page=2&limit=6`;
    img.alt = `[
      {
        "id": "6",
        "author": "Alejandro Escamilla",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/tAKXap853rY",
        "download_url": "https://picsum.photos/id/6/5000/3333"
      },
      {
        "id": "7",
        "author": "Alejandro Escamilla",
        "width": 4728,
        "height": 3168,
        "url": "https://unsplash.com/photos/BbQLHCpVUqA",
        "download_url": "https://picsum.photos/id/7/4728/3168"
      },
      {
        "id": "8",
        "author": "Alejandro Escamilla",
        "width": 5000,
        "height": 3333,
        "url": "https://unsplash.com/photos/xII7efH1G6o",
        "download_url": "https://picsum.photos/id/8/5000/3333"
      },
      {
        "id": "9",
        "author": "Alejandro Escamilla",
        "width": 5000,
        "height": 3269,
        "url": "https://unsplash.com/photos/ABDTiLqDhJA",
        "download_url": "https://picsum.photos/id/9/5000/3269"
      },
      {
        "id": "10",
        "author": "Paul Jarvis",
        "width": 2500,
        "height": 1667,
        "url": "https://unsplash.com/photos/6J--NXulQCs",
        "download_url": "https://picsum.photos/id/10/2500/1667"
      },
      {
        "id": "11",
        "author": "Paul Jarvis",
        "width": 2500,
        "height": 1667,
        "url": "https://unsplash.com/photos/Cm7oKel-X2Q",
        "download_url": "https://picsum.photos/id/11/2500/1667"
      }
    ]`;
    imageContainer.appendChild(img);
  }
}

// Initial load of images
loadImages(3);

loadMoreBtn.addEventListener('click', function () {
  loadImages(3); // Load 3 more images on each click
});
