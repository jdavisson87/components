import React from "react";
import useSignUpForm from "./hooks/useSignUpForm";
import styled from "@emotion/styled";

const RestaurantForm = () => {
  const signup = () => {
    alert(`Your Reservation has been made! 
Name: ${inputs.firstName} ${inputs.lastName}
Email: ${inputs.email}
Phone: ${inputs.phone}
Reservation: ${inputs.time}

If you have any further questions, please call us at (888) 888-8888`);
  };
  const {
    inputs,
    handleInputChange,
    handleSelectChange,
    handleSubmit
  } = useSignUpForm(
    { firstName: "", lastName: "", email: "", phone: "", time: "7:00 PM" },
    signup
  );
  return (
    <RestaurantFormCtr>
      <h1 data-testid="form-title">Restaurant Form</h1>
      <ReservationForm onSubmit={handleSubmit} data-testid="restaurant-form">
        <IndividualField>
          <Fields>First Name</Fields>
          <IndividualInput
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
        </IndividualField>
        <IndividualField>
          <Fields>Last Name</Fields>
          <IndividualInput
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={inputs.lastName}
            required
          />
        </IndividualField>
        <IndividualField>
          <Fields>Email Address</Fields>
          <IndividualInput
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </IndividualField>
        <IndividualField>
          <Fields>Phone Number</Fields>
          <IndividualInput
            type="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleInputChange}
            value={inputs.phone}
            placeholder="###-###-####"
            required
          />
        </IndividualField>
        <IndividualField>
          <Fields>Time</Fields>
          <TimeSelect
            onChange={handleSelectChange}
            value={inputs.time}
            required
          >
            <option value="7:00 PM">7:00PM</option>
            <option value="7:15 PM">7:15PM</option>
            <option value="7:30 PM">7:30PM</option>
            <option value="7:45 PM">7:45PM</option>
            <option value="8:00 PM">8:00PM</option>
            <option value="8:15 PM">8:15PM</option>
            <option value="8:30 PM">8:30PM</option>
            <option value="8:45 PM">8:45PM</option>
            <option value="9:00 PM">9:00PM</option>
            <option value="9:15 PM">9:15PM</option>
            <option value="9:30 PM">9:30PM</option>
            <option value="9:45 PM">9:45PM</option>
            <option value="10:00 PM">10:00PM</option>
          </TimeSelect>
        </IndividualField>
        <SubmitBtn type="submit" data-testid="submitBtn">
          Submit
        </SubmitBtn>
      </ReservationForm>
    </RestaurantFormCtr>
  );
};

export default RestaurantForm;

const RestaurantFormCtr = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ReservationForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 15px;
`;

const IndividualField = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IndividualInput = styled.input`
  width: 200px;
  font-size: 18px;
`;

const TimeSelect = styled.select`
  width: 200px;
  font-size: 18px;
`;

const Fields = styled.h3`
  margin: 5px;
`;

const SubmitBtn = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  align-self: center;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  -o-transition: 0.7s;
  -ms-transition: 0.7s;
  -moz-transition: 0.7s;
  -webkit-transition: 0.7s;
  :hover {
    cursor: pointer;
    background: black;
    color: white;
  }
`;
