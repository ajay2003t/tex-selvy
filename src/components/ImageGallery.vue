<template>
    <section class="image-gallery">
      <header class="gallery-header">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3181379835e9b3b2bbbd323ed1435bb8ace1f0bde2e7a8567c5c87520acf8336?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="" class="logo" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfc7018d0b57d2c12d8a090b3120b7cc75c2a0fe0f07ee43ce50abde572bae0e?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="Main gallery image" class="main-image" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/554387fab865632851e7e4d37c9f9e20d0985dad40b19917ecf01a2a3c08ea58?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="Secondary gallery image" class="secondary-image" />
      </header>
      <main class="gallery-content">
        <div class="image-grid">
          <div class="grid-item">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf5df177b7d8db92d71ada21bef3469708bbcbac8e7ceebb3272d60b7b66e0a0?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="Gallery item 1" class="grid-image" />
          </div>
          <div class="grid-item">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c593fdde3b0dc36a849b2549438dfe9668f407889928ac4c2b0c3ed7a6bec6e2?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="Gallery item 2" class="grid-image small" />
          </div>
          <div class="grid-item">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a598b0c76b004294bf62d21cc74ab4495510fc72eda1f36d2442f4efa3c0e0af?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="Gallery item 3" class="grid-image" />
          </div>
          <div class="grid-item">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9c0d5b18e9dc79e46bb346616dadeeac285f7b834b028071efca509392834db?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="Gallery item 4" class="grid-image" />
          </div>
        </div>
      </main>
      <footer class="gallery-footer">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b917b82318b60dde07c918af616a03b2399bc951d1525f54eabfd7f40c6521ec?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="" class="footer-icon" />
      </footer>
    </section>
  </template>
  
  <style scoped>
  .image-gallery {
    display: flex;
    align-items: center;
    gap: 37px;
    flex-wrap: wrap;
    flex-wrap: nowrap;
    margin: 4em 7em;
  }
  
  .gallery-header {
    align-self: stretch;
    display: flex;
    gap: 40px 53px;
    margin: auto 0;
  }
  
  .logo {
    aspect-ratio: 0.6;
    object-fit: contain;
    object-position: center;
    width: 15px;
    margin: auto 0;
  }
  
  .main-image {
    aspect-ratio: 1.82;
    object-fit: contain;
    object-position: center;
    width: 144px;
    max-width: 100%;
  }
  
  .secondary-image {
    aspect-ratio: 1.57;
    object-fit: contain;
    object-position: center;
    width: 96px;
    align-self: start;
  }
  
  .gallery-content {
    align-self: stretch;
    flex-grow: 1;
    flex-basis: auto;
  }
  
  .image-grid {
    gap: 20px;
    display: flex;
  }
  
  .grid-item {
    width: 25%;
  }
  
  .grid-image {
    aspect-ratio: 1.78;
    object-fit: contain;
    object-position: center;
    width: 100%;
    max-width: 100%;
  }
  .footer-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 32px;
    align-self: stretch;
    margin: auto 0;
  }
  
  @media (max-width: 991px) {
    .gallery-content {
      max-width: 100%;
    }
  
    .image-grid {
      flex-direction: column;
      align-items: stretch;
      gap: 40px;
    }
  
    .grid-item {
      width: 100%;
    }
  
    .grid-image {
      width: 100%;
      margin: 0;
    }
  }
  </style>