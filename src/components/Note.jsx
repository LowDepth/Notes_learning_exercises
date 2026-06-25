import Button from "./Button";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <>
      <li
        key={note.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {note.content}
        <Button onClick={toggleImportance} text={label} />
      </li>
    </>
  );
};

export default Note;
