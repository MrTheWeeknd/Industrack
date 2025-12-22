import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico',
  imports: [CommonModule],
  templateUrl: './historico.html',
  styleUrl: './historico.css',
})
export class Historico {
  movimentacoes: any[] = [];

  exportar() {
    console.log('Exportar histórico');
  }

  registrarMovimentacao() {
    console.log('Registrar movimentação');
  }
}

