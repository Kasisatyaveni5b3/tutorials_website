import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isMenuVisible: boolean = false;
    options = [
      {
        value: 'Development',
        label: 'Development',
      }, {
        value: 'QA',
        label: 'QA',
      },
    ];
  
    private readonly destroyed$ = new Subject<boolean>();
  
    constructor(private dialog: MatDialog, private router: Router) {}
  
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  
    development() {
      this.router.navigate(['/development']);
    }
  
    qa() {
      this.router.navigate(['/qa']);
    }
    
    tutorials() {
      this.router.navigate(['/mainPage']);
    }
}
