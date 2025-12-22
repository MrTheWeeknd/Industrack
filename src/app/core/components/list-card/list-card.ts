import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-card.html',
  styleUrl: './list-card.css',
})
export class ListCard {
produtos = [
  {
    nome: "Aço Laminado",
    unidadeMedida: "kg",
    qtdAtual: 1000,
    qtdMin: 3000,
    categoria: "Matéria-prima"
  },
  {
    nome: "Tinta Industrial Epóxi",
    unidadeMedida: "L",
    qtdAtual: 850,
    qtdMin: 200,
    categoria: "Insumos"
  },
  {
    nome: "Parafuso M10",
    unidadeMedida: "un",
    qtdAtual: 5000,
    qtdMin: 1000,
    categoria: "Componentes"
  },
  {
    nome: "Lubrificante Industrial",
    unidadeMedida: "L",
    qtdAtual: 320,
    qtdMin: 80,
    categoria: "Manutenção"
  }
]


}
