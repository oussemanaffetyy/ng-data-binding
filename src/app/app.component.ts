import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-data-binding';
  name = 'Mohamed';
  etat_bouton = true;
  etat_affichage = false;
  compteur: number = 0; 

  nameList = [
    'Mohamed',
    'Ali',
    'Samia',
    'Saleh',
  ];
  userList = [
    { name: 'Mohamed', age: 10 },
    { name: 'Ali', age: 20 },
    { name: 'Samia', age: 12 },
    { name: 'Saleh', age: 25 },
  ];
  afficher() {
    this.etat_affichage = true;
  }
  toggleAffichage() {
    this.etat_affichage = !this.etat_affichage;
  }
  increment() {
    if (this.compteur < 10) {
      this.compteur++;
    } 
  }

  decrement() {
    if (this.compteur > 0) {
      this.compteur--;
    }
  }
    onCounterChange() {
      
      if (this.compteur < 0) {
        this.compteur = 0;
      } else if (this.compteur > 10) {
        this.compteur = 0;
      }
      else if (this.compteur.toString.length > 2) {
        this.compteur = 0;
      }
      
    }
  }

