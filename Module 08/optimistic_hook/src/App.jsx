import { useOptimistic, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

async function sendToServer(comment) {
  await new Promise((res) => setTimeout(res, 2000)); // Fake delay
  console.log("Saved to server", comment);
}

function App() {
  const [comments, setComments] = useState([]);

  const [optimisticsComments, addOptimisticsComment] = useOptimistic(
    comments,
    (currentState, newComment) => [...currentState, newComment]
  );

  async function handleSubmit(formData) {
    const comment = formData.get("comment");
    addOptimisticsComment(comment); // optimistic update
    setComments((prev) => [...prev, comment]);
    await sendToServer(comment);
  }

  return (
    <>
      <form action={handleSubmit}>
        <input
          type="text"
          name="comment"
          placeholder="Type your comment"
          required
        />
        <button type="submit">Post Comment</button>

        <ul>
          {optimisticsComments.map((c, i) => (
            <li key={i}>{c} </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
