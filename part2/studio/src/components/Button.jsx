import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
import styling from "./styling.css"

function Button(props) {
  const saveButton = props.saveButton;
  if(saveButton === true){
    return <SaveButton />
  } else {
    return <ClickedButton />
  };
   
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 