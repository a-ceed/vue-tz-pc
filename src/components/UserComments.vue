<template>
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
    <div class="title"><h2>Нет комментариев</h2></div>
  </div>

  <div class="textarea-block">
    <p>Введите комментарий</p>
    <textarea class="comment-textarea" type="text" v-model="textComment"></textarea>
    <div>
      <button class="comment-button" @click="addNewComment">Отправить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserComments",
  props: {
    comments: {
      type: Object, // ожидаем объект
      required: false
    }
  },
  methods: {
    addNewComment() {
      const payload = {
        articleId: parseInt(this.$route.query.watch),
        newComment: this.textComment
      }
      this.$store.commit('newComment', payload);
    }
  }
}
</script>

<style scoped>
.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  min-width: 230px;
  color: #2c3e50;
}
.title-comment {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  min-width: 230px;
  color: #2c3e50;
  margin-bottom: 5px;
}
.textarea-block {
  text-align: left;
  margin-top: 60px;
}
.comment-textarea {
  width: 100%;
  height: 120px;
  font-size: 16px;
}
.comment-button {
  font-size: 32px;
  font-weight: 700;
  color: #2c3e50;
  background-color: #fff;
  margin-top: 16px;
}


</style>