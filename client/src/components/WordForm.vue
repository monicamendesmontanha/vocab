<template>
  <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please complete both fields!</p>

    <div class="ui labeled inout fluid">
      <div class="ui label">
        <i class="germany flag"></i> German
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.german">
    </div>

    <div class="ui labeled inout fluid">
      <div class="ui label">
        <i class="united kindgdom flag"></i> English
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.english">
    </div>

    <button class="positive ui button">Save</button>
  </form>
</template>


<script>

export default {
  name: 'word-form',
  props: {
    word:{
      type: Object,
      required: false
    }
  },
  data() {
    return {
      errorsPresent: false
    }
  },
  methods: {
    onSubmit() {
      // console.log(`English: ${this.word.english}`);
      // console.log(`German: ${this.word.german}`);

      if(this.word.english === '' || this.word.german === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdateWord', this.word)
      }
    }
  }
}
</script>


<style>
.error {
  color: red;
}
</style>
