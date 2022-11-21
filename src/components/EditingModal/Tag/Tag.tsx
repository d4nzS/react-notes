import classes from './Tag.module.scss';

const Tag: React.FC<{ name: string }> = props => {
  return <li className={classes.tag}>{props.name}</li>;
};

export default Tag;
