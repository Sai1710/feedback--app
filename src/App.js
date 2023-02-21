import React from "react";
import FeedbackList from "./FeedbackList.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FeedbackData from "./data/FeedbackData.js";
import FeedbackStats from "./FeedbackStats.js";
import FeedbackForm from "./FeedbackForm.js";
import { FeedbackProvider } from "./Context/FeedbackContext.js";
import AboutIconLink from "./AboutIconLink.js";
import Header from "./header.js";
import { useState } from "react";
import About from "./pages/About.js";
function App() {
  // const title = "Blog Post";
  // const body = "This is my Blog Post";
  // const Comments = [
  //   { id: 1, text: "Comment 1" },
  //   { id: 2, text: "Comment 2" },
  //   { id: 3, text: "Comment 3" },
  // ];
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    // <Router>
    /* <h1>{title.toUpperCase()}</h1>
      <p>{body}</p> */
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI"></Header>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats feedback={feedback}></FeedbackStats>
                  <FeedbackList feedback={feedback}></FeedbackList>
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink></AboutIconLink>
        </div>
      </Router>
    </FeedbackProvider>

    /* <div className="comments">
        <h2>Comments ({Comments.length})</h2>
        <ul>
          {Comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div> */
    /* </Router> */
  );
}

///////With javascript instead of jsx

// function App() {
//   return React.createElement(
//     "div",
//     { className: "container" },
//     React.createElement("h1", {}, "My App")
//   );
// }

export default App;
