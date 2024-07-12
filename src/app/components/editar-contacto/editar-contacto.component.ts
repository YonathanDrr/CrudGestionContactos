import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto.model';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {
  contacto: Contacto | undefined;
  nombre: string = '';
  email: string = '';
  telefono: string = '';

  constructor(
    private route: ActivatedRoute,
    private contactoService: ContactoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contacto = this.contactoService.obtenerContactoPorId(id);
    if (this.contacto) {
      this.nombre = this.contacto.nombre;
      this.email = this.contacto.email;
      this.telefono = this.contacto.telefono;
    }
  }

  actualizarContacto(): void {
    if (this.contacto) {
      this.contacto.nombre = this.nombre;
      this.contacto.email = this.email;
      this.contacto.telefono = this.telefono;
      this.contactoService.actualizarContacto(this.contacto);
      this.router.navigate(['/']);
    }
  }
}
