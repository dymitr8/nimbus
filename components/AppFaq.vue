<template>
  <div class="v-container">
    <div class="lg:w-1/2">
      <h3 class="text-sm uppercase text-primary">FAQ</h3>
      <h4 class="mt-4 text-3xl font-medium tracking-wider md:text-4xl">
        Frequently asked questions
      </h4>

      <p class="mt-4 font-light text-gray-600">
        Explore to learn more about how DataWise can empower your business with
        AI-driven solutions.
      </p>
    </div>

    <div
      class="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 xl:grid-cols-3"
    >
      <div v-for="(item, index) in faq" :key="index">
        <h4 class="text-xl font-medium">
          {{ item.question }}
        </h4>

        <p class="mt-4 text-sm font-light text-gray-600">
          {{ item.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const faq = ref([
  {
    question:
      "Can DataWise's AI solutions be integrated with existing business systems?",
    answer:
      "Yes, integration is a key strength of our AI solutions. DataWise's AI platform is designed for flexibility and can be integrated with a wide range of existing business systems.",
  },
  {
    question: 'What types of AI services does DataWise offer?',
    answer:
      'Absolutely, our services are scalable and designed to accommodate and process large amounts of data efficiently.',
  },
  {
    question: 'What customer support do you offer for your AI solutions?',
    answer:
      'Our services can benefit various industries, including healthcare, finance, retail, entertainment, and many more, wherever AI can be leveraged.',
  },
  {
    question: "Can your AI help improve my website's conversion rate?",
    answer:
      "We pride ourselves on our service's adaptability, user-centric design, and our continual commitment to pushing the boundaries of AI technology.",
  },
  {
    question: 'Can your AI identify areas for A/B testing and personalization?',
    answer:
      'We offer a range of support services from online resources, live chat support, to dedicated account representatives for enterprise customers.',
  },
  {
    question: "How can your AI help improve my website's SEO ranking?",
    answer:
      'Yes, our platform allows for custom model training with your proprietary datasets.',
  },
])
</script>
