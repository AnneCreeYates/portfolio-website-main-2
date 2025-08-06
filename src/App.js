// const subject = "Tornados";
// This is a comment outside the function

function App(props) {
  console.log(props);
  return (
    <>
      <header>
        {/* This is a comment for future reference! */}
        <h1>Hello there! Wanna catch {props.subject.toUpperCase()}?</h1>
        <p>I forgot to ask {props.greeting}</p>
      </header>
      <button type="button" className="primary">Click me. NOW!</button>
    </>
  );
}

export default App;


// Structure:
// Header - contains navigation in a top bar or hamburger nav if mobile
// Body:
//  * Title page section
//  * About me section
//  * My projects section
//  * Contact section
// Footer section

// Header and footer should be in a separate component and as a priority
