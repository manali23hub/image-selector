import { Component , VERSION, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'image-selector';
  imgClickedArr = [];
  count: any = 0;
  imageArr = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
      isChecked: false,
      count: 0,
      imgPath:
        'https://s.tmimgcdn.com/scr/1200x627/74000/cat-logo-template_74033-2-original.jpg',
    },
    {
      userId: 2,
      id: 2,
      title: 'delectus aut autem',
      completed: false,
      isChecked: false,
      count: 0,
      imgPath:
        'https://creativebonito.com/wp-content/uploads/2019/10/panda-logo-templates-cover.png',
    },
    {
      userId: 3,
      id: 3,
      title: 'delectus aut autem',
      completed: false,
      isChecked: false,
      count: 0,
      imgPath:
        'https://scalebranding.com/wp-content/uploads/2020/07/t-rex-dinosaur-01.png',
    },
    {
      userId: 4,
      id: 4,
      title: 'delectus aut autem',
      completed: false,
      isChecked: false,
      count: 0,
      imgPath:
        'https://cdn1.vectorstock.com/i/1000x1000/10/10/elephant-logo-vector-10771010.jpg',
    },
    {
      userId: 5,
      id: 5,
      title: 'delectus aut autem',
      completed: false,
      isChecked: false,
      count: 0,
      imgPath:
        'https://images.creativemarket.com/0.1.0/ps/4230353/2417/1608/m1/fpnw/wm0/cm-12-.jpg?1522722760&s=afc2fde1ed0de884be9408bdf164b33c',
    },
  ];
  ngOnInit(): void {
    console.log('oninit');
  }
  imageClicked(img: any) {
    this.count = this.count + 1;
    //imgClickedArr contains the selected objects, find if the object already exists in the array before pushing the object to avoid redundency and remove the object from the array when image is de-selected also don't forget to update the count
    const found = this.imgClickedArr.some((el: any) => el.id === img.id);
    if (!found) {
      img.isChecked = true;
      img.count = this.count;
      this.imgClickedArr.push(img);
    }
    if (found) {
      img.count = 0;
      this.imgClickedArr.splice(
        this.imgClickedArr.findIndex((a) => a.id === img.id),
        1
      );
      this.count = 0;
      this.imgClickedArr.forEach((element) => {
        this.count = this.count + 1;
        element.count = this.count;
      });
    }
    console.log('clickedArr', this.imgClickedArr);
  }
}

