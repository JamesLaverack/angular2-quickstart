import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';
import {Hero} from './hero';

@Injectable()
export class HeroService {
    getHeroes() {
	return Promise.resolve(HEROES);
    }

    }
}
