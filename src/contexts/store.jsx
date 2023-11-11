import { createContext, createMemo, createSignal } from "solid-js";

export const SynthContext = createContext(null);

export function SynthContextPriovider(props) {
  const [context] = createSignal(new AudioContext());

  const volume = createMemo(() => new GainNode(context(), { gain: 0.1 }))

  volume().connect(context().destination);

  return <SynthContext.Provider value={{ context, volume }}>
    {props.children}
  </SynthContext.Provider>;
}
