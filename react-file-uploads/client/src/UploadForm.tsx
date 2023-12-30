import { type FormEvent, useState } from 'react';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

//continue with the challenge part for validation in the second commit

export function UploadForm() {
  const [imageFile, setImageFile] = useState<Image>();
  // const [url,setUrl] = useState();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    /* Prevent the browser's default behavior for form submissions.
     * Create a `new` FormData object from the `event`.
     *
     * Use fetch() to send a POST request to /api/uploads.
     * The body should be the form data object you created (not a JSON string).
     * Headers are not necessary as fetch will use the correct Content-Type
     * automatically (multipart/form-data).
     *
     * Parse the JSON response body and log the parsed response body.
     * Set the `imageFile` state to the parsed response body.
     * Log any errors to the console (using `console.error`).
     *
     * References:
     * https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
     */
    try {
      event.preventDefault();
      if (event.currentTarget === null) throw new Error('event.currentTarget is null');
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/uploads',{
        method: "Post",
        body: formData
      });

      if(!response.ok) {
        throw new Error(`error status: ${response.status}`);
      }

      const result = await response.json();

      if (!result) {
        console.error('cannot find the newly created data');
      }
      setImageFile(result);
      console.log(result);
    } catch(err) {
      console.error('error:', err);
    }

  }

  // function isValidPath(urlString) {
  //   const url = new URL(urlString);
  //   return url.pathname !== '/';
  // }

  // if(isValidPath(imageFile)) {
  //   setUrl(urlString);
  // }
  return (
    <div className="container">
      <div className="row min-vh-100 pb-5 justify-content-center align-items-center">
        <div className="col col-md-8">
          <h3 className="text-center mb-5">React File Uploads</h3>
          {imageFile && <img src={imageFile.url} alt={imageFile?.caption} />}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                Caption:
                <input
                  required
                  autoFocus
                  type="text"
                  id="caption"
                  name="caption"
                  className="form-control bg-light"
                />
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <input
                required
                type="file"
                name="image"
                accept=".png, .jpg, .jpeg, .gif"
              />
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
