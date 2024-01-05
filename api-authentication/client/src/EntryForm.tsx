import { type FormEvent, useState } from 'react';
import { addEntry, removeEntry, updateEntry } from './data';
import type { Entry } from './EntryList';

/**
 * Form that adds or edits an entry.
 * If `entry` is `null`, adds an entry.
 * If `entry` is defined, edits that entry.
 */
type Props = {
  entry: Entry | null;
  onSubmit: () => void;
};
export function EntryForm({ entry, onSubmit }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [title, setTitle] = useState(entry?.title ?? '');
  const [photoUrl, setPhotoUrl] = useState(entry?.photoUrl ?? '');
  const [notes, setNotes] = useState(entry?.notes ?? '');
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newEntry = { title, photoUrl, notes };
    try {
      setIsLoading(true);
      if (entry) {
        await updateEntry({ ...entry, ...newEntry });
      } else {
        await addEntry(newEntry);
      }
      onSubmit();
    } catch (err) {
      alert(`Error saving changes: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete() {
    if (!entry) throw new Error('Should not happen');
    try {
      setIsLoading(true);
      await removeEntry(entry.entryId);
      onSubmit();
    } catch (err) {
      alert(`Error deleting entry: ${err}`);
    } finally {
      setIsLoading(false);
      setIsDeleting(false);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1>{entry ? 'Edit Entry' : 'New Entry'}</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row margin-bottom-1">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              src={photoUrl || 'images/placeholder-image-square.jpg'}
              alt="entry"
            />
          </div>
          <div className="column-half">
            <label className="margin-bottom-1 d-block">
              Title
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label className="margin-bottom-1 d-block">
              Photo URL
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="row margin-bottom-1">
          <div className="column-full">
            <label className="margin-bottom-1 d-block">
              Notes
              <textarea
                required
                className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                cols={30}
                rows={10}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="column-full d-flex justify-between">
            {entry && (
              <button
                disabled={isLoading}
                className="delete-entry-button"
                type="button"
                onClick={() => setIsDeleting(true)}>
                Delete Entry
              </button>
            )}
            <button
              disabled={isLoading}
              className="input-b-radius text-padding purple-background white-text">
              SAVE
            </button>
          </div>
        </div>
      </form>
      {isDeleting && (
        <div
          id="modalContainer"
          className="modal-container d-flex justify-center align-center">
          <div className="modal row">
            <div className="column-full d-flex justify-center">
              <p>Are you sure you want to delete this entry?</p>
            </div>
            <div className="column-full d-flex justify-between">
              <button
                className="modal-button"
                onClick={() => setIsDeleting(false)}>
                Cancel
              </button>
              <button
                className="modal-button red-background white-text"
                onClick={handleDelete}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
