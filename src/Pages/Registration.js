import React from "react";
import { useForm } from "../Hooks/useForm";
import Layout from "../Component/Shared/FormGroup/Layout/Layout";
import Text from "../Component/Shared/FormGroup/Text/Text";
import FormGroup from "../Component/Shared/FormGroup/FormGroup";
import Button from "../Component/Shared/Button/Button";
import "./Home.css";
import CheckBox from "../Component/Shared/FormGroup/CheckBox/CheckBox";
import RadioButton from "../Component/Shared/FormGroup/RadioButton/RadioButton";
import InputText from "../Component/Shared/FormGroup/InputText/InputText";
import Select from "../Component/Shared/FormGroup/Select/Select";

function Registration() {
  function conPass(allField, con_pass_val) {
    const pass = allField["password"].value;
    const isValid = pass === con_pass_val;
    return {
      isValid,
      errorMsg: "password don't match",
    };
  }
  const init = {
    firstName: {
      name: "firstName",
      value: "",
      isRequired: "First name is required",
    },
    lastName: {
      name: "lastName",
      value: "",
      isRequired: "last name is required",
    },
    email: {
      name: "email",
      value: "",
      isRequired: "email name is required",
      pattarn: {
        key: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        msg: "invalid mail address",
      },
    },
    password: {
      name: "password",
      value: "",
      isRequired: "password is required",
    },
    con_password: {
      name: "con_password",
      value: "",
      isRequired: "confirm password is required",
      callBack: conPass,
    },
    selectCountry: {
      name: "selectCountry",
      value: "",
      isRequired: "Country is required",
    },
    hobby: {
      name: "hobby",
      value: "",
      isRequired: "hobby is required",
    },
    gender: {
      name: "gender",
      value: "",
      isRequired: "gender is required",
    },
    address: {
      name: "address",
      value: "",
      isRequired: "address is required",
    },
  };
  const {
    formFileds,
    handleChangeField,
    validateAllFields,
    errors,
    isValidForm,
    reSetForm
  } = useForm({ initFileds: init });
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
    { optionLabel: "chess", value: "" },
  ];

  const genderOptions = [
    { option: "Male", value: "Male" },
    { option: "FeMale", value: "Female" },
    { option: "other", value: "" },

  ];
  const handleOnSubmit = (event) => {
    event.preventDefault();
    validateAllFields();
    if (!isValidForm()) {
      console.log("submit");
      reSetForm();
    }


  };
  const { firstName, lastName, email, password, con_password, selectCountry,  address } = formFileds;

  return (
    <div>
      <Layout>
        <Text text="Registration Form" size="lg" as="h1" />
        <form onSubmit={handleOnSubmit}>
          <div className="homeWrapper">
            <FormGroup>
              <Text text="First Name*" as="label" />
              <InputText
                name="firstName"
                type="text"
                value={firstName.value}
                placeholder="Enter your Name"
                onChange={handleChangeField}
                isError={errors.firstName}
              />
              {errors.firstName ? (
                <Text text={errors.firstName} as="span" color="red" />
              ) : null}
            </FormGroup>
            <FormGroup>
              <Text text="Last Name*" as="label" />
              <InputText
                name="lastName"
                type="text"
                value={lastName.value}
                placeholder="Enter your Name"
                isError={errors.lastName}
                onChange={handleChangeField}
              />
              {errors.lastName ? (
                <Text text={errors.lastName} as="span" color="red" />
              ) : null}
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Text text="Email*" as="label" />

              <InputText
                name="email"
                type="text"
                value={email.value}
                placeholder="Enter user Email Id"
                onChange={handleChangeField}
                isError={errors.email}
              />
              {errors.email ? (
                <Text text={errors.email} as="span" color="red" />
              ) : null}
            </FormGroup>
          </div>

          <div>
            <FormGroup>
              <Text text="Password*" as="label" />
              <InputText
                name="password"
                type="password"
                value={password.value}
                placeholder="Enter the Password"
                isError={errors.password}
                onChange={handleChangeField}
              />
              {errors.password ? (
                <Text text={errors.password} as="span" color="red" />
              ) : null}
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Text text="Confirm Password*" as="label" />
              <InputText
                type="password"
                name="con_password"
                value={con_password.value}
                onChange={handleChangeField}
                isError={errors.con_password}
              />
              {errors.con_password ? (
                <Text text={errors.con_password} as="span" color="red" />
              ) : null}
            </FormGroup>
          </div>

          <div>
            <FormGroup>
              <Text text="Address*" as="label" />
              <InputText
                name="address"
                type="text"
                value={address.value}
                label="Address"
                placeholder="Enter address value"
                onChange={handleChangeField}
                isError={errors.address}
              />
              {errors.address ? (
                <Text text={errors.address} as="span" color="red" />
              ) : null}
            </FormGroup>
          </div>

          <div>
            <FormGroup>
              <Text text="Select Country*" as="label" />

              <Select name="selectCountry" value={selectCountry.value} type="select" options={country} onChange={handleChangeField} />
              {errors.selectCountry ? (
                <Text text={errors.selectCountry} as="span" color="red" />
              ) : null}
            </FormGroup>
          </div>
          <FormGroup>
            <div className="hobbyWrapper">
              <Text text="Hobby" as="label" />
              <div className="checkbox">
                <CheckBox name="hobby"  options={hobbyOptions} onChange={handleChangeField} />
                {errors.hobby ? (
                  <Text text={errors.hobby} as="span" color="red" />
                ) : null}
              </div>
            </div>
          </FormGroup>
          <div>
            <Text text="Gender" as="label" />
            <div className="radioButton">
              <RadioButton name="gender" options={genderOptions} onChange={handleChangeField} />
              {errors.gender ? (
                <Text text={errors.gender} as="span" color="red" />
              ) : null}
            </div>
          </div>
          <div className="buttonWrapper">
            <Button
              variant="contained"
              type="submit"
              text="Submit"
              disabled={isValidForm()}
            />
          </div>

        </form>
      </Layout>
    </div>
  );
}

export default Registration;
