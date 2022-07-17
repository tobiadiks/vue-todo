var todoApp = new Vue({
  el: "#vue-app",
  data: {
    msg: '',
    todos: [{ id: 1, msg: 'Go to work', isCompleted: false },
      { id: 2, msg: 'Sleep', isCompleted: true }]
  },
  methods: {
    create() {
      next = { id: this.todos.length + 1, msg: this.msg, isCompleted: false };
      if(this.msg)this.todos.push(next);
      this.msg = '';
    },
    status(id) {
      this.todos[id - 1].isCompleted = !this.todos[id - 1].isCompleted
    },
    remove(id) {
      this.todos = this.todos.filter((todo) => todo.id != id)
    },
    edit(id){
      this.msg=this.todos[id-1].msg
      
    }
  }
});
