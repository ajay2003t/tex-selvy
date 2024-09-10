<template>
    <article class="stat-card">
      <img :src="icon" :alt="title" class="stat-icon" />
      <h3 class="stat-number">
        <span class="number-highlight">{{ number }}</span>
        <span class="number-title">{{ title }}</span>
      </h3>
      <p class="stat-description">{{ description }}</p>
    </article>
  </template>
  
  <script>
  export default {
    name: 'StatCard',
    props: {
      icon: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .stat-card {
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 25px;
    flex: 1;
  }
  
  .stat-icon {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  
  .stat-number {
    color: rgba(210, 93, 56, 1);
    font-size: 17px;
    margin-top: 25px;
  }
  
  .number-highlight {
    font-family: 'Spectral SC', -apple-system, Roboto, Helvetica, sans-serif;
    font-weight: 500;
  }
  
  .number-title {
    font-family: 'Magra', -apple-system, Roboto, Helvetica, sans-serif;
  }
  
  .stat-description {
    color: rgba(0, 0, 0, 1);
    font-size: 13px;
    line-height: 18px;
    font-family: 'Outfit', sans-serif;
    margin-top: 10px;
  }
  
  @media (max-width: 991px) {
    .stat-card {
      margin-top: 40px;
    }
  }
  </style>