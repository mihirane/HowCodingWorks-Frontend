<template>
  <v-card class="post-card" @click="goToBlogPost()">
    <v-card-subtitle class="pb-0" style="letter-spacing: 1px;">
      {{ getTopicName }}
    </v-card-subtitle>
    <v-responsive class="px-4 pt-2 pb-0 title" style="line-height: 28px">
      {{ postTitle }}
    </v-responsive>
    <v-card-text class="pt-3">
      {{ postCaption }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  components: {},
  props: {
    postId: {
      type: String,
      default: null
    },
    postTopicName: {
      type: String,
      default: null
    },
    postTitle: {
      type: String,
      default: null
    },
    postCaption: {
      type: String,
      default: null
    }
  },
  computed: {
    getTopicName () {
      return this.$props.postTopicName
        .match(/[A-Z][a-z]+|[0-9]+/g)
        .join(' ')
        .toUpperCase()
    }
  },
  methods: {
    goToBlogPost () {
      return this.$router.push(
        '/' +
          this.$props.postTopicName +
          '/' +
          this.$props.postTitle.split(' ').join('_') +
          '--' +
          this.$props.postId
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  cursor: pointer;
}
</style>
