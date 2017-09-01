import * as actions from './actions';
import hotColdReducer, {initialState} from './reducer';
import chai from 'chai';
const expect = chai.expect;

describe('hotColdReducer', () => {
  it('should set initial state when nothing is passed in', () => {
    const state = hotColdReducer(undefined, actions.newGame());
    expect(state).to.be.an('object');
    expect(state.guesses).to.be.an('array');
    expect(state.guesses.length).to.equal(0);
    expect(state.feedback).to.equal('Make your guess!');
    expect(state.showInfoModal).to.equal(false);
    expect(state.correctAnswer).to.be.a('number');
  });

  it('should return current state if action is unknown', () => {
    let currentState = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: 17,
      showInfoModal: false
    };

    const newState = hotColdReducer(currentState, {type: '__UNKNOWN'});
    expect(newState).to.equal(currentState);
  });
});

describe('newGame', () => {
  it('should start a new game', () => {
    let state = hotColdReducer(initialState, actions.makeGuess(17));
    expect(state.guesses.length).to.equal(1);
    state = hotColdReducer(state, actions.newGame());
    expect(state.guesses.length).to.equal(0);
    expect(state.feedback).to.equal('Make your guess!');
  });
});

describe('makeGuess', () => {
  it('should add a guess to guesses in state', () => {
    expect(initialState.guesses.length).to.equal(0);

    const newState = hotColdReducer(initialState, actions.makeGuess(17));
    expect(newState.guesses.length).to.equal(1);
  });
});
