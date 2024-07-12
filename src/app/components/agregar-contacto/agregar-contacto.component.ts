import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto.model';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.css']
})
export class AgregarContactoComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';

  constructor(private contactoService: ContactoService, private router: Router) { }

  agregarContacto(): void {
    const nuevoContacto = new Contacto(0, this.nombre, this.email, this.telefono);
    this.contactoService.agregarContacto(nuevoContacto);
    this.router.navigate(['/']);
  }
}
