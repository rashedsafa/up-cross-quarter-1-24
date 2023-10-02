import React, { useState } from "react";
import { Input, Button, Card, Space } from "antd";
import LoadingCard from "./LoadingCard";
import { History } from "history";

interface CreatePostProps {
  history: History;
}

const CreatePost: React.FC<CreatePostProps> = ({ history }) => {
  const [showPost, setShowPost] = useState(false);
  const [values, setValues] = useState<{ title: string; body: string }>({
    title: "",
    body: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValues({ title: "", body: "" });
  };

  // const showPostBlog = () => {
  //   return (
  //     <>
  //       {loading ? (
  //         <LoadingCard count={1} />
  //       ) : (
  //         <div className="site-card-border-less-wrapper">
  //           <Card type="inner" title={post[0].title}>
  //             <p>User Id: {post[0].id}</p>
  //             <span>{post[0].body}</span>
  //           </Card>
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "20px" }}>
          <h1>Create Post</h1>
          <Input
            placeholder="Enter title"
            type="text"
            onChange={(e) =>
              setValues({ ...values, title: e.target.value })
            }
            value={values.title}
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <Input.TextArea
            placeholder="Enter Body"
            onChange={(e) =>
              setValues({ ...values, body: e.target.value })
            }
            value={values.body}
            style={{ width: "400px" }}
            size="large"
          />
          <br />
          <br />
          <Space style={{ margin: 10 }}>
            <Button onClick={() => history.push("/")}>Go Back</Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </div>
      </form>
      <br />
      <br />
      {/* {showPost && <div>{showPostBlog()}</div>} */}
    </>
  );
};

export default CreatePost;
