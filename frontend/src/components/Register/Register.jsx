//STYLES
import register from "../../Service/RegisterService";
import Input from "../Common/Input";
import styles from "./Register.module.scss";
import People1 from "../../pics/people1.jpg";
import React, { useState } from "react";
import RadioMaterial from "../Common/RadioMUI";
import { Grid } from "@mui/material";
const Signup = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const digits_count = (n) => {
    var count = 0;
    if (n >= 1) ++count;

    while (n / 10 >= 1) {
      n /= 10;
      ++count;
    }

    return count;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, email, password, dob, cpassword, gender, mob } =
      event.target;
    // console.log(gender.value);
    if (
      cpassword.value === password.value &&
      fname.value !== "" &&
      lname.value !== "" &&
      email.value !== "" &&
      digits_count(mob.value) === 10
    ) {
      const result = register({
        email: email.value,
        password: password.value,
        fname: fname.value,
        lname: lname.value,
        dob: dob.value,
        gender: gender.value,
        mob: mob.value,
      });

      result
        .then((res) => {
          setError(res?.data?.error);
          setMessage(res?.data?.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError("**Please Enter valid details");
    }
  };

  return (
    <div className={styles.registerbody}>
      <div className={styles.registerlogo}>
        <div>
          <img src={People1} alt="person" className={styles.avatar} />
        </div>

        <h1>Register</h1>
        <div className="text-danger">{<p>{error}</p>}</div>
        <div className="text-success">{<p>{message}</p>}</div>
        <form onSubmit={handleSubmit} method="post">
          <Grid container>
            <Grid item md={6} xs={6} xl={6}>
              <Input placeholder="Enter Your First Name" name="fname" />
            </Grid>
            <Grid item md={6} xs={6} xl={6}>
              <Input placeholder="Enter Your Last Name" name="lname" />
            </Grid>
            <Grid item md={12} xs={12} xl={12}>
              <Input placeholder="Enter Your Email" name="email" type="email" />
            </Grid>
            <Grid item md={6} xs={6} xl={6}>
              <Input placeholder="Enter Your Password" name="password" />
            </Grid>
            <Grid item md={6} xs={6} xl={6}>
              <Input
                placeholder="Enter Your Confirm Password"
                name="cpassword"
              />
            </Grid>
            <Grid item md={6} xs={6} xl={6}>
              <Input
                placeholder="Enter Your valid Mobile number"
                name="mob"
                type="number"
              />
            </Grid>
            <Grid item md={6} xs={6} xl={6}>
              <Input
                placeholder="Enter Your valid Mobile number"
                name="dob"
                type="date"
              />
            </Grid>
          </Grid>

          <RadioMaterial name="gender" />
          <input type="submit" value="Register" />
          <span>
            Already have an account ?<a href="/login">Click to login</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
