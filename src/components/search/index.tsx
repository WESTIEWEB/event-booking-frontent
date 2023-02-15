import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Buttons/Buttons";
import InputField from "../../components/InputField/InputField";
import { FaArrowRight } from "react-icons/fa";

const Main = styled.div`
  height: 120px;
  display: flex;
  margin: 20px auto;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #10375c;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Form = styled.form`
  width: 80%;
  display: flex; 
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backgroud-color: #fff;
    width: 100%;
  }
`;

interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
}

const FormInput = () => {
 

  return (
    <Main>
      <Form>
        <InputField
          type="text"
          name="text"
          placeholder="Search events"
          label="what are you looking" value={""} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          } }         
         
        />
        <InputField
          type="text"
          name="location"
          placeholder="Lagos, Nigeria"
          options={["Lagos, Nigeria", "Delta", "Anambra"]}
          label="Location"
         
        />
        <InputField
          type="date"
          name="date"
          options={["Any date", "Today", "Tomorrow", "This week"]}
          label="When"
        
        />
        <Button
          
          styleType="secondary"
          content={<FaArrowRight style={{ color: "#fff", fontSize: "18px" }} />} height={""} width={""} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }        />
      </Form>
    </Main>
  );
};

export default FormInput;
