import Button from "./Button";

const AddNotes = ({
  addNote,
  newNote,
  handleNoteChange,
  showAll,
  handleShowAllNotes,
}) => {
  return (
    <>
      <div
        id="Form-Card"
        className="d-flex flex-column gap-2 align-items-cente mx-auto"
        style={{ width: "400px" }}
      >
        <form id="noteForm" onSubmit={addNote}>
          <div className="m-3">
            <input
              className="form-control mb-3 text-center"
              value={newNote}
              onChange={handleNoteChange}
              placeholder="Add new note"
            />
          </div>
        </form>
        <Button text="Save" type="submit" form="noteForm" />
        <Button
          text={showAll ? "Show Important" : "Show All Notes"}
          onClick={handleShowAllNotes}
        />
      </div>
    </>
  );
};

export default AddNotes;
