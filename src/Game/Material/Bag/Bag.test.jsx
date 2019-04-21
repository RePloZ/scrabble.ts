import Bag from './index'

const bag = new Bag();

it('create a Bag without problem', () => {
  expect(bag).toEqual(new Bag())
});

it('have one less letter', () => {
  const number = bag.letters();
  bag.pick(); 
  expect(bag.letters()).toEqual(number-1);
})
