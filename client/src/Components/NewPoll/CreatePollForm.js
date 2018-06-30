import React from "react";
import "./CreatePollForm.css";
import SmartOptionList from "../OptionList/SmartOptionList";
import Button from "./../Button/Button";
import Logo from "./../Logo/Logo";
import Input from "../Input/Input";

const CreatePollForm = () => {
  return (
    <form className="create-poll-form" action="api/newpoll" method="POST">
      <Input placeholder="Poll name" name="pollName" />
      <SmartOptionList />
      <Button
        type="submit"
        text={
          <div>
            <p>create poll &nbsp;</p> <Logo />
          </div>
        }
      />
    </form>
  );
};

export default CreatePollForm;
