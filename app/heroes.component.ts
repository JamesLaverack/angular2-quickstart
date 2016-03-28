import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private _heroService: HeroService) {}

    onSelect(hero: hero) { this.selectedHero = hero; }

    getHeroes() {
	this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
	this.getHeroes()
    }
}

