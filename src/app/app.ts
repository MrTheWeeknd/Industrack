import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/components/navbar/navbar";
HEAD
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


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
ac9237a3974dfda9dd1d273ff5561f6f7ae6ce4c
  protected readonly title = signal('Industrack');
}
