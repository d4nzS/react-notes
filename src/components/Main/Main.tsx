import { useContext, useState } from 'react';

import classes from './Main.module.scss';
import { NotesContext } from '../../store/store';
import Search from './Search/Search';
import Notes from './Notes/Notes';

const Main: React.FC = () => {
  const notesCtx = useContext(NotesContext);

  const [tag, setTag] = useState<string>('');

  const shownNotes = tag
    ? notesCtx.items.filter(note => note.tags.includes(tag.startsWith('#')
      ? tag
      : `#${tag}`
    ))
    : notesCtx.items;

  console.log(shownNotes);

  const changeTagsStrHandler = (tagStr: string): void => {
    setTag(tagStr);
  }

  return (
    <main className={classes.main}>
      <Search str={tag} onChangeStr={changeTagsStrHandler}/>
      <Notes notes={shownNotes}/>
    </main>
  );
};

export default Main;