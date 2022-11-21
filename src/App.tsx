import NotesContextProvider from './store/store';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <NotesContextProvider>
      <Header/>
      <Main/>
    </NotesContextProvider>
  );
}

export default App;
