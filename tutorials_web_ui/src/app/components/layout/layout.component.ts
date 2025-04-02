import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, take } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

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

    login() {
      this.dialog.open(LoginComponent, {
         width: '50%',
         height: '50%',
         data: {},
         disableClose: true
      }).afterClosed().pipe(take(1)).subscribe((next:any)=>{
      })
    }

    register() {
      this.dialog.open(RegisterComponent, {
        width: '50%',
        height: '55%',
        data: {},
        disableClose: true
     }).afterClosed().pipe(take(1)).subscribe((next:any)=>{
     })
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
