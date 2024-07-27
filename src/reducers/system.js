import { playlist } from "../components/AudioStream";

const initialState = {
    trackId: Math.ceil(Math.random() * playlist.length),
    audioLevel: 0.25,
    audioMuted: false,
};

const SystemReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'NEXT_TRACK':
            return { ...state, trackId: (state.trackId + 1) % playlist.length };
        case 'PREV_TRACK':
            return { ...state, trackId: (state.trackId + playlist.length - 1) % playlist.length };
        case 'TOGGLE_MUTE':
            return { ...state, audioMuted: !state.audioMuted };
        case 'SET_VOLUME':
            return { ...state, audioLevel: Math.min(Math.max(payload, 0), 1) };
        case 'INCREASE_VOLUME':
            return { ...state, audioLevel: Math.min(state.audioLevel + 0.01, 1) };
        case 'DECREASE_VOLUME':
            return { ...state, audioLevel: Math.max(state.audioLevel - 0.01, 0) };
        default:
            return { ...initialState, ...state };
    }
}

export default SystemReducer;