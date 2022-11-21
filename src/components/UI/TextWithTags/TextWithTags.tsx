import classes from './TextWithTags.module.scss';
import isTag from '../../../utils/is-tag';

const TextWithTags: React.FC<{ text: string }> = props => {
  const textArr = props.text.split(' ');

  const textArrWithSelection = textArr.map((word, index) => {
    if (isTag(word)) {
      return <span key={index} className={classes.text_selected}>{word} </span>;
    }

    return word + ' ';
  });

  return (
    <p className={classes.text}>
      <span className={classes.text_selected}>Tags Selection: </span>
      {textArrWithSelection}
    </p>
  );
};

export default TextWithTags;