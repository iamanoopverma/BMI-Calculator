    
const age=document.getElementById("age");
const height=document.getElementById("height");
const weight=document.getElementById("weight");
const instruction=document.getElementById("instruction");
const radios = document.getElementsByName("gender");
const range=document.getElementById("range");  

function validation(){
   
    if(age.value<=0 || age.value>100){
        instruction.innerHTML="Instruction: age should be between 1 to 100.";
        instruction.style.color="red";
        return false;
    }
    if(!radios[0].checked && !radios[1].checked){
        instruction.innerHTML="Instruction: Please Select gender for better calculation.";
        instruction.style.color="red";
        return false;
    }
    if(height.value<66 || height.value>244){
        instruction.innerHTML="Instruction: height should be between 66 to 244.";
        instruction.style.color="red";
        return false;
    }
    if(weight.value<3 || weight.value>200){
        instruction.innerHTML="Instruction: weight should be between 3 to 200.";
        instruction.style.color="red";
        return false;
    }
    instruction.innerHTML="";
    return true;
} 

function bmiCalculation(){
    range.style.color="white";
    if(validation()){
        const selectedOptionForGender=document.querySelector('input[name="gender"]:checked');
        var adjustment=0;
        if(selectedOptionForGender.value="Male"){
            adjustment=1.0;
        }
        else{
            adjustment=0.9;
        }
        const calculatedBmi= weight.value/((height.value/100)**2) + (0.02*age.value*adjustment);
        range.innerHTML=(calculatedBmi.toFixed(2));
        if(calculatedBmi>=18.50 && calculatedBmi<=25){
            instruction.innerHTML="Congratulations! Your BMI is Healthy.";
            instruction.style.color="darkgreen";
            range.style.backgroundColor="darkgreen";
        }
        else if(calculatedBmi>=1 && calculatedBmi<=14){
            instruction.innerHTML="Please Pay Attention! You are Underweight.";
            instruction.style.color="darkred";
            range.style.backgroundColor="darkred";
        }
        else if(calculatedBmi>14 && calculatedBmi<18.50){
            instruction.innerHTML="Pay Attention! You are on risk of Underweight.";
            instruction.style.color="darkblue";
            range.style.backgroundColor="darkblue";
        }
        else if(calculatedBmi>25 && calculatedBmi<=30){
            instruction.innerHTML="Pay Attention! You are on risk of overweight.";
            instruction.style.color="darkblue";
            range.style.backgroundColor="darkblue";
        }
        else if(calculatedBmi>30){
            instruction.innerHTML="Please Pay Attention! You are overweight.";
            instruction.style.color="darkred";
            range.style.backgroundColor="darkblue";
        }

        
    }
}
