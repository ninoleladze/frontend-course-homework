# To-Do List Application

## Overview
This is a simple To-Do List application built with Angular. The application allows users to manage their tasks efficiently by adding, removing, and marking tasks as complete.

## Features
- Add new to-do items
- Remove existing to-do items
- Mark to-do items as complete
- Responsive design

## Project Structure
```
todo-list-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── todoparent
│   │   │   ├── todoitem
│   │   │   └── shared
│   │   ├── services
│   │   ├── models
│   │   ├── app.module.ts
│   │   └── app.component.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd todo-list-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
To run the application, use the following command:
```
ng serve
```
Open your browser and navigate to `http://localhost:4200` to view the application.

## Usage
- To add a new task, enter the task title in the input field and click "Add".
- To mark a task as complete, click the checkbox next to the task.
- To remove a task, click the "Delete" button next to the task.

## Testing
To run the unit tests for the application, use the following command:
```
ng test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.