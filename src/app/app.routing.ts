import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { IndexPageComponent } from './components/index-page/index-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'inicio', component: IndexPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'galeria', component: GalleryPageComponent},
    {path: 'contacto', component: ContactPageComponent},
    {path: '**', component: NotFoundPageComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
