import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private contactos: Contacto[] = [];
  private nextId: number = 1;

  constructor() { }

  obtenerContactos(): Contacto[] {
    return this.contactos;
  }

  obtenerContactoPorId(id: number): Contacto | undefined {
    return this.contactos.find(contacto => contacto.id === id);
  }

  agregarContacto(contacto: Contacto): void {
    contacto.id = this.nextId++;
    this.contactos.push(contacto);
  }

  actualizarContacto(contacto: Contacto): void {
    const index = this.contactos.findIndex(c => c.id === contacto.id);
    if (index !== -1) {
      this.contactos[index] = contacto;
    }
  }

  eliminarContacto(id: number): void {
    this.contactos = this.contactos.filter(contacto => contacto.id !== id);
  }
}
