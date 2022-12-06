import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [comment, setComment] = useState('')
  useEffect(() => {
    axios({
      baseURL: "http://localhost:8000/getall",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => {
        setFeedbacks(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [feedbacks]);
  const handleComment = () => {
    axios({
        baseURL: "http://localhost:8000/insertFeedback",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          comment: comment,
        }),
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  return (
    <div>
      <h1>Feedback Page</h1>
      {feedbacks
        ? feedbacks.map((element, index) => {
            return (
              <div
                style={{
                  borderWidth: "15px",
                  borderRadius: "15px",
                  borderColor: "black",
                  display: "flex",
                  justifyContent: "center",
                }}
                w="20vw"
                h="10vh"
                key={index}
              >
                {element?.comment}
              </div>
            );
          })
        : null}
        <div>
        <input placeholder="Enter your feedback" value={comment} onChange={(e)=>setComment(e.target.value)} />
          <button onClick={handleComment}>Comment</button>
        </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
