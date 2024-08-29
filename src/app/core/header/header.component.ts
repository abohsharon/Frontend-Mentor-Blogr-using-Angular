import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  ScreenMenu: boolean = false ;
  isDropdownOpen1 = false;
  isDropdownOpen2 = false;
  isDropdownOpen3 = false;

  offScreenMenu(){
    this.ScreenMenu = true;
  }

  onScreenMenu(){
    this.ScreenMenu = false;
  }

  toggleDropdown1(){ 
    this.isDropdownOpen1 = !this.isDropdownOpen1;
    }
    
  
  
  toggleDropdown2(){
    this.isDropdownOpen2 = !this.isDropdownOpen2;
    // if(!this.isDropdownOpen2){
    //   this.isDropdownOpen1 == false;
    //   this.isDropdownOpen3;
    // }
    // this.isDropdownOpen2 == this.isDropdownOpen1 && this.isDropdownOpen3;
    
  }
  
  toggleDropdown3(){
    this.isDropdownOpen3 = !this.isDropdownOpen3;
  }

}
