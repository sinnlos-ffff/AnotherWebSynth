const midiToFreq = (midiNumber) => {
    const freq = 440 * Math.pow(2, (midiNumber - 69) / 12)
    return freq.toFixed(4)
}

// Neo-Riemannian tonnetz
export const freqKeyMap = Object.freeze({
    '1': midiToFreq(36), // C2
    '2': midiToFreq(43),
    '3': midiToFreq(50),
    '4': midiToFreq(57),
    '5': midiToFreq(64),
    '6': midiToFreq(71),
    '7': midiToFreq(78),
    '8': midiToFreq(85),
    '9': midiToFreq(92),
    '0': midiToFreq(99),
    'q': midiToFreq(40), // E2
    'w': midiToFreq(47),
    'e': midiToFreq(54),
    'r': midiToFreq(61),
    't': midiToFreq(68),
    'y': midiToFreq(75),
    'u': midiToFreq(82),
    'i': midiToFreq(89),
    'o': midiToFreq(96),
    'p': midiToFreq(103),
    'a': midiToFreq(44), // G#2
    's': midiToFreq(51),
    'd': midiToFreq(58),
    'f': midiToFreq(65),
    'g': midiToFreq(72),
    'h': midiToFreq(79),
    'j': midiToFreq(86),
    'k': midiToFreq(93),
    'l': midiToFreq(100),
    ';': midiToFreq(107),
    'z': midiToFreq(48), // C3
    'x': midiToFreq(55),
    'c': midiToFreq(62),
    'v': midiToFreq(69),
    'b': midiToFreq(76),
    'n': midiToFreq(83),
    'm': midiToFreq(90),
    ',': midiToFreq(97),
    '.': midiToFreq(103),
    '/': midiToFreq(111),
})