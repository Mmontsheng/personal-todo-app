<template>
  <v-card dark color="white" id="item">
    <div id="todo-head">
      <tool-tip :todo="todo"/>
    </div>
    <div id="todo-body"></div>
    <h3 class="black--text">{{ todo.title }}</h3>
    <v-card-text class="px-0 black--text">{{ todo.description }}</v-card-text>
    <v-btn  @click="$emit('delete-done-todo', todo.id)" class="btn">Delete</v-btn>
  </v-card>
</template>

<script>
import toolTip from './ToolTip'
export default {
  name: "done-item",
  components:{
    toolTip
  },
  props: {
    todo: Object
  }
};
</script>

<style>
</style>
