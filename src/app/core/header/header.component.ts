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

  offScreenMenu(){
    this.ScreenMenu = true;
  }

  onScreenMenu(){
    this.ScreenMenu = false;
  }

  

}
