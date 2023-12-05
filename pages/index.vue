<script setup lang="ts">
  const name = ref('world');
</script>

<template>
  <div>
    <HelloMessage :name="name" />
    <p>
      <input v-model="name" type="text" />
    </p>
  </div>
</template>
