import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
	private _router: Router,
	private _heroService: HeroService) { }

    onSelect(hero: hero) { this.selectedHero = hero; }

    gotoDetail() {
	this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    getHeroes() {
	this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
	this.getHeroes()
    }
}

