import { useState } from "react";
import "./MyForm.css";

export default function MyForm() {
  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
    phone: "",
    genInfo: "",
    isHappy: false,
    gender: "",
  });

  return (
    <form
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formInputs);
      }}
    >
      <label htmlFor="username">User Name: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={formInputs.username}
        onChange={(e) => {
          setFormInputs({ ...formInputs, username: e.target.value });
        }}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formInputs.email}
        onChange={(e) => {
          setFormInputs({ ...formInputs, email: e.target.value });
        }}
      />

      <label htmlFor="phone">Phone: </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={formInputs.phone}
        onChange={(e) => {
          setFormInputs({ ...formInputs, phone: e.target.value });
        }}
      />

      <label htmlFor="geninfo">General Info: </label>
      <textarea
        name="geninfo"
        id="geninfo"
        onChange={(e) => {
          setFormInputs({ ...formInputs, genInfo: e.target.value });
        }}
      >
        {formInputs.genInfo}
      </textarea>

      <div>
        <label htmlFor="happy">Are You Happy?</label>
        <input
          type="checkbox"
          name="happy"
          id="happy"
          checked={formInputs.isHappy}
          onChange={(e) => {
            setFormInputs({ ...formInputs, isHappy: e.target.checked });
          }}
        />
      </div>

      <div>
        <label>Gender:</label>

        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          checked={formInputs.gender == "male"}
          onChange={(e) => {
            setFormInputs({ ...formInputs, gender: e.target.value });
          }}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          checked={formInputs.gender == "female"}
          onChange={(e) => {
            setFormInputs({ ...formInputs, gender: e.target.value });
          }}
        />
        <label htmlFor="female">Female</label>
      </div>

      <input type="submit" value="Send" />
    </form>
  );
}
