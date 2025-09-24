# 📝 Todo List App

A modern, responsive todo list application built with vanilla HTML, CSS, and JavaScript. Features a clean glassmorphism design with full CRUD functionality and local storage persistence.



## ✨ Features

- ➕ **Add Tasks** - Create new todo items with input validation
- ✅ **Mark Complete** - Toggle task completion status with visual feedback
- ✏️ **Edit Tasks** - Modify existing task text inline
- 🗑️ **Delete Tasks** - Remove unwanted tasks
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 📊 **Task Statistics** - Real-time counters for total, active, and completed tasks
- 💾 **Local Storage** - Automatic data persistence across browser sessions
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Glassmorphism design with smooth animations





## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox, gradients, and animations
- **JavaScript (ES6+)** - Dynamic functionality and DOM manipulation
- **Local Storage API** - Client-side data persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sajan-Mahla/todo-list-app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd todo-list-app
   ```

3. **Open in your browser**
   ```bash
   # Simply open the index.html file in your preferred browser
   open index.html
   ```

   Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

## 🎮 Usage

### Adding Tasks
- Type your task in the input field
- Click "Add Task" button or press Enter
- Task appears in the list immediately

### Managing Tasks
- **Complete**: Click the circular checkbox to mark as done
- **Edit**: Click the "Edit" button and modify text in the prompt
- **Delete**: Click the "Delete" button to remove permanently

### Filtering
- **All**: Shows all tasks regardless of status
- **Active**: Shows only incomplete tasks
- **Completed**: Shows only finished tasks

### Data Persistence
- All tasks automatically save to browser's local storage
- Data persists between browser sessions
- No server or database required

## 📁 Project Structure

```
todo-list-app/
│
├── index.html          # Main HTML file with embedded CSS and JS
├── README.md           # Project documentation
└── screenshot.png      # App screenshot (add this)
```

## 🔧 Code Architecture

### Data Structure
```javascript
const todo = {
    id: 1,
    text: "Learn JavaScript",
    completed: false
}
```

### Key Functions
- `addTodo()` - Creates and adds new tasks
- `deleteTodo(id)` - Removes tasks by ID
- `toggleTodo(id)` - Toggles completion status
- `editTodo(id)` - Handles task editing
- `renderTodos()` - Updates DOM display
- `updateStats()` - Refreshes task counters

## 🚀 Future Enhancements

- [ ] Drag and drop reordering
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Dark/light theme toggle
- [ ] Export/import functionality
- [ ] Search functionality
- [ ] Keyboard shortcuts

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author


- GitHub: [@lick me](https://github.com/Sajan-Mahla)
- LinkedIn: [Click me]([https://linkedin.com/in/your-profile](https://www.linkedin.com/in/sajan-mahla/))

## 🙏 Acknowledgments

- Inspired by modern todo applications
- Icons and design inspiration from various UI/UX resources
- Thanks to the open-source community for continuous learning

---

⭐ **Star this repo if you found it helpful!** ⭐
