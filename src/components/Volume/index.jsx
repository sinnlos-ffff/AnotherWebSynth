
import { useContext } from "solid-js";
import { SynthContext } from "../../contexts/store";

export default function Volume() {
    const { volume } = useContext(SynthContext)

    return <input
        type="range"
        min="0.0"
        max="1.0"
        step="0.01"
        value="0.5"
        name="volume"
        onInput={(e) => {
            volume().gain.value = e.target.value;
        }}
    />
}