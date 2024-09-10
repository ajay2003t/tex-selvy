import { ref } from 'vue';

export function useImageSlider(totalImages) {
  const currentIndex = ref(0);

  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % totalImages;
  };

  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + totalImages) % totalImages;
  };

  return {
    currentIndex,
    nextSlide,
    prevSlide,
  };
}