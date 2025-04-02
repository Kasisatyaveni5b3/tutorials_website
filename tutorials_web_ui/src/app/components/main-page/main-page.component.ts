import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevelopmentComponent } from '../development/development.component';
import { Subject, takeUntil } from 'rxjs';
import { QaComponent } from '../qa/qa.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
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
}
