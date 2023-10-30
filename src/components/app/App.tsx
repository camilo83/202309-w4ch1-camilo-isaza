import { gentlemans } from '../../data/repo';
import { Gentleman } from '../gentleman/gentleman';
import { Info } from '../info/info';

export function App() {
  return (
    <div className="container">
      <Info></Info>
      <Gentleman gentlemans={gentlemans}></Gentleman>
    </div>
  );
}
