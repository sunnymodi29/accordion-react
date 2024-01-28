import Accordion from "./Accordion";
import { accordionData } from "./utils/content";

function App() {
  return (
    <div className="accordion">
      {accordionData && accordionData.map(({ title, content }) => {
        return <Accordion title={title} content={content} key={Math.random() * 100} />
      })}
    </div>
  );
}

export default App;
