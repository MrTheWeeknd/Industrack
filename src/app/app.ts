import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/components/navbar/navbar";
main
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


import { Titulo } from "./core/components/titulo/titulo";
import { ListCard } from "./core/components/list-card/list-card";
import { Card } from './core/components/card/card';
main

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, Navbar, ListCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
main
export class App {
ac9237a3974dfda9dd1d273ff5561f6f7ae6ce4c

export class App  {
main
  protected readonly title = signal('Industrack');
}
