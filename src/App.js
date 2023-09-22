import './App.scss';
//import './App.css';

function App() {
  return (
      <section className='parallax-wrapper'>
        <section className='parallax-group' id='intro'>
          <div className='parallax-layer layer-4'>Intro Background (Layer 4)</div>
          <div className='parallax-layer layer-3'>
            <div className='flex-col'>
              <h1 className='flex-title'>Parallax Demo:</h1>
              <p className='flex-subtitle'> Scroll down to see the effect</p>
            </div>
          </div>
        </section>
        <section className='parallax-group' id='group-1'>
          <div className='parallax-layer layer-5'>Group 1 Background (Layer 5)</div>
          <div className='parallax-layer layer-4'>Layer 4</div>
          <div className='parallax-layer layer-3'>Layer 3</div>
          <div className='parallax-layer layer-2'>Layer 2</div>
          <div className='parallax-layer layer-1'>Layer 1</div>
        </section>
        <section className='parallax-group' id='group-2'>
          <div className='parallax-layer layer-3'>Group 2 Background (Layer 3)</div>
          <div className='parallax-layer layer-1'>
            <div className='flex-row'>
              <div className='flex-col'>
                <p className='flex-item'>Items in</p>
                <p className='flex-item'>a flex box</p>
                <p className='flex-item'>must be in</p>
                <p className='flex-item'>the same</p>
                <p className='flex-item'>layer, see?</p>
                <p className='flex-item'>This is</p>
                <p className='flex-item'>layer 1, btw</p>
              </div>
              <div className='flex-row'>
                <button className='pointless-button'>pointless button</button>
              </div>
            </div>
          </div>
        </section>
        <section className='parallax-group' id='group-3'>
          <div className='parallax-layer layer-4'>Group 3 Background (Layer 4)</div>
          <div className='parallax-layer layer-3'>
            <div className='grid'>
              <p className='grid-item'>The</p>
              <p className='grid-item'>same</p>
              <p className='grid-item'>goes</p>
              <p className='grid-item'>for</p>
              <p className='grid-item'>grids</p>
              <p className='grid-item'>as</p>
              <p className='grid-item'>well.</p>
              <p className='grid-item'>This</p>
              <p className='grid-item'>is</p>
              <p className='grid-item'>layer</p>
              <p className='grid-item'>3,</p>
              <p className='grid-item'>fyi</p>
            </div>
          </div>
          <div className='parallax-layer layer-1'>Layer 1</div>
        </section>
        <section className='parallax-group' id='group-4'>
          <div className='parallax-layer layer-5'>Layer 5</div>
          <div className='parallax-layer layer-4'>Layer 4</div>
          <div className='parallax-layer layer-3' style={{textAlign: 'center'}}>
            Group 4 Background (Layer 3) hides farther back layers unless transparent
          </div>
          <div className='parallax-layer layer-2'>Layer 2</div>
          <div className='parallax-layer layer-1'>Layer 1</div>
        </section>
        <section className='parallax-group' id='outro'>
          <div className='parallax-layer layer-4'>Outro Background (Layer 4)</div>
          <div className='parallax-layer layer-3'>
            <div className='flex-col'>
              <h1>That's all folks!</h1>
              <h4>Thanks for scrolling!</h4>
              <p>
                You can set the height of each section if you need to make a component taller, for whatever reason. Like say for instance, someone wrote a really, really long outro for their parallax demo. You could set the height to 200vh, or something.
                This is by no means a perfect implementation of parallax, but it's a start. I'm sure there are better ways to do this, like entire packages with all sorts of fancy settings, but this works for the average joe. If you have any suggestions, please let me know!
              </p>
            </div>
          </div>
        </section>
        <footer className='' id='footer'>
          <p className='parallax-layer layer-2 footer-text'>
            <a href='https://www.linkedin.com/in/neil-maclean'>Thrown together by: Neil MacLean</a>
          </p>
      </footer>
      </section>
  );
}

export default App;
