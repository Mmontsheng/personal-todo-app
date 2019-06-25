import { storiesOf } from '@storybook/vue'
import todoItem from '../components/TodoItem';
storiesOf('Tod todo item', module)
    .add('positive - with array of valid hours', () => ({
        components: { todoItem },
        data() {
            return {
                todo: {
                    id: 1,
                    title: "Demo",
                    description: "Loream Loream Loream Loream Loream LoreamLoream Loream Loream Loream Loream Loream Loream LoreamLoream Loream Loream Loream Loream Loream Loream LoreamLoream Loream ",
                    status: "created"
                }
            }
        },
        template: '<todo-item :todo="todo"/>'
    }));