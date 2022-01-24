import React from "react";
import "./App.css";
import Card from './Card';

function App() {
  return (
    <div>
      <h1>Related Posts</h1>
      <div className="box">
        <Card image="https://images.unsplash.com/photo-1609424572698-04d9d2e04954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          head="What you want to know about hubspot."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          link="https://lipsum.com/"
        />
        <Card image="https://images.unsplash.com/photo-1531036567142-45359c5a011a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZXJyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          head="What you want to know about hubspot."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          link="https://lipsum.com/"
        />
        <Card image="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          head="What you want to know about hubspot."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          link="https://lipsum.com/"
        />
      </div>
      <div className="footer">
        <p>
          If you want to show some love, press L. ❤️ <br />
          Please write a comment with your opinion too.📝
          <br />
          <br />
          Have a nice day!☀️
        </p>
      </div>
    </div>
  );
}

export default App;
