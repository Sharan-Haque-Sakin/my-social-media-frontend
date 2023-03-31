import React, { useEffect, useState } from "react";
import Uploads from "./Feeds";
import Loader from "./Loading";

export default function MainPart() {
  const [Posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://mysocialmediabackend.onrender.com/posts")
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setPosts(jsonData);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="PostsContainer">
      <div className="hehe" style={{ paddingTop: "2rem" }}>
        {loading ? (
          Posts.data.map((data, key) => {
            return (
              <Uploads
                key={key}
                time={data.time}
                userName={data.user.userName}
                content={data.content}
                date={data.date}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
