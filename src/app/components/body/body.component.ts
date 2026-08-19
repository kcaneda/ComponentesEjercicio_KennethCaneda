import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
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
  visible = true;
  cambiarEstadoTabla() {
    this.visible = !this.visible;

  }

  aumentarStock(producto: any) {
    producto.stock++;
  }
  disminuirStock(producto: any) {
    if (producto.stock > 0) {
      producto.stock--;
    }
  }
  productoSeleccionado: any = null;
  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }
}
