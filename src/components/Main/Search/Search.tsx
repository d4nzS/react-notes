import classes from './Seach.module.scss';
import FormController from '../../UI/FormController/FormController';

const Search: React.FC<{ str: string, onChangeStr: (str: string) => void }> = props => {
  return (
    <section className={classes.search}>
      <div className={classes.container}>
        <FormController
          label="TagSearch"
          input={{
            id: 'search',
            type: 'search',
            value: props.str,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => props.onChangeStr(event.target.value)
          }}
        />
      </div>
    </section>
  );
};

export default Search;