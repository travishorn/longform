<script setup>
const chapters = await queryContent('/').sort({ order: 1, path: 1 }).find();
</script>

<template>
  <div class="p-5 lg:p-10 mx-auto prose lg:prose-xl">
    <h1>Hello, World!</h1>

    <nav class="print:hidden flex flex-col gap-4 lg:gap-1 hover:prose-a:text-gray-700">
      <a
        v-for="chapter in chapters"
        :key="chapter._id"
        :href="`#${chapter._id}`"
      >
        {{ chapter.title }}
      </a>
    </nav>

    <div v-for="chapter in chapters" :key="chapter._id" :id="chapter._id">
      <h2>{{ chapter.title }}</h2>
      <ContentRenderer :value="chapter" />
    </div>
  </div>
</template>
