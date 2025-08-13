import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((resp) => {
        this.setState({ posts: resp.posts });
        console.log(resp.posts);
      });
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ol>
          {this.state.posts.map((post) => (
            <li key={post.id}> {post.title} </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default App;
