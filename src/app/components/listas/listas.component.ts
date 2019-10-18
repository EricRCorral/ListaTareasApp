import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../servicios/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList, {static: true} ) lista: IonList;
  @Input() terminada = true;

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {

    if (this.terminada === false) {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }
  }

  borrarLista( lista: Lista ) {
    return this.deseosService.borrarLista( lista );
  }

  async editarLista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: `Editar ${lista.titulo}`,
      inputs: [{
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => this.lista.closeSlidingItems() },
        {
        text: 'Guardar',
        handler: (data) => {
          if (data.titulo.length === 0) {
            return;
         }
          lista.titulo = data.titulo;
          this.deseosService.guardarStorage();
          this.lista.closeSlidingItems();
        }
        }
      ]
    });
    alert.present();
  }

}
