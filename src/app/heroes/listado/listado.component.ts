import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Ironman', 'Hulk', 'Saitama', 'King'];

  public heroeBorrado:string = '';

  borrarHeroe():void {
  
    this.heroeBorrado = this.heroes.pop() || '';
        
  }
}
