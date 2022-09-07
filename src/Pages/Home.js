import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Layout from "../Component/Shared/FormGroup/Layout/Layout";
import Text from "../Component/Shared/FormGroup/Text/Text";
import FormGroup from "../Component/Shared/FormGroup/FormGroup";
import Button from "../Component/Shared/Button/Button";
import "./Home.css";
import CheckBox from "../Component/Shared/FormGroup/CheckBox/CheckBox";
import RadioButton from "../Component/Shared/FormGroup/RadioButton/RadioButton";
import InputText from "../Component/Shared/FormGroup/InputText/InputText";
import Select from "../Component/Shared/FormGroup/Select/Select";

function Home() {
  const submitForm = () => {
    alert("form submit success");
  };
  // use useForm to mange validation and values
  const {
    register, // register the form field for manage events and validations.
    handleSubmit,
    formState: { errors = {}, isValid, dirtyFields, isDirty }, // we got all the errors on errors key
    watch

  } = useForm();
  //get current password value
  const password = useRef({});
  //console.log({ isValid, dirtyFields, isDirty })
  password.current = watch("password", "");//get value password
  //console.log("password:" + password.current);

  const country = [
    { key: "please select a country", value: "" },
    { key: "India", value: "In" },
    { key: "pakistan", value: "pk" },
    { key: "USA", value: "us" },
  ];
  const hobbyOptions = [
    { optionLabel: "Reading Book", value: "Reading Book" },
    { optionLabel: "Singing", value: "Singing" },
    { optionLabel: "playing chess", value: " playing chess" },
  ];

  const genderOptions = [
    { option: "Male", value: "Male" },
    { option: "FeMale", value: "Female" },
  ];
  const isdisable = !(isDirty && Object.keys(dirtyFields).length === 6)//create constant for disable submit button
  console.log(errors.email, "errors");
  return (
    <div className="container">
      <div className="header-section">
        <Layout>
          <Text text="Registration Form" size="lg" as="h1" />
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="homeWrapper">
              <FormGroup>
                <Text text="First Name*" as="label" />
                <InputText
                  type="text"
                  placeholder="Enter your Name"
                  isError={errors.fullName}
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <Text text="Error : First name is required." as="span" color="red" />
                )}
              </FormGroup>
              <FormGroup>
                <Text text="Last Name*" as="label" />
                <InputText
                  type="text"
                  placeholder="Enter your Name"
                  isError={errors.lastName}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <Text text="Error : last name is required." as="span" color="red" />
                )}
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <Text text="Email*" as="label" />
                <InputText
                  type="text"
                  placeholder="Enter user Email Id"
                  isError={errors.email}
                  {...register("email", {
                    required: true,
                    pattern: /^[^s@]+@[^s@]+.[^s@]+$/,
                  })}
                />
                {errors.email && (
                  <Text text="Error : Email address is required." as="span" color="red" />
                )}
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Text text="Password*" as="label" />
                <InputText
                  name="password"
                  type="password"
                  placeholder="Enter the Password"
                  isError={errors.password}
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <Text text="Error : Password is required." as="span" color="red" />
                )}
              </FormGroup>
            </div>
            <div>
              <FormGroup>
                <Text text="Confirm Password*" name="password_repeat" as="label" />
                <InputText type="password" {...register("password_repeat", { validate: value => value === password.current })} />
                {errors.password_repeat && (
                  <Text text="Error : password does not match." as="span" color="red" />
                )}

              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Text text="Address*" as="label" />
                <InputText
                  type="text"
                  label="Address"
                  placeholder="Enter Address value"
                  isError={errors.address}

                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <Text text="Error : address is required." as="span" color="red" />
                )}
              </FormGroup>
            </div>

            <div>
              <FormGroup>
                <Text text="Select Country*" as="label" />
                <Select type="select" options={country} />
              </FormGroup>
            </div>
            <FormGroup>
              <div className="hobbyWrapper">
                <Text text="Hobby" as="label" />
                <div className="checkbox">
                  <CheckBox name="hobby" options={hobbyOptions} />
                </div>
              </div>
            </FormGroup>

            <div>
              <Text text="Gender" as="label" />
              <div className="radioButton">
                <RadioButton name="Gender" options={genderOptions} />
              </div>
            </div>



            <div className="buttonWrapper">
              <Button
                variant="contained"
                type="submit"
                text="Submit"
                disabled={isdisable}
              />
            </div>
          </form>
        </Layout>
      </div>
    </div>
  );
}

export default Home;