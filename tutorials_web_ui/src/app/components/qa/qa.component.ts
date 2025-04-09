import { Component } from '@angular/core';
import { CommSerService } from 'src/app/sharedServices/comm-ser.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent {
  
  constructor(private cs: CommSerService) {

  }
  ngOnInit() {

    // this.cs.getUsers().subscribe({
    //   next:(data:any) => {
    //     console.log(data)
    //   }
    // })
    // const name: any = document.getElementsByClassName("dom")[0];
    // name.style.color = "blue"
    // const name_: any = document.getElementsByName("kasi")[0];
    // console.log(name_)
    // name_.value = "dom working";

    //To solve this in O(n) time, I use Set to get constant time lookup. 
    // I iterate over each array once, pushing elements that are not in the other. 
    // This avoids nested loops and gives me the result efficiently. 
    // The overall time complexity is O(n + m), which is linear.

    // let a = [4, 5, 2, 1];
    // let b = [4, 7, 2, 3];

    // console.log(this.uniqueElements(a,b))

    let a = [5, 8, 3, 7, 4, 7];

    // Step 1: Sort the array in descending order using bubble sort
    for (let i = 0; i < a.length - 1; i++) {
      debugger;
      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] < a[j + 1]) {
          // Swap a[j] and a[j + 1]
          let temp = a[j];
          a[j] = a[j + 1];
          a[j + 1] = temp;
        }
      }
    }
    
    console.log("Sorted Array (Descending):", a); // [8, 7, 7, 5, 4, 3]
    
    // Step 2: Find the second largest unique number
    let first = a[0];
    let secondLargest = null;
    
    for (let i = 1; i < a.length; i++) {
      if (a[i] < first) {
        secondLargest = a[i];
        break;
      }
    }
    
    console.log("Second Largest Unique Number:", secondLargest); // 7
    


    // const setA = new Set(a);
    // const setB = new Set(b);
    // const result = [];
    // for(const val of setA) {
    //   if(!setB.has(val)) {
    //     result.push(val)
    //   }
    // }
    // for(const val of setB) {
    //   if(!setA.has(val)) {
    //     result.push(val)
    //   }
    // }

  }



  uniqueElements() {
   
  }

  // ngAfterViewInit() {
  //   const input = document.getElementsByName("myInput")[0] as HTMLInputElement;
  //   if(input) {
  //     input.value ="hello"
  //   }
    
  // }
  

  Dom() {
    const title : any = document.getElementById("learningDom")
    title.innerText ="text changes"
    title.style.color="blue"

  }
}
