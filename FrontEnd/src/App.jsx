import axios from "axios";
import { useState } from "react";

const App = () => {

  const studentSchema = {
    UserName: "",
    email: "",
    Password: "",
  };

  const [data, setData] = useState(studentSchema);
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post( "http://localhost:5000/api/UserDetails/create", data);
      alert(res.data.msg);
      setData(studentSchema);
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Register Form</h1>

      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>

        <input type="text" name="UserName" placeholder="UserName" value={data.UserName} onChange={handleChange} required />
        <br /><br />

        <input type="email" name="email" placeholder="Email - Id" value={data.email} onChange={handleChange} required />
        <br /><br />


        <input type="password" name="Password" placeholder="Password" value={data.Password} onChange={handleChange} required />
        <br /><br />

        <button type="submit">Submit</button>

      </form>

    </>
  );
};

export default App;