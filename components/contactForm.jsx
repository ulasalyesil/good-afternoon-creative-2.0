// packages
import axios from "axios";
import { useState } from "react";

// components
import Input from "./ui/input";
import Button from "./ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("@/api-handlers/submitForm", formData);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const styles = {
    body: "w-screen h-screen flex flex-col px-4 sm:px-8 bg-black text-white relative overflow-hidden sm:overflow-automatic",
    inputWrapper: "flex flex-col gap-4",
    inputSubtitle: "text-lg",
    textArea:
      "w-80 sm:w-full h-24 pl-2 pt-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-black focus:border-transparent border-2 border-neutral-500 text-black focus:text-white",
  };
  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      acceptCharset="UTF-8"
      className="flex flex-col gap-6 w-[512px]"
    >
      <div className={styles.inputWrapper}>
        <h3 className={styles.inputSubtitle}>Name</h3>
        <Input
          type={"text"}
          name={"name"}
          placeholder={"John Doe"}
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputWrapper}>
        <h3 className={styles.inputSubtitle}>Email</h3>
        <Input
          type={"email"}
          name={"email"}
          placeholder={"john@doe.com"}
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.inputWrapper}>
        <h3 className={styles.inputSubtitle}>Subject</h3>
        <Input
          type={"subject"}
          name={"subject"}
          value={formData.subject}
          onChange={handleInputChange}
          placeholder={"I need a new branding!"}
        />
      </div>
      <div className={styles.inputWrapper}>
        <h3 className={styles.inputSubtitle}>Message</h3>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your message..."
          className={styles.textArea}
        ></textarea>
      </div>
      <Button label={"Shoot"} style={"light"} type={"submit"} />
    </form>
  );
}
