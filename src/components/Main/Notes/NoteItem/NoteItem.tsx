import { useContext, useState } from 'react';

import classes from './NoteItem.module.scss';
import Note from '../../../../models/note';
import { NotesContext } from '../../../../store/store';
import EditingModal from '../../../EditingModal/EditingModal';
import useModal from '../../../../hooks/use-modal';

const NoteItem: React.FC<{ noteObj: Note }> = ({ noteObj }) => {
  const notesCtx = useContext(NotesContext);

  const { isShown, show, hide } = useModal();


  return (
    <>
      {/* Portal */}
      {isShown && <EditingModal
        editingObj={{
          id: noteObj.id,
          title: noteObj.title,
          text: noteObj.text,
          tags: noteObj.tags
        }}
        onHideModal={hide}
      />}

      <li className={classes.note}>
        <div>
          <h3 className={classes.note__title}>{noteObj.title}</h3>
          <div className={classes.note__text}>{noteObj.text}</div>
        </div>

        <div className={classes.note__actions}>
        <span>
          {new Date(noteObj.timestamp).toLocaleString()}
        </span>

          <button
            className={classes.note__button}
            onClick={show}
          >Edit</button>

          <button
            className={classes.note__button_alt}
            onClick={() => notesCtx.removeNote(noteObj.id)}
          >Delete</button>
        </div>
      </li>
    </>
  );
};

export default NoteItem;