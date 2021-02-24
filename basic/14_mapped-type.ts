type Heros = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [ K in Heros ]: number };
const ages: HeroAges = {
  Hulk: 100, 
  Capt: 10, 
  Thor: 1000
}