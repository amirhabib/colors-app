import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  onColorChange:EventEmitter<string> = new EventEmitter<string>();

  colors = [
    'red',
    'green',
    'tomato',
    'steelblue'
  ]

  constructor() { }

  getColors():string[] {
    return this.colors
  }

  setSelectedColor( color:string ) {
    console.log('Event onColorChange fired with color: ' + color)
    this.onColorChange.emit( color )
  }

}
