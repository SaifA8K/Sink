<script setup>
definePageMeta({
  layout: 'dashboard',
})

provide('id', ref())
</script>

<template>
  <div class="space-y-6">
    <DashboardBreadcrumb title="Analysis" />
    <DashboardAnalysis />
  </div>
</template>
