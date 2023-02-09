import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  length = 0;
  password='';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatePassword = '';
    for(let i=0; i< this.length; i++) {
      const index = Math.floor(Math.random()* validChars.length);
      generatePassword += validChars[index];
    }
    this.password = generatePassword;
  }

  getPassword() {
    return this.password;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event:Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);
    //console.log(parsedValue);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
     // console.log(parsedValue);
    }
  }


 
}
