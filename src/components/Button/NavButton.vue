<template>
  <button
    :class="`hover:backdrop-brightness-200 hover:brightness-105   hover:bg-blue-800 flex gap-2 items-center py-[11px] px-5 rounded-2xl ${activeValue}  ${outlineValue} ${colorValue} ${variantValue} `"
  >
    <!-- button icon -->
    <component :is="icon" class="w-5 h-5"></component>
    <!-- button text -->
    <span>{{ title }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps,  onUpdated, type Component,  watch, computed } from 'vue'
import { NavButtonPropsInterface } from '@/components/interfaces/typeProps'
const mapVariant: Map<string, string> = new Map()
mapVariant.set('light', 'bg-white')
mapVariant.set('primary', 'bg-blue-400')
mapVariant.set('info', 'bg-blue-300')
mapVariant.set('danger', 'bg-red-400')
mapVariant.set('transparent', 'bg-transparent')

const mapOutline: Map<string, string> = new Map()
mapOutline.set('transparent', 'border border-transparent')
mapOutline.set('light', 'border border-white')
mapOutline.set('primary', 'border border-blue-500')

const mapColor: Map<string, string> = new Map()
mapColor.set('default', 'text-black')
mapColor.set('light', 'text-white')
mapColor.set('primary', 'text-primary')

// Define component props
const props = withDefaults(
  defineProps<{
    title: string
    icon: Component
    color?: string
    variant?: string
    outline?: string
    active?: boolean
  }>(),
  {
    color: '',
    variant: 'transparent',
    outline: 'transparent',
    active: false
  }
)

const variantValue = computed(() => {
  return mapVariant.get(props.variant.toString())
  // set: () => {}
})
const outlineValue = computed({
  get: () => mapOutline.get(props.outline.toString()),
  set: (newValue = '') => mapOutline.set(props.outline.toString(), newValue.toString())
})
const activeValue = computed(() => props.active ? mapOutline.get('light') : '')



const colorValue = computed(() => {
  return mapColor.get(props.color.toString())
  // set: () => {}
})

onUpdated(() => {
    console.log('updated')
    console.log(props.title)
});
</script>

<style scoped></style>
