import { Routes } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
import { ListCard } from './core/components/list-card/list-card';

export const routes: Routes = [
    {path: "", component: Navbar, title: "Home"},
    {path: "estoque", component: ListCard}
];
