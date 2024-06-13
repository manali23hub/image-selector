import { Component , VERSION, OnInit} from '@angular/core';
//importing json file 
import * as Data from '../assets/image.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'image-selector';
    //initializing variables
  dropdown_level: any;
  imgSelectArr: any[] = [];
  count: any = 0;
  img_list = [5,10,15,20];
  selectedValue: any;
  imageArr: any = Data['sample'];
  //Image click function
  imageClicked(img: any) {
    this.count = this.count + 1;
    //Setting boolean field found_image to find out image is selected or de-selected
    const found_image = this.imgSelectArr.some((el: any) => el.id === img.id);
    
    if (found_image) {
      //setting count to 0 as image is de-selected
      img.count = 0;
      //find index of the image which is deselected using findIndex function 
      //and removing it from array using splice function .
      this.imgSelectArr.splice(this.imgSelectArr.findIndex((a) => a.id === img.id),1);
      //updating count
      this.count = 0;
      this.imgSelectArr.forEach((element) => {
        this.count = this.count + 1;
        element.count = this.count;
      });
    }
    else if (!found_image) {
      img.isChecked = true;
      img.count = this.count;
      //Pushing image in the array
      this.imgSelectArr.push(img);
    }

  }


  }
  

