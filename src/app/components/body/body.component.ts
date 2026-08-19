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

  visible = true;
  cambiarEstadoTabla() {
    this.visible = !this.visible;

  }
  aumentarStock(producto: any) {
    producto.stock++;
    this.productosDisponibles = this.productos.filter(p => p.stock > 0).length;
    this.productosAgotados = this.productos.filter(p => p.stock === 0).length;
  }
  disminuirStock(producto: any) {
    if (producto.stock > 0) {
      producto.stock--;
      this.productosDisponibles = this.productos.filter(p => p.stock > 0).length;
      this.productosAgotados = this.productos.filter(p => p.stock === 0).length;
    }
  }
  productoSeleccionado: any = null;
  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }
  productosDisponibles = this.productos.filter(p => p.stock > 0).length;
  productosAgotados = this.productos.filter(p => p.stock === 0).length;


  busqueda = "";
  resultado = this.productos;
  sinResultados = false;
  buscar() {
    this.resultado = this.productos.filter(p => p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
    this.sinResultados=false;
    if (this.resultado.length === 0) {
      this.sinResultados = true;
    }

  }
}
