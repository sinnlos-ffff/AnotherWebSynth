import { celesta } from '../../assets/wavetables';
import { SynthContext } from '../../contexts/store';
import { freqKeyMap } from '../../enums/freqKeyMap';
import Volume from '../Volume'
import { createEffect, createSignal, onCleanup, useContext, createMemo } from 'solid-js';



export default function Synth() {
    const { context, volume } = useContext(SynthContext)
    const [pressedKeys, setPressedKeys] = createSignal({});

    const wave = createMemo(() => new PeriodicWave(context(), {
        real: celesta.real,
        imag: celesta.imag,
    }));

    // const lfoWave = createMemo(() => new PeriodicWave(context(), {
    //     real: [0.5, 0.1],
    //     imag: [0, 0],
    // }));

    const handleKeyDown = (event) => {
        const keyName = event.key;
        const currentTone = pressedKeys()[keyName]

        if (!currentTone) {
            const tone = new OscillatorNode(context(), { periodicWave: wave() })
            // const lfo = new OscillatorNode(context(), {
            //     frequency: 2,
            //     periodicWave: lfoWave()
            // });
            // lfo.connect(volume().gain)
            tone.frequency.setValueAtTime(freqKeyMap[keyName], context().currentTime)
            tone.connect(volume());


            tone.start()

            context().resume()
            setPressedKeys((prev) => ({ ...prev, [keyName]: tone }));
        }
    }

    const handleKeyUp = (event) => {
        const keyName = event.key;
        const tone = pressedKeys()[keyName]
        setPressedKeys((prev) => ({ ...prev, [keyName]: undefined }));
        if (tone) {
            tone.stop()
            tone.disconnect(volume());
            context().resume()
        }
    }

    createEffect(() => {
        window.addEventListener(
            'keydown',
            handleKeyDown,
        );
        window.addEventListener(
            'keyup',
            handleKeyUp,
        );

        onCleanup(() => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        });
    });

    console.log(pressedKeys())

    return (<main>
        <Volume />
        {JSON.stringify(pressedKeys())}
    </main>)
}    
