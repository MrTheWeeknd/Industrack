import { Routes } from '@angular/router';
import { ListCard } from './core/components/list-card/list-card';
import { Historico } from './pages/historico/historico';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {path: "login", component: Login, title: "Login"},
    {path: "", component: ListCard, title: "Home"},
    {path: "estoque", component: ListCard, title: "Estoque"},
    {path: "historico", component: Historico, title: "Histórico de Movimentações"}
];
