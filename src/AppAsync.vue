<script setup>
import { ref, onMounted } from 'vue'

let sections = []
const files = import.meta.glob('./content/*.md')
for (const path in files) {
  const module = await files[path]()
  sections.push({
    component: module.default,
    id: path.slice(path.lastIndexOf('/') + 1, -3),
    ...module.frontmatter
  })
}
sections = sections.sort((a, b) => a.id < b.id).sort((a, b) => a.order - b.order)

const activeSection = ref('')
const drawerOpen = ref(false)

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value
}

function closeDrawer() {
  drawerOpen.value = false
}

const observeSections = () => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '-30px',
    threshold: 0.8
  })

  sections.forEach((item) => {
    const section = document.getElementById(item.id)
    if (section) {
      observer.observe(section)
    }
  })
}

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id
    }
  })
}

onMounted(() => {
  observeSections()
})
</script>

<template>
  <button
    @click="toggleDrawer"
    class="block lg:hidden fixed top-2 left-2 z-40 border border-zinc-400 px-3 pt-2 pb-1 text-lg bg-white rounded hover:bg-zinc-100"
  >
    ☰
  </button>
  <nav
    :class="[
      'lg:block fixed top-0 h-full pt-16 pl-10 pr-10 bg-white z-30 lg:z-10 shadow-lg lg:shadow-none transition-transform',
      drawerOpen ? '' : '-translate-x-full lg:translate-x-0'
    ]"
  >
    <ul class="flex flex-col gap-3.5 max-w-64">
      <li
        v-for="item in sections"
        :key="item.id"
        :class="activeSection === item.id ? 'font-bold text-zinc-600' : 'text-zinc-400'"
        class="hover:text-zinc-600"
      >
        <a :href="'#' + item.id" @click="closeDrawer">{{ item.title }}</a>
      </li>
    </ul>
  </nav>

  <main
    class="prose prose-zinc prose-lg mx-auto lg:mr-16 xl:mr-auto px-2 pt-16 pb-56 z-20 relative"
  >
    <h1>The Benefits of Vite</h1>

    <section v-for="section in sections" :key="section.id" :id="section.id" class="pt-10">
      <h2>{{ section.title }}</h2>
      <component :is="section.component"></component>
    </section>
  </main>
</template>
