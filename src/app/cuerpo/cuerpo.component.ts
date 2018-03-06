import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  mostrar: boolean = true;
  secret: string = ""
  elemento : string [] =["Mario", "Carlos"]
  cambiar(event: any){
    this.secret = event.target.value
  }
  agregar(valor: string){
    //Añado a la lista si el input no está vacío
    if(valor.length>0)
      this.elemento.push(valor);
  }
  borrar(event: any){
    
  }
  eliminar(){ //Elimino de la lista si no está vacía
    if(this.elemento.length>0)
      this.elemento.pop()
  }
  constructor() { }

  ngOnInit() {
  }

}
