import Input from "../Common/Input";
import { WiStars } from "react-icons/wi";
import { useState } from "react";
import Header from "../Common/Header";
import Message from "../Common/Message";
import styles from "../Common/Dashboard.module.scss";
import { contactus } from "../../Service/ContactUsService";

const Add = () => {
  const [msg, setMsg] = useState(0);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { fname, lname, email, password } = event.target;

    console.log(fname.value, lname.value, email.value, password.value);

    // console.log(gender.value);
    if (fname.value !== "" && lname.value !== "" && email.value !== "") {
      const result = await contactus({
        email: email.value,
        message: password.value,
        fname: fname.value,
        lname: lname.value,
      });

      //   result.then((res)=>{
      setError(result?.data?.error);
      setMessage(result?.data?.message);
      setMsg(1);
      //   }).catch((error)=>{
      //     console.log(error)
      //   })
    } else {
      setError("**Please Enter valid details");
    }
  };

  return (
    <main>
      <Header message="Contact Us" ficon={<WiStars />} />

      <div className={styles.box}>
        {msg !== 0 && <Message />}
        <form onSubmit={handleSubmit}>
          <Input
            label="First Name"
            placeholder="Enter Your First Name"
            name="fname"
          />
          <Input
            label="Last Name"
            placeholder="Enter Your Last Name"
            name="lname"
          />
          <Input label="Email ID" placeholder="Enter Your Email" name="email" />
          <Input
            label="Message"
            placeholder="Enter Your Message"
            name="password"
          />
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <button className="btn btn-primary"> Submit </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Add;
