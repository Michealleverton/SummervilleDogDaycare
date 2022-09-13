import '../Mymain.css';
import '../styles.css';

function App() {
  return (
      <section id="herosection">
        <div className="maininfo d-flex">
          <div className="firstword">
            <div className="firstwordheader text-green">One Big Wacky Family</div>
            <div className="firstworddescription">
            Each dog has a different personality making this a family with alot of personalities. Your friends are free to <span className="text-green">run, swim</span> and have fun. Free of a cage for the duration of their visits. We have lots of loving hands to rub some tummies too. When your friend stays with us, a percentage of what you pay, is put into a separate fund. At the end of the year we give to the local animal shelters.
            </div>
          </div>
        </div>
      </section>
  );
}

export default App;
