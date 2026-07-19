{
  const images = [
  {
    src: "images/dog1.avif",
    comment: "スマホばっか、いじるなよ〜",
  },
  {
    src: "images/dog2.avif",
    comment: "遊ぼうよ！",
  },
  {
    src: "images/dog4.avif",
    comment: "おやつまだ？",
  },
  {
    src: "images/dog5.avif",
    comment: "散歩に行きたい！",
  },
  {
    src: "images/dog7.avif",
    comment: "今日も元気！",
  },
  {
    src: "images/dog8.avif",
    comment: "眠くなってきた…",
  },
  {
    src: "images/dog9.jpg",
    comment: "なでてほしいな🐶",
  },
];

  const thumbnailContainer = document.querySelector('.thumbnails-container');
  const mainImage = document.querySelector('.main-image');
  const prevBtn = document.getElementById('prev-button');
  const nextBtn = document.getElementById('next-button');
  let currentIndex = 0;

  function setImages(index) {
    currentIndex = index;

    const comment = document.querySelector('.comment');
    mainImage.src = images[index].src; // メイン画像のセット
    comment.textContent = images[index].comment; // コメントのセット

    thumbnails.forEach((thumb) => {
      thumb.classList.remove("active");
    });

    thumbnails[index].classList.add("active");
  }

  // 画像の配列の展開
  images.forEach((image) => { 
    const thumbImage = document.createElement('img');
    thumbImage.src = image.src;
    thumbImage.classList.add('thumbnail');
    thumbnailContainer.appendChild(thumbImage);
  });

  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails[0].classList.add('active');
  

  // サムネイル画像がクリックされたら
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      setImages(index);
    })
  })

  // 次ボタン
  nextBtn.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex > thumbnails.length - 1) {
      currentIndex = 0;
    } 
    setImages(currentIndex);
  })


  prevBtn.addEventListener('click', () => {
    currentIndex--;
    
    if (currentIndex < 0) {
      currentIndex = thumbnails.length - 1;
    }
    
    setImages(currentIndex);
  })

}