{
  function showImage(index) {
    thumbnails.forEach((thumb) => {
      thumb.classList.remove("active");
    });
  
    currentIndex = index;

    mainImage.classList.remove("fade");
  
    // アニメーションを再実行
    void mainImage.offsetWidth;
  
    mainImage.src = thumbnails[currentIndex].src;
    thumbnails[currentIndex].classList.add("active");
    mainImage.classList.add("fade");
  }


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
  
  images.forEach((image) => { 
    const thumbImage = document.createElement('img');
    thumbImage.src = image.src;
    thumbImage.classList.add('thumbnail');
    thumbnailContainer.appendChild(thumbImage);
  });

  const mainImage = document.querySelector('.main-image');
  const prevBtn = document.getElementById('prev-button');
  const nextBtn = document.getElementById('next-button');
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails[0].classList.add('active');

  let currentIndex = 0;

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      showImage(index);

      thumbnails.forEach((thumb) => {
        thumb.classList.remove('active')
      });

      currentIndex = index;

      mainImage.src = thumbnail.src;
      thumbnail.classList.add('active');
    })
  })


  nextBtn.addEventListener('click', () => {
    thumbnails.forEach((thumb) => {
      thumb.classList.remove('active')
    });

    currentIndex++;
    if (currentIndex > thumbnails.length - 1) {
      currentIndex = 0;
    } 
    mainImage.src = thumbnails[currentIndex].src;
    thumbnails[currentIndex].classList.add('active');
    
  })


  prevBtn.addEventListener('click', () => {
    thumbnails.forEach((thumb) => {
      thumb.classList.remove('active')
    });
    
    if (currentIndex === 0) {
      currentIndex += thumbnails.length;
    }
    currentIndex--;

    mainImage.src = thumbnails[currentIndex].src;
    thumbnails[currentIndex].classList.add('active');
  })

}