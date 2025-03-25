import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  
  isMenuVisible : boolean=false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible
  }
}
