export default function App() {
  return (
    <form onClick={(e) => {
      e.stopPropagation();
      alert('submit !');
    }}>
      <button>Submit</button>
    </form>
  );
};
