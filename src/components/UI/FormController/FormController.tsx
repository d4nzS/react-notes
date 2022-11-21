import classes from './FormController.module.scss';

interface Input {
  id: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormController: React.FC<{ label: string, input: Input }> = props => {
  return (
    <div className={classes['form-controller']}>
      <label
        htmlFor={props.input.id}
        className={classes['form-controller__label']}
      >{props.label}</label>
      <input
        className={classes['form-controller__input']}
        {...props.input}
      />
    </div>
  );
};

export default FormController;