<template>
  <div>
    <v-btn fab color="#706fd3" dark @click="showmodal=!showmodal">
      <v-icon color="white">add</v-icon>
    </v-btn>

    <v-dialog v-model="showmodal" width="500">
      <v-card>
        <v-card-title class="headline" primary-title>Create Task</v-card-title>

        <v-card-text>
          <v-text-field label="Task title" v-if="showmodal" v-model="title" autofocus></v-text-field>
        </v-card-text>
        <v-card-text>
          <v-textarea label="Task Description" v-model="description"></v-textarea>
        </v-card-text>
        <v-card-text>
          <p>Priority</p>

          <v-btn
            icon
            v-for="(color,i) in colors"
            @click="priorityColor = color"
            :key="i"
            :color="color"
            class="white--text"
          >
            <v-icon v-if="priorityColor==color">done</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn" @click="createTodo" :disabled="!title.length">Create Task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "create-todo",
  data() {
    return {
      showmodal: false,
      id: 1,
      colors: ["red", "orange", "green"],
      title: "",
      description: "",
      priorityColor: null
    };
  },
  methods: {
    createTodo() {
      if (this.priorityColor == null) {
        this.priorityColor = "green";
      }
      // create todo object
      const newTodo = {
        id: this.id,
        title: this.title,
        description: this.description,
        color: this.priorityColor
      };

      this.$emit("create-todo", newTodo);
      this.clearFields();
      this.id += 1;
    },
    // clear all modal fileds and close the modal
    clearFields() {
      this.title = "";
      this.description = "";
      this.priorityColor = null;
      this.showmodal = false;
    }
  }
};
</script>

<style>
</style>
