import { doc } from "prettier";
import "./style.css";

const root = document.querySelector("#root");

const projectArr = [
  {
    name: "Home",
  },
  {
    name: "Work",
  },
  {
    name: "Gym",
  },
];

const projectFactory = (name) => {
  return { name };
};

const createProjectElement = (project, arr) => {
  const projectElement = document.createElement("li");
  projectElement.classList.add("project-element");
  projectElement.dataset.name = project.name;

  projectElement.innerHTML = `
        <span data-name="${project.name}">${project.name}</span>
        <button 
            class="delete-button" 
            data-index="${project.index}" 
            data-name="${project.name}"
            data-type="project">
                Delete
        </button>
    `;

  return projectElement;
};

const createProjectList = (arr) => {
  const projectList = document.createElement("ul");
  projectList.id = "projectList";
  projectList.classList.add("project-list");

  if (arr.length > 0) {
    arr.forEach((project) => {
      projectList.appendChild(createProjectElement(project, arr));
    });
  }

  return projectList;
};

const createTodoList = () => {
  const todoList = document.createElement("ul");
  todoList.id = "todoList";
  todoList.classList.add("todo-list");

  return todoList;
};

const createAddTaskPopupButton = () => {
  const addTaskPopupButton = document.createElement("button");
  addTaskPopupButton.id = "addTaskPopupButton";
  addTaskPopupButton.innerHTML = "Add Task +";

  return addTaskPopupButton;
};

const createAddTaskPopup = () => {
  const addTaskPopupElement = document.createElement("div");
  addTaskPopupElement.id = "addTaskPopupElement";
  addTaskPopupElement.classList.add("addTaskPopupElement");

  addTaskPopupElement.innerHTML = `
        <form>
            <label for="projectName">Project Name</label>
            <input type="text" id="projectName" name="projectName">
            <button type="submit">Add Task</button>
        </form>
    `;

  return createAddTaskPopup;
};

const bindDeleteButtons = (arr) => {
  document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const parentElement = button.closest("li");

        // For deleting projects
        if (button.dataset.type === "project") {
          const deletedProject = arr.find(
            (project) => project.name === button.dataset.name
          );
          const indexOfDeletedProject = arr.indexOf(deletedProject);
          arr.splice(indexOfDeletedProject, 1);

          parentElement.remove();

          console.table(arr);
        }
      });
    });
  });
};

const bindAddTaskPopupButton = () => {
  const addTaskPopupButton = document.querySelector("#addTaskPopupButton");
  addTaskPopupButton.addEventListener("click", (e) => {
    console.log("Hi!");
  });
};

const init = (root) => {
  root.appendChild(createProjectList(projectArr));
  root.appendChild(createTodoList());

  document
    .querySelector("#projectList")
    .appendChild(createAddTaskPopupButton());

  bindDeleteButtons(projectArr);
  bindAddTaskPopupButton();
};

init(root);

// CREATE A POPUP
