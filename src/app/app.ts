import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/components/navbar/navbar";
import { Titulo } from "./core/components/titulo/titulo";
import { ListCard } from "./core/components/list-card/list-card";
import { Card } from './core/components/card/card';
import { Historico } from './pages/historico/historico';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Navbar, ListCard, Historico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  protected readonly title = signal('Industrack');
}
