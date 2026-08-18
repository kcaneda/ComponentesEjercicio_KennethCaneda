import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class Body {
  productos = [
    { id: 1, nombre: "Laptop Lenovo", categoria: "Computadoras", precio: 6500, stock: 5, activo: true },
    { id: 1, nombre: "Mouse Logitech", categoria: "Accesorios", precio: 175, stock: 0, activo: true },
    { id: 1, nombre: "Teclado mecánico", categoria: "Accesorios", precio: 450, stock: 8, activo: true },
    { id: 1, nombre: "Monitor Samsung 24''", categoria: "Monitores", precio: 1850, stock: 2, activo: true },
    { id: 1, nombre: "Webcam Logitech", categoria: "Accesorios", precio: 550, stock: 0, activo: false }
  ]
  cantidadProductos = this.productos.length;

  /*ID Producto Categoría Precio Stock Activo
1 Laptop Lenovo Computadoras Q6,500 5 Sí
2 Mouse Logitech Accesorios Q175 0 Sí
3 Teclado Mecánico Accesorios Q450 8 Sí
4 Monitor Samsung 24" Monitores Q1,850 2 Sí
5 Webcam Logitech Accesorios Q550 0 No*/
}
