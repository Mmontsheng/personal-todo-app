<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon small :color="todo.color" v-on="on" class="priority-color">
        <v-icon>notification_important</v-icon>
      </v-btn>
    </template>
    <span v-if="todo.color=='red'">High importance</span>
    <span v-else-if="todo.color=='orange'">Medium importance</span>
    <span v-else>Low importance</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "tool-tip",
  props: {
    todo: {
      type: Object
    }
  }
};
</script>

<style>
</style>
