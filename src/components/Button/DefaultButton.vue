<template>
  <button
    :title="variantValue"
    :class="` bg-indigo-500 mx-2 py-1 px-3 ${colorValue} ${typeValue} ${variantValue} ` "
  >
    <slot />
  </button>
</template>
<script lang="ts">
const mapVariant: Map<string, string> = new Map()
mapVariant.set('light', 'bg-white')
mapVariant.set('primary', 'bg-blue-400')
mapVariant.set('info', 'bg-blue-300')
mapVariant.set('danger', 'bg-red-400')
mapVariant.set('transparent', 'bg-transparent')

const mapType: Map<string, string> = new Map()
mapType.set('default', 'rounded-xs')
mapType.set('normal', 'rounded-md')
mapType.set('round', 'rounded-lg')
mapType.set('round-full', 'rounded-full')


const mapColor: Map<string, string> = new Map()
mapColor.set('default', 'text-black')
mapColor.set('light', 'text-white')
mapColor.set('primary', 'text-primary')

export interface ButtonInterface {
  title: String
  variant: String
  type: String
  color: String
}

import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DefaultButton',
  props: {
    title: {
      type: String,
      default:''
    },
    variant: {
      type: String,
      default: 'light'
    },
    type: {
      type: String,
      default: 'normal'
    },
    color: {
      type: String,
      default: ''
    }
  },
  setup(props: ButtonInterface) {
    const yourName = ref('John Doe')

    const variantValue = computed(() => {
      return mapVariant.get(props.variant.toString())
      // set: () => {}
    })
    const typeValue = computed(() => {
      return mapType.get(props.type.toString())
      // set: () => {}
    })
    const colorValue = computed(() => {
      return mapColor.get(props.color.toString())
      // set: () => {}
    })

    return {
      variantValue,
      typeValue,
      colorValue,
      yourName
    }
  }
})
</script>

<style scoped>
.text-primary{
  color: rgb(0, 113, 194);
}
</style>
