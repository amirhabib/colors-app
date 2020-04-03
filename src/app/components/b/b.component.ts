import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  titleColor = 'blue';

  constructor(private colorService:ColorsService) {
    colorService.onColorChange.subscribe( newColor => {
      this.titleColor = newColor;
    })
  }

  ngOnInit() {
  }

}
