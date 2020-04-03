import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  textColor = 'black';

  constructor(private colorsService:ColorsService) {
    colorsService.onColorChange.subscribe( color => {

      console.log('Component A knows that color changed to ' + color)
      this.textColor = color

    })
  }

  ngOnInit() {
  }

}
