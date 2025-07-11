<template>
    <div class="custom-select" @click="toggleDropdown">
      <div class="selected" :class="{ 'has-selected': selectedValue }">{{ selectedLabel || $t('customSelect.placeholder') }}</div>
      <ul v-if="dropdownOpen" class="dropdown">
        <li
          v-for="option in options"
          :key="option.value"
          @click.stop="selectOption(option)"
          class="dropdown-item"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref,computed } from 'vue'
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
  
  const dropdownOpen = ref(false)
  const selectedValue = ref('')
  const selectedLabel = ref('')
  
  const options = computed(() => [
    { value: 'general2', label: t('customSelect.generalInquiry')  },
    { value: 'support', label: t('customSelect.support') },
    { value: 'partnership', label: t('customSelect.partnership')},
    { value: 'other', label: t('customSelect.other')},
  ]);
  
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
  }
  
  const selectOption = (option: { value: string; label: string }) => {
    selectedValue.value = option.value
    selectedLabel.value = option.label
    dropdownOpen.value = false
  }
  </script>
  
  <style scoped>
  .custom-select {
    position: relative;
    /* width: 249.9994px; */ /* Remove or adjust width as needed, e.g., width: 100%; */
    width: 100%; /* Make it full width like the target image */
    height: 57px;
    cursor: pointer;
    user-select: none;
    font-family: Arial, sans-serif;
    font-size: 26px;
    /* border: 1px solid red; */
  }

  
  .selected {
    /* height: 57px; */
    padding: 10px 15.001px; /* Adjust padding */
    border: 1.0003px solid transparent; /* Remove default border */
    border-radius: 10px; /* Add border-radius for rounded corners */
    background: rgba(128,128,128,0.1); /* Light grey background like the target image */
    display: flex; /* To align text and arrow */
    justify-content: space-between; /* Push arrow to the right */
    align-items: center; /* Vertically align text and arrow */
    background-image: url('../../assets/index/箭头下.png');
    background-repeat: no-repeat;
    background-position: right 29px center ;
    background-size: 21px 14px;
    font-family: Source Han Sans SC;
font-weight: 400;
font-size: 26px;
color: #808080;
line-height: 44px;
        
  }

  .selected.has-selected {
    color: #000000; /* Color when an option is selected */
  }
  
  .selected::after {
    /*content: '▼'; /* Simple unicode arrow, you can replace with an SVG or image */
    font-size: 21.001px;
    color: #333; /* Arrow color */
  }
  
  .dropdown {
    position: absolute;
    top: calc(100% + 5px); /* Add a small gap between selected and dropdown */
    left: 0;
    right: 0;
    border: 1px solid #e0e0e0; /* Lighter border for the dropdown */
    background: white;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 10;
    border-radius: 10px; /* Rounded corners for the dropdown */
    box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Optional: add a subtle shadow */
  }
  
  .dropdown-item {
    padding: 12px 15px; /* Adjust padding */
    transition: background 0.2s, color 0.2s;
  }
  
  .dropdown-item:hover {
    background-color: black;
    color: white;
  }
  </style>
  