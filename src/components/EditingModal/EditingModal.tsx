import { useContext, useState } from 'react';

import classes from './EditingModal.module.scss'
import { NotesContext } from '../../store/store';
import Modal from '../UI/Modal/Modal';
import FormController from '../UI/FormController/FormController';
import TextWithTags from '../UI/TextWithTags/TextWithTags';
import isTag from '../../utils/is-tag';
import Tag from './Tag/Tag';

interface EditingObj {
  id: string;
  title: string;
  text: string;
  tags: string[];
}

const EditingModal: React.FC<{ editingObj?: EditingObj, onHideModal: () => void }> = props => {
  const notesCtx = useContext(NotesContext);

  const [enteredTitle, setEnteredTitle] = useState<string>(props.editingObj?.title ?? '');
  const [enteredText, setEnteredText] = useState<string>(props.editingObj?.text ?? '');
  const [enteredTags, setEnteredTags] = useState<string[]>(props.editingObj?.tags ?? []);

  const isFormValid = enteredTitle.trim() && enteredText.trim();

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    if (props.editingObj) {
      notesCtx.editNote(props.editingObj.id, enteredTitle, enteredText, enteredTags);
    } else {
      notesCtx.addNote(enteredTitle, enteredText, enteredTags);
    }

    props.onHideModal();
  };

  const modalPurposeStr = `${props.editingObj ? 'Edit' : 'Create'} Note`;

  const tagsList = enteredTags.map(tag => <Tag
      key={tag}
      name={tag}
    />
  );

  return (
    <Modal onClose={props.onHideModal}>
      <h2 className={classes.title}>{modalPurposeStr}</h2>

      {props.editingObj && <TextWithTags text={props.editingObj.text}/>}

      <form>
        <FormController
          label="Title"
          input={{
            id: 'title',
            type: 'text',
            value: enteredTitle,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => setEnteredTitle(event.target.value)
          }}
        />

        <FormController
          label="Text"
          input={{
            id: 'text',
            type: 'text',
            value: enteredText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              const text = event.target.value;

              setEnteredText(text);

              const tags = Array.from(new Set(text.split(' ').filter(word => isTag(word))));

              setEnteredTags(tags);
            }
          }}
        />

        <ul className={classes.tags}>{tagsList}</ul>

        <div className={classes.actions}>
          <button
            className={classes.actions__button_alt}
            type="button"
            onClick={props.onHideModal}
          >
            Close
          </button>

          <button
            className={classes.actions__button}
            type="submit"
            disabled={!isFormValid}
            onClick={submitHandler}
          >
            {modalPurposeStr}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditingModal;