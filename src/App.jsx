import styles from './App.module.css';
import Synth from './components/Synth';
import { SynthContextPriovider } from './contexts/store';

function App() {
  return (
    <div class={styles.App}>
      <SynthContextPriovider>
        <Synth />
      </SynthContextPriovider>
    </div>
  );
}

export default App;
