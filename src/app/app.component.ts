import { Component , VERSION, OnInit} from '@angular/core';
import * as Data from '../assets/image.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  dropdown_level: any;
  title = 'image-selector';
  imgSelectArr: any[] = [];
  count: any = 0;
  img_list = [5,10,15,20];
  selectedValue: any;
  imageArr: any = Data['sample'];
  ngOnInit(): void {
    console.log('oninit');
  }
  imageClicked(img: any) {
    this.count = this.count + 1;
    const found_image = this.imgSelectArr.some((el: any) => el.id === img.id);
    if (!found_image) {
      img.isChecked = true;
      img.count = this.count;
      this.imgSelectArr.push(img);
    }
    if (found_image) {
      img.count = 0;
      this.imgSelectArr.splice(
        this.imgSelectArr.findIndex((a) => a.id === img.id),1);
      this.count = 0;
      this.imgSelectArr.forEach((element) => {
        this.count = this.count + 1;
        element.count = this.count;
      });
    
    }

  }


  }
  

