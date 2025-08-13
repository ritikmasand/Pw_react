import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { z } from "zod";

const signupschema = z
  .object({
    username: z.string().min(1, "Username is Required"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [errors, setErrors] = useState([]); // array of error messages

  const handlesubmit = (e) => {
    e.preventDefault();
    const result = signupschema.safeParse({
      username,
      email,
      password,
      confirmPassword,
    });

    console.log(result);
    setErrors([]);
    if (result.success) {
      alert("Signup sucessful");
      console.log("User has been registered", result.data);
    } else {
      const allerrors = result.error.issues.map((err) => err.message);
      setErrors(allerrors);
    }
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>

        {errors.length > 0 && (
          <div style={{ color: "red" }}>
            <ul>
              {errors.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </>
  );
}

export default App;
