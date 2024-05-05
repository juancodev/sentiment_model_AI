import { ChangeEvent } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

const Upload = (): JSX.Element => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      console.log("Solo CSV");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string;
      console.log("Contenido del archivo CSV", fileContent);

      // Aquí puedes realizar cualquier operación que necesites con el contenido
      // Por ejemplo, podrías parsear el CSV y mostrarlo en una tabla
    };

    reader.readAsText(file);
  };
  return (
    <>
      <form action="">
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Sube un archivo.
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon
                className="mx-auto h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Subir un archivo</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".csv"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">o arrastarlo y soltar</p>
              </div>
              {/* <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div> */}
              <p className="text-xs leading-5 text-gray-600">.CSV hasta 10MB</p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { Upload };
