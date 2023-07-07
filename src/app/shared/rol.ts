import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class RolTake {
  constructor(private router:Router){ }

      Rol(rol: string) {
          const routes = {
              'usuario': 'usuario',
              'vendedor': 'vendedor',
              'administrador': 'administrador',
              '': 'login'
          } as any;
  
          const path = routes[rol] || 'autenticate/login';
          this.router.navigate([path]);
      }
}
