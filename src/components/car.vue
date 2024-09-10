<template>
  <section class="image-slider">
    <div class="slider-container">
      <button class="nav-button prev" aria-label="Previous image" @click="prevSlide">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3181379835e9b3b2bbbd323ed1435bb8ace1f0bde2e7a8567c5c87520acf8336?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="" class="nav-icon" />
      </button>
      <div class="image-grid">
        <transition-group name="fade">
          <img
            v-for="(image, index) in visibleImages"
            :key="image.id"
            :src="image.src"
            :alt="image.alt"
            class="slider-image"
            :class="{ active: index === currentIndex }"
          />
        </transition-group>
      </div>
      <button class="nav-button next" aria-label="Next image" @click="nextSlide">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d18d44c6e20963427cee5d44d41a33986528ac791c2c5f643202faf3b8d9d946?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a" alt="" class="nav-icon" />
      </button>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useImageSlider } from '../useImageSlider';

export default {
  name: 'ImageSlider',
  setup() {
    const images = [
      { id: 1, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bb32bb2c814e22358eac775808ad72915f36f73c061cf7bc50e5c46c8eee7c79?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 1' },
      { id: 2, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2cead267a0a88ad6923c031e7bdb5125ba82ace0788521df5f4cfe29657031dd?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 2' },
      { id: 3, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/92f79809bcbb4a5ead4222374f1667ba59025026af5f414fb6302641d8165f20?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 3' },
      { id: 4, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/88384a8221885d17fe13ca05e37dae694f1cc29f657d2db305cae191503250af?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 4' },
      { id: 5, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb26ec13819738b548981c0a2db7e1aa7cc2e9838a84eb47c66e72cfe74776f4?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 5' },
      { id: 6, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/175e5093d2d96f74927a10978ff104a440c7bb1282018042af4437d54b11a3f9?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 6' },
    ];

    const { currentIndex, nextSlide, prevSlide } = useImageSlider(images.length);

    const visibleImages = computed(() => {
      const start = currentIndex.value;
      const end = (start + 6) % images.length;
      if (start < end) {
        return images.slice(start, end);
      } else {
        return [...images.slice(start), ...images.slice(0, end)];
      }
    });

    return {
      visibleImages,
      currentIndex,
      nextSlide,
      prevSlide,
    };
  },
};
</script>

<style scoped>
.image-slider {
  display: flex;
  flex-direction: column;
}

.slider-container {
  border-radius: 10px;
  background-color: #f5f1ea;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 59px 29px;
}

@media (max-width: 991px) {
  .slider-container {
    padding: 0 20px;
  }
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-icon {
  width: 15px;
  height: 25px;
  object-fit: contain;
}

.image-grid {
  display: flex;
  gap: 11px;
  flex-wrap: wrap;
  flex-grow: 1;
}

.slider-image {
  width: 203px;
  height: 203px;
  object-fit: contain;
  max-width: 100%;
  transition: opacity 0.5s ease-in-out;
}

.slider-image:nth-child(2),
.slider-image:nth-child(5) {
  width: 204px;
  height: 204px;
}

.next .nav-icon {
  width: 32px;
  height: 32px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>