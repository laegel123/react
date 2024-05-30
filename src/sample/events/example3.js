function Button({onClick, children}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({movieName}) {
  function handleClick() {
    alert(`playing ${movieName} !`);
  }

  return (
    <Button onClick={handleClick}>
      play {movieName}
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('upload !')}>
      Upload Image
    </Button>
  );
}

export default function example3() {
  return (
    <dib>
      <PlayButton movieName={'hii'}/>
      <UploadButton/>

      <Button onClick={() => alert('new Button1')}>
        button1
      </Button>

      <Button onClick={() => alert('new Button2')}>
        button2
      </Button>
    </dib>
  );
};


