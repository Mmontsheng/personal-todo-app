<template>
  <v-app>
    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex md4 sm12 xs12>
          <div class="content">
            <div class="content-head">
              <div id="todo-count">
                <p>{{ notstarted.length}}</p>
              </div>
              <h2>Created Todos</h2>

              <!--create dhere-->
              <create-todo v-on:create-todo="createTodo"/>
            </div>
            <div class="content-body" v-if="!!notstarted">
              <div v-for="(todo, index) in sortedNotStarted" :key="index" class="todo">
                <todo-item
                  :todo="todo"
                  v-on:delete-created-todo="deleteCreatedTodo"
                  v-on:todo-to-start="pushToStarted"
                  v-on:update-todo="updateTodo"
                />
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex md4 sm12 xs12>
          <div class="content">
            <div class="content-head">
              <div id="todo-count">
                <p>{{ started.length}}</p>
              </div>
              <h2>Started Todos</h2>
            </div>
            <div class="content-body" style="margin-top:80px">
              <div v-for="(todo, index) in sortedStarted" :key="index" class="todo">
                <started-item :todo="todo" v-on:todo-to-done="pushToDone"/>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex md4 sm12 xs12>
          <div class="content">
            <div class="content-head">
              <div id="todo-count">
                <p>{{ done.length}}</p>
              </div>
              <h2>Complete Todos</h2>
            </div>
            <div class="content-body" style="margin-top:80px">
              <div v-for="(todo, index) in sortedDone" :key="index" class="todo">
                <done-item :todo="todo" v-on:delete-done-todo="deleteDoneTodo"/>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import createTodo from "./components/CreateTodo";
import todoItem from "./components/TodoItem";
import startedItem from "./components/StartedItem";
import doneItem from "./components/DoneItem";
export default {
  name: "app",
  components: {
    createTodo,
    todoItem,
    startedItem,
    doneItem
  },
  data() {
    return {
      notstarted: [],
      started: [],
      done: []
    };
  },
  methods: {
    createTodo(newTodo) {
      this.notstarted.push(newTodo);
    },
    deleteCreatedTodo(id) {
      this.notstarted = this.notstarted.filter(todo => todo.id !== id);
    },
    updateTodo(thisTodo) {
      // get properties of todo to update
      const { id, title, description, color } = thisTodo;

      // index of object to update
      const todoIndex = this.notstarted.findIndex(todo => todo.id == id);

      // update todo
      this.notstarted[todoIndex].title = title;
      this.notstarted[todoIndex].description = description;
    },
    pushToStarted(id) {
      // adds the todo with id to started
      this.started.push(this.notstarted.find(todo => todo.id === id));

      // removes the todo with id from not started
      this.notstarted = this.notstarted.filter(todo => todo.id !== id);
    },
    pushToDone(id) {
      // adds the todo with id to done
      this.done.push(this.started.find(a => a.id === id));
      // removes the todo with id from started
      this.started = this.started.filter(todo => todo.id !== id);
    },
    deleteDoneTodo(id) {
      this.done = this.done.filter(todo => todo.id !== id);
    }
  },
  computed: {
    sortedNotStarted() {
      return this.notstarted.sort((a, b) => b.id - a.id);
    },
    sortedStarted() {
      return this.started.sort((a, b) => b.id - a.id);
    },
    sortedDone() {
      return this.done.sort((a, b) => b.id - a.id);
    }
  }
};
</script>

<style>
:root {
  --primary--color--: #706fd3;
}

.btn {
  background-color: var(--primary--color--) !important;
  border: 2px solid var(--primary--color--);
  border-radius: 45px !important;
  color: #fff !important;
  font-weight: 600 !important;
  text-transform: none;
  box-shadow: none !important;
  transition: all ease-in-out 0.35s !important;
}
.btn:hover,
.btn:focus {
  color: var(--primary--color--) !important;
  background-color: transparent !important;
}
.priority-color {
  cursor: inherit !important;
}
.content {
  border: 1px solid #716fd39f;
  margin: 5px;
  padding: 10px;
  height: 650px;
}
#todo-count {
  float: left;
  margin: 0;
  padding: 0;
}
#todo-count p {
  font-weight: 600px;
  font-size: 16px;
}
.content-head {
  text-align: center;
}
.content-body {
  clear: both;
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}
.todo {
  margin: 10px 0;
}
#todo-head {
  float: right;
}
#todo-body {
  clear: both;
}

#item {
  border-radius: 5px;
  padding: 15px !important;
  overflow-wrap: break-word;
  border: 1px solid #716fd39f !important;
}

.floatingButtons {
  position: absolute;
  right: 12px;
}
.todo-content {
  padding-top: 25px !important;
}

.todo-title {
  font-size: 25px;
}
.todo-description {
  font-size: 16px;
}
</style>
