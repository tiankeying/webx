<template>
  <div class="device-preview">
    <div class="device-controls">
      <h3>设备预览测试</h3>
      <div class="device-buttons">
        <button v-for="device in devices" :key="device.name" @click="setDevice(device)"
          :class="{ active: currentDevice.name === device.name }" class="device-btn">
          {{ device.name }}
          <span class="device-size">{{ device.width }}x{{ device.height }}</span>
        </button>
      </div>
    </div>

    <div class="preview-container">
      <div class="device-frame" :style="{
        width: currentDevice.width + 'px',
        height: currentDevice.height + 'px',
        transform: `scale(${scale})`
      }">
        <iframe src="/home" :style="{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: currentDevice.borderRadius
        }"></iframe>
      </div>

      <div class="scale-controls">
        <label>缩放比例: {{ Math.round(scale * 100) }}%</label>
        <input type="range" min="0.1" max="1" step="0.1" v-model="scale">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const devices = ref([
  {
    name: 'Web Desktop',
    width: 1920,
    height: 1080,
    borderRadius: '0px',
    description: 'Web端标准桌面'
  },
  {
    name: 'Android',
    width: 960,
    height: 2569,
    borderRadius: '20px',
    description: 'Android 960dp'
  },
  {
    name: 'iOS',
    width: 960,
    height: 2569,
    borderRadius: '25px',
    description: 'iOS 960pt'
  },
  {
    name: 'Tablet',
    width: 1024,
    height: 768,
    borderRadius: '15px',
    description: '平板设备'
  },
  {
    name: 'Small Phone',
    width: 375,
    height: 667,
    borderRadius: '20px',
    description: '小屏手机'
  },
  {
    name: '4K Display',
    width: 3840,
    height: 2160,
    borderRadius: '0px',
    description: '4K大屏'
  }
])

const currentDevice = ref(devices.value[0])
const scale = ref(0.3)

const setDevice = (device) => {
  currentDevice.value = device
  // 根据设备尺寸自动调整缩放比例
  if (device.width > 1920) {
    scale.value = 0.2
  } else if (device.width > 1200) {
    scale.value = 0.4
  } else if (device.width > 800) {
    scale.value = 0.6
  } else {
    scale.value = 0.8
  }
}
</script>

<style scoped lang="scss">
.device-preview {
  padding: 20px;
  background: #f5f5f5;
  min-height: 100vh;
}

.device-controls {
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
  }
}

.device-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.device-btn {
  padding: 12px 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;

  &:hover {
    border-color: #F2BE45;
    transform: translateY(-2px);
  }

  &.active {
    border-color: #F2BE45;
    background: #F2BE45;
    color: white;
  }
}

.device-size {
  font-size: 12px;
  opacity: 0.8;
  margin-top: 4px;
}

.preview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.device-frame {
  border: 3px solid #333;
  border-radius: 20px;
  background: #000;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transform-origin: top center;
  transition: all 0.3s ease;
}

.scale-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  label {
    font-weight: 600;
    color: #333;
  }

  input[type="range"] {
    width: 200px;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
    outline: none;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #F2BE45;
      cursor: pointer;
    }
  }
}

/* 响应式调整 */
@media screen and (max-width: 768px) {
  .device-preview {
    padding: 10px;
  }

  .device-buttons {
    justify-content: center;
  }

  .device-btn {
    min-width: 100px;
    padding: 10px 15px;
  }

  .device-frame {
    max-width: 90vw;
    max-height: 70vh;
  }
}
</style>