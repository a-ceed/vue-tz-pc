<template>
  -------------------
  <div v-if="comments && comments.length > 0">
    <div class="title"><h1>Комментарии:</h1></div>

    <div v-for="comment in comments" :key="comment.id">
      <h3 class="title-comment">Username</h3>
      <div class="title-comment">
        {{ comment.commentBody }}
      </div>
    </div>
  </div>
  <div v-else>
    <p>Без комментариев</p>
  </div>

  <div class="input-block">
    <p>Введите комментарий</p>
    <input type="text" v-model="textComment">
    <button @click="addNewComment">Submit</button>
  </div>
  -----------
</template>

<script>
export default {
  name: "UserComments",
  props: {
    comments: {
      type: Object, // указываем, что ожидаем объект
      required: false // указываем, что пропс обязателен
    }
  }
}
</script>

<style scoped>

</style>