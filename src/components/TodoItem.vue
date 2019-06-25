<template>
  <div>
    <v-card dark color="white" id="item">
      <div id="todo-head">
        <v-btn icon outline small color="#706fd3" @click="showEditmodal=!showEditmodal">
          <v-icon color="#706fd3">edit</v-icon>
        </v-btn>
        <v-btn icon outline small color="#706fd3" @click="$emit('delete-created-todo', todo.id)">
          <v-icon color="#706fd3">delete</v-icon>
        </v-btn>
        <tool-tip :todo="todo"/>
      </div>
      <div id="todo-body"></div>
      <h3 class="black--text">{{ todo.title }}</h3>
      <v-card-text class="px-0 black--text">{{ todo.description }}</v-card-text>
      <v-btn @click="$emit('todo-to-start', todo.id)" class="btn">Its In Started</v-btn>
    </v-card>

    <v-dialog v-model="showEditmodal" width="500">
      <v-card>
        <v-card-title class="headline" primary-title>Edit Task</v-card-title>

        <v-card-text>
          <v-text-field label="Task title" v-if="showEditmodal" v-model="todo.title" autofocus></v-text-field>
        </v-card-text>
        <v-card-text>
          <v-textarea label="Task Description" v-model="todo.description"></v-textarea>
        </v-card-text>
        <v-card-text>
          <p>Priority</p>

          <v-btn
            icon
            v-for="(color,i) in colors"
            @click="todo.color = color"
            :key="i"
            :color="color"
            class="white--text"
          >
            <v-icon small v-if="todo.color==color">done</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn" @click="updateTodo" :disabled="!todo.title.length">Update Todo</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import toolTip from "./ToolTip";

export default {
  name: "todo-item",
  components: {
    toolTip
  },
  data() {
    return {
      showEditmodal: false,
      colors: ["red", "orange", "green"]
    };
  },
  props: {
    todo: Object
  },
  methods: {
    updateTodo() {
      // close modal
      this.showEditmodal = false;
      const thisTodo = this.todo;
      //console.log(this.todo);
      this.$emit("update-todo", thisTodo);
    }
  }
};
</script>

<style>
</style>
