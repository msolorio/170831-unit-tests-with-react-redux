import * as actions from './actions.js';

describe('newGame', () => {
  it('should return the correct action', () => {
    const action = actions.newGame();
    expect(action.type).toEqual('NEW_GAME');
  });
});

describe('makeGuess', () => {
  it('should return the correct action', () => {
    const ourGuess = 17;
    const action = actions.makeGuess(ourGuess);
    expect(action.type).toEqual('MAKE_GUESS');
    expect(action.guess).toEqual(ourGuess);
  });
});

describe('toggleInfoModal', () => {
  it('should return the correct action', () => {
    const action = actions.toggleInfoModal();
    expect(action.type).toEqual('TOGGLE_INFO_MODAL');
  });
});
