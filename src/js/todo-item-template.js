const todoItemTemplate =
    `
        <div class="list-item {{#status}}done{{/status}}" todo-id="{{id}}">
            <input type="checkbox" class="check-box" todo-action="select-item" {{#checked}}checked{{/checked}}>
            <p class="todo-text" todo-action="todo-text">{{text}}</p>
            <button class="btn-done" todo-action="mark-done">Done</button>
            <button class="btn-delete" todo-action="delete-item">Delete</button>
        </div>
    `;
export default todoItemTemplate;