<template>
  <div class="p-5 lg:p-10 mx-auto prose lg:prose-xl">
    <h1>Hello, World!</h1>

    <nav class="print:hidden flex flex-col gap-4 lg:gap-1 hover:prose-a:text-gray-700">
      <a
        v-for="chapter in chapters"
        :key="chapter.slug"
        :href="`#${chapter.slug}`"
      >
        {{ chapter.title }}
      </a>
    </nav>

    <div v-for="chapter in chapters" :key="chapter.slug" :id="chapter.slug">
      <h2>{{ chapter.title }}</h2>
      <nuxt-content :document="chapter" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $content }) {
    const chapters = await $content("chapters").sortBy("title").fetch();
    return { chapters };
  },
}
</script>
