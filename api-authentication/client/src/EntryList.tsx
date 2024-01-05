import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { readEntries } from './data';

export type UnsavedEntry = {
  title: string;
  photoUrl: string;
  notes: string;
};
export type Entry = UnsavedEntry & {
  entryId: number;
};

type Props = {
  onCreate: () => void;
  onEdit: (entry: Entry) => void;
};
export function EntryList({ onCreate, onEdit }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [entries, setEntries] = useState<Entry[]>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const entries = await readEntries();
        setEntries(entries);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) load();
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error loading entries:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  if (!entries) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <button
              type="button"
              className="white-text form-link"
              onClick={onCreate}>
              NEW
            </button>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul">
            {entries.map((entry) => (
              <Entry key={entry.entryId} entry={entry} onEdit={onEdit} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type EntryProps = {
  entry: Entry;
  onEdit: (entry: Entry) => void;
};
function Entry({ entry, onEdit }: EntryProps) {
  return (
    <li>
      <div className="row">
        <div className="column-half">
          <img
            className="input-b-radius form-image"
            src={entry.photoUrl}
            alt=""
          />
        </div>
        <div className="column-half">
          <div className="row">
            <div className="column-full d-flex justify-between">
              <h3>{entry.title}</h3>
              <button onClick={() => onEdit(entry)}>
                <FaPencilAlt />
              </button>
            </div>
          </div>
          <p>{entry.notes}</p>
        </div>
      </div>
    </li>
  );
}
