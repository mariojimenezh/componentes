import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  mostrar: boolean = true;
  secret: string = ""
  elemento : string [] =["Mario", "Carlos", "Antonio"]
  constructor() { }

  ngOnInit() {
  }

}
