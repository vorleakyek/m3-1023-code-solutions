export type PageType = 'journal' | 'register';

type Props = {
  onNavigate: (page: PageType) => void;
};
export function NavBar({ onNavigate }: Props) {
  return (
    <header className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <h3>
              <button
                type="button"
                onClick={() => onNavigate('journal')}
                className="entries-link white-text">
                Entries
              </button>
              <button
                type="button"
                onClick={() => onNavigate('register')}
                className="entries-link white-text">
                Register
              </button>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}
