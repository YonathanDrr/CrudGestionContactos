import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto.model';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
  contactos: Contacto[] = [];

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.contactos = this.contactoService.obtenerContactos();
  }

  eliminarContacto(id: number): void {
    this.contactoService.eliminarContacto(id);
    this.contactos = this.contactoService.obtenerContactos();
  }
}
