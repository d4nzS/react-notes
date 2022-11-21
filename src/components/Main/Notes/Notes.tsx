import classes from './Notes.module.scss';
import Note from '../../../models/note';
import Card from '../../UI/Card/Card';
import NoteItem from './NoteItem/NoteItem';

const Notes: React.FC<{ notes: Note[] }> = ({ notes }) => {
  const notesList = notes.map(note => <NoteItem
      key={note.id}
      noteObj={note}
    />
  );

  if (!notesList.length) {
    return (
      <section className={classes.message}>
        <h2>No Notes here...</h2>
      </section>
    );
  }

  return (
    <section className={classes.notes}>
      <Card>
        <ul className={classes.notes__list}>{notesList}</ul>
      </Card>
    </section>
  );
};

export default Notes;