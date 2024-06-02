function Button({onClick, children}) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => alert('parent test!')}>
      <Button onClick={() => alert('test!')}>
        button1
      </Button>

      <Button onClick={() => alert('test2!')}>
        button2
      </Button>
    </div>
  );
};
