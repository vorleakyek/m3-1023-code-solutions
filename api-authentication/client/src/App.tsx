import { useState } from 'react';
import { EntryForm } from './EntryForm';
import { type Entry, EntryList } from './EntryList';
import { NavBar, type PageType } from './NavBar';
import { RegistrationForm } from './RegistrationForm';
import { SignInForm } from './SignInForm';
import './App.css';

export function App() {
  /* The current page being displayed:
   * 'journal' - A Code Journal page based on the state of `editing`
   * 'register' - The registration page
   * 'sign-in' - The sign in page
   */
  const [page, setPage] = useState<PageType>('sign-in');

  /* What is being currently edited:
   * undefined - nothing, display entries
   * null - creating a new entry
   * defined - the entry being edited
   */
  const [editing, setEditing] = useState<Entry | null | undefined>();

  function handleNavigate(page: PageType) {
    setPage(page);
    if (page === 'journal') {
      setEditing(undefined);
    }
  }

  return (
    <>
      <NavBar onNavigate={handleNavigate} />
      {page === 'journal' && editing !== undefined && (
        <EntryForm entry={editing} onSubmit={() => setEditing(undefined)} />
      )}
      {page === 'journal' && editing === undefined && (
        <EntryList
          onCreate={() => setEditing(null)}
          onEdit={(entry) => setEditing(entry)}
        />
      )}
      {page === 'register' && <RegistrationForm />}
      {page === 'sign-in' && <SignInForm />}
    </>
  );
}
