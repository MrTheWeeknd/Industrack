import { Routes } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
 HEAD
import { ListCard } from './core/components/list-card/list-card';
import { Historico } from './pages/historico/historico';

export const routes: Routes = [
    {path: "", component: ListCard, title: "Home"},
    {path: "estoque", component: ListCard, title: "Estoque"},
    {path: "historico", component: Historico, title: "Histórico de Movimentações"}


export const routes: Routes = [
    {path: "", component: Navbar, title: "Home"}
 ac9237a3974dfda9dd1d273ff5561f6f7ae6ce4c
];
