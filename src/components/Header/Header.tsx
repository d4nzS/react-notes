import classes from './Header.module.scss';
import useModal from '../../hooks/use-modal';
import EditingModal from '../EditingModal/EditingModal';

const Header: React.FC = () => {
  const { isShown, show, hide } = useModal();

  return (
    <>
      {/* Portal */}
      {isShown && <EditingModal onHideModal={hide}/>}

      <header className={classes.header}>
        <h1>ReactNotes</h1>
        <button className={classes.header__button} onClick={show}>Create Note</button>
      </header>
    </>
  );
};

export default Header;