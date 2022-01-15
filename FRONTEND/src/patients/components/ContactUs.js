import React  from "react";
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE,VALIDATOR_PHONENUMBER} from "../../shared/Util/validators";



const ContactUs = props => {
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    const [formState, inputHandler , setFormData] = useForm(
        {
          name: {
            value: '',
            isValid: false
          },
          email: {
            value: '',
            isValid: false
          },
          phoneNumber: {
            value: '',
            isValid: false
          },
          message: {
            value: '',
            isValid: false
          }
        },
        false
      );

      const contactSubmitHandler = async event => {
          event.preventDefault();
          console.log("here")
          try{
            const responseData = await sendRequest(
                'http://localhost:5000/api/contact',
                'POST',
                JSON.stringify({
                  name : formState.inputs.name.value,
                  email: formState.inputs.email.value,
                  phoneNumber : formState.inputs.phoneNumber.value,
                  message : formState.inputs.message.value}),
                  {'Content-Type': 'application/json'});
            console.log(responseData);
            
          }
          catch(error){
              console.log(error);
          }
        }
        
      

    return(
      <React.Fragment>
        <ErrorModal error ={error} onClear={clearError}/>
        
        <Card className="contactUsCard">
          {isLoading && <LoadingSpinner asOverlay />}
        <h2>Contact Us</h2>
        <hr />
        <form onSubmit={contactSubmitHandler}>
            <Input element="input" id="name" type="text" label="Name" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a name." onInput={inputHandler} />
            <Input element="input" id="email" type="email" label="E-Mail" validators={[VALIDATOR_EMAIL()]} errorText="Please enter a valid email address."onInput={inputHandler}/>
            <Input element="input" id="phoneNumber" type="tel" label="Telephone" validators={[VALIDATOR_PHONENUMBER()]} errorText="Please enter a valid phone number." onInput={inputHandler} />
            <Input element="input" id="message" type="textarea"  label="Message" validators={[VALIDATOR_MINLENGTH(10)]} errorText="Please enter a message at least 10 letters." onInput={inputHandler} />
            <Button type="submit" disabled={!formState.isValid}> Submit </Button>
        </form>
        </Card>
      </React.Fragment>
    )
}

export default ContactUs;