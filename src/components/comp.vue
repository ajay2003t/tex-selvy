<template>
    <section class="image-gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['image-container', image.containerClass]"
      >
        <template v-if="image.backgroundSrc">
          <img
            loading="lazy"
            :src="image.backgroundSrc"
            class="background-image"
            alt=""
          />
          <img
            loading="lazy"
            :src="image.overlaySrc"
            class="overlay-image"
            :alt="image.overlayAlt"
          />
        </template>
        <img
          v-else
          loading="lazy"
          :src="image.src"
          :class="image.containerClass"
          :alt="image.alt"
        />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ImageGallery',
    data() {
      return {
        images: [
          {
            backgroundSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db2b9525395e1e82bbcb4140082ad960103c281e5091880b2d4869be25e51b4b?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
            overlaySrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3181379835e9b3b2bbbd323ed1435bb8ace1f0bde2e7a8567c5c87520acf8336?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
            containerClass: 'vertical',
            overlayAlt: 'Vertical overlay image',
          },
          {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0d31546e8b109ccb783fb4813b9d1c51c9932ab7cd5c24687971af17944aff5a?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
            alt: 'Gallery image 1',
            containerClass: 'gallery-image',
          },
          {
            src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b4493b1185a63d5da9de6f637cc1cdb48569a9ea81d0380216fe90443980344d?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
            alt: 'Gallery image 2',
            containerClass: 'gallery-image',
          },
          {
            backgroundSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6a613bf344351c6809bd0c157c985efdd10033b2bdf1e5e0ece575b352461084?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
            overlaySrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/50f5941c6ec6f3dd3e57f1d31ac24c3751aa2b1d331cf4c87dc4d22ab28a1d48?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
            containerClass: 'square',
            overlayAlt: 'Square overlay image',
          },
          {
            backgroundSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee55948fbbb458a3255118b82c0d61854c5faf92923405fdecc4056ea31bd56f?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
            overlaySrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dcfec50c1c15878cfbbaafe28cbb2d4dd262726f6ce79ca8b30a3636cbf60724?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a',
            containerClass: 'vertical last',
            overlayAlt: 'Vertical overlay image',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .image-gallery {
    display: flex;
    gap: 28px;
    flex-wrap: nowrap;
    margin-top: 5em;
  }
  
  .image-container {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }
  
  .vertical {
    aspect-ratio: 0.27;
    width: 73px;
    padding: 123px 15px;
  }
  
  .square {
    aspect-ratio: 1.428;
    padding: 1px 0;
  }
  
  .background-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .overlay-image {
    object-fit: contain;
    object-position: center;
  }
  
  .vertical .overlay-image {
    width: 15px;
    aspect-ratio: 0.6;
  }
  
  .square .overlay-image {
    width: 100%;
    aspect-ratio: 1.43;
  }
  
  .gallery-image {
    aspect-ratio: 1.43;
    object-fit: contain;
    object-position: center;
    width: 100%;
  }
  
  .last {
    aspect-ratio: 0.383;
    width: 103px;
    padding: 119px 21px;
  }
  
  .last .overlay-image {
    aspect-ratio: 1;
    width: 32px;
  }
  
  @media (max-width: 991px) {
    .vertical {
      padding: 100px 0;
    }
    .last {
      padding: 100px 20px;
    }
  }
  </style>