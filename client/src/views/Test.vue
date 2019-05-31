<template>
  <div>
    <h1>Quiz</h1>
    <div v-if="words.length < 2">
      <p>You need to enter at least two words to begin the test</p>
    </div>
    <div v-else>
      <vocab-test :words="words"></vocab-test>
    </div>
  </div>
</template>


<script>
import { api } from '../helpers/helpers';
import VocabTest from '../components/VocabTest.vue';

export default {
  name: 'test',
  components: {
    'vocab-test': VocabTest
  },
  data() {
    return {
      words: []
    };
  },
  async mounted() {
    this.words = await api.getWords();
  }
};
</script>
