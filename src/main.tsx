import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CourseProvider from "./Context/CourseProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CourseProvider>
      <App />
    </CourseProvider>
  </React.StrictMode>
);
