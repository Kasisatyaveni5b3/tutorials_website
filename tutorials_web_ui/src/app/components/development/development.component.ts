import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Angular',
    children: [
      {
        name: 'Components',
        children: [{name: 'Component Lifecycle'}, {name: 'View Encapsulation'}, {name: 'Component Styles'}, {name: 'Sharing data between child and parent directives and components'}],
      },
      {
        name: 'Directives',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
      {
        name: 'Binding',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
      {
        name: 'Services',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
      {
        name: 'rxjs',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
      {
        name: 'ngrx',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
  {
    name: 'Nodejs',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
  {
    name: 'Devops',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss'],
})
export class DevelopmentComponent {
   
  links = [
    { name: 'Angular', url: '/angular', isActive: false },
    { name: 'Nodejs', url: '/nodejs', isActive: false },
    { name: 'Expressjs', url: '/expressjs', isActive: false },
  ];

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
