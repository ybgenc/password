import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = ""; 
  title = 'password';
  length : number = 0;
  includeLetters : boolean = false;
  includeNumbers : boolean = false;
  includeSymbols : boolean = false;

  modifyLength(value : string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){

      
      this.length = parsedValue;
    }

  }

  
  buttonClick(){
    const numbers ="123456789";
    const letters ="abcdefghijklmnoprstuvyxqz";
    const symbols = "!@*$%&#^()[]{}=";

    let validChars = "";
    if(this.includeLetters){
      
      validChars += letters;
    }

    if(this.includeNumbers){
      
      validChars += numbers;
    }

    if(this.includeSymbols){
      
      validChars += symbols;
    }

    let generatedPassword = "";

    for(let i = 0; i<this.length; i++){
      const index= Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;  

    }

  modifyLetters(){
    this.includeLetters = !this.includeLetters;
  }
  modifyNumbers(){

    this.includeNumbers = !this.includeNumbers;

  }
  modifySymbols(){

    this.includeSymbols = !this.includeSymbols;

  }








}
