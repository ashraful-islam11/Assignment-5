# Project Overview : 

# Name of your project : 
  * DevStack Builder

# A little description :
  * DevStack is an application that helps developers explore various technologies and create their own development stack.

# Technologies used :
  * React.js
  * Tailwind CSS
  * DaisyUI
  * TypeScript

# 3 features about my project :
  * Easy technology addition with instant success notifications.
  * Warning and error notifications for attempting to add the same technology twice.
  * Instant notifications during the removal of individual or all items from the stack.



### React questions  :
  ** What is JSX, and why is it used in React? ** 
  * JSX stands for JavaScript XML. It is a special code that makes JavaScript look like HTML, making it easier to understand and write code.

  ** What is the difference between props and state? ** 
  *Props are data passed from a parent component to a child component and they cannot be changed. State is data managed within the component itself, and it can be updated when needed.

  ** What does the useState hook do, and where did you use it in this project? ** 
  * The useState hook allows you to add state to functional components, which helps track changing data over time. In this project, it is used to manage the selected technologies in your stack.

  ** What does the useEffect hook do, and why did you need it to load the JSON data? ** 
  * The useEffect hook handles side effects. It was needed to fetch the JSON data after the component mounted.

  ** Why does every item in a .map() list need a unique key prop? ** 
  * Unique keys help React identify which items change, are added, or are removed. This helps React render lists efficiently.

  ** What is conditional rendering? Show one place you used it (example: the empty stack message). ** 
  * Conditional rendering displays different UI based on specific conditions. In this project, it's used to show a message when the stack is empty.

  ** How do you pass data from a parent component to a child component, and how does a child send something back to the parent? ** 
  * Parent components pass data to child components using props. Children can send data back to parents using callback functions provided by the parent. 
