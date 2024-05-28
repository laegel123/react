function AlertButton({message, children}) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>

    </div>
  );
};
