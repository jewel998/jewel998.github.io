export function AudioToggleMute() {
    return {
        type: 'TOGGLE_MUTE'
    }
}

export function AudioSetVolume(volume) {
    return {
        type: 'SET_VOLUME',
        payload: volume,
    }
}

export function AudioIncreaseVolume() {
    return {
        type: 'INCREASE_VOLUME',
    }
}

export function AudioDecreaseVolume() {
    return {
        type: 'DECREASE_VOLUME',
    }
}

export function AudioNextTrack() {
    return {
        type: 'NEXT_TRACK',
    }
}

export function AudioPrevTrack() {
    return {
        type: 'PREV_TRACK',
    }
}