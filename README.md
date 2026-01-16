# 📄 CV Application (React)

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.  
The goal is to build a **CV / Resume application** using **React**, focusing on component structure, state management, and controlled forms.


## 🚀 Overview

This application allows users to enter their personal information, education, and work experience through forms and display the submitted data in a structured CV layout. Users can switch between **edit** and **preview** modes to update their information dynamically.

## 🧩 Project Instructions

1. Create a new **React application**.
2. Plan and organize your app using reusable **components**.
3. Include a section for **general information**, such as:
   - Name  
   - Email  
   - Phone number  
4. Include a section for **educational experience**, such as:
   - School name  
   - Title of study  
   - Dates of study  
5. Include a section for **practical experience**, such as:
   - Company name  
   - Position title  
   - Main responsibilities  
   - Dates worked  
6. Use **React state** to store and manage all form input values.
7. Add a **Submit** button that:
   - Displays the entered information as formatted content instead of input fields.
8. Add an **Edit** button that:
   - Brings back the input fields.
   - Keeps previously entered values so the user can update them.
9. Use **props** to pass data between components where needed.
10. Style the application using CSS to resemble a clean and readable CV layout.
11. Deploy the finished application online using a hosting service of your choice.

## 👷 Struggles

The hardest part of this project was implementing **form validation** in React. Since validation works a bit differently compared to vanilla JavaScript, managing controlled inputs and state made the logic more complex than expected.  

This was especially challenging when **all inputs were empty at the beginning** — figuring out when validation errors should appear and how to prevent premature error states required careful handling of state and conditional rendering. Once the validation logic was properly structured, the rest of the form behavior became much easier to manage.


## 🎯 Learning Outcomes

- Understanding **React components** and **props**
- Managing form data with **controlled inputs**
- Working with **state** to toggle between edit and preview modes
- Handling **form validation** in React
- Structuring a small React application cleanly and logically

