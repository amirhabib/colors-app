import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {

  constructor(private colorsService:ColorsService) { }

  colors:string[];

  ngOnInit() {
    this.colors = this.colorsService.getColors()
  }

  changeColor(color) {
    if(color != '0')
      this.colorsService.setSelectedColor(color);
  }
}
