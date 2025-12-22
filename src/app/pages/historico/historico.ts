import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico',
  imports: [CommonModule],
  templateUrl: './historico.html',
  styleUrl: './historico.css',
})
export class Historico {
  movimentacoes: any[] = [
    {
      data: '22/11/2025 14:30',
      usuario: 'João Silva',
      item: 'Aço Laminado',
      tipo: 'Entrada',
      quantidade: 500,
      observacao: 'Recebimento de nova remessa'
    },
    {
      data: '22/11/2025 10:15',
      usuario: 'Maria Santos',
      item: 'Tinta Industrial Epóxi',
      tipo: 'Saída',
      quantidade: 50,
      observacao: 'Uso na produção'
    },
    {
      data: '21/11/2025 16:45',
      usuario: 'Pedro Costa',
      item: 'Parafuso M10',
      tipo: 'Entrada',
      quantidade: 2000,
      observacao: 'Reposição de estoque'
    },
    {
      data: '21/11/2025 09:20',
      usuario: 'Ana Oliveira',
      item: 'Lubrificante Industrial',
      tipo: 'Saída',
      quantidade: 20,
      observacao: 'Manutenção preventiva'
    },
    {
      data: '20/11/2025 15:10',
      usuario: 'Carlos Ferreira',
      item: 'Aço Laminado',
      tipo: 'Saída',
      quantidade: 300,
      observacao: 'Produção de peças'
    },
    {
      data: '20/11/2025 11:30',
      usuario: 'Juliana Lima',
      item: 'Tinta Industrial Epóxi',
      tipo: 'Entrada',
      quantidade: 100,
      observacao: 'Compra de insumos'
    },
    {
      data: '19/11/2025 13:45',
      usuario: 'Roberto Alves',
      item: 'Parafuso M10',
      tipo: 'Saída',
      quantidade: 500,
      observacao: 'Montagem de equipamentos'
    },
    {
      data: '19/11/2025 08:15',
      usuario: 'Fernanda Souza',
      item: 'Lubrificante Industrial',
      tipo: 'Entrada',
      quantidade: 80,
      observacao: 'Estoque de segurança'
    }
  ];

  exportar() {
  }
}

