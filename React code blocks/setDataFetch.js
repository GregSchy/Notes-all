import axios from "axios";
import { useState } from "react";

const defaultFormData = {
  title: "",
  body: "",
};

export default function App() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSuccess(true)
    } catch (error) {
      setError(true)
      
    }
    setFormData(defaultFormData);
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>

      {error && <p>Oppes</p>}
      {success && <p>success</p>}
    </>
  );
}