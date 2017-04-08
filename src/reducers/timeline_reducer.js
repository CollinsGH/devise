import {
  ADD_TIMELINE_EVENT
} from '../actions/timeline_actions';

const _defaultState = [
  {
    title: 'swipe right to add events to your timeline',
    venue: '',
    friends: [], // friends also going
    time: '',
  }
];

const TimelineReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case ADD_TIMELINE_EVENT:
      if (newState[0].title === 'swipe right to add events to your timeline') {
        // replace entire slice with action.events on first load
        return [action.likedEvent];
      } else {
        return newState.concat(action.likedEvent);
      }
    default:
      return state;
  }
};

export default TimelineReducer;