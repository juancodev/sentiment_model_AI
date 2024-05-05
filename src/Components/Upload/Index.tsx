import { ChangeEvent, useState } from "react";
import { parse } from "csv-parse";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Content } from "../Content/Index";

const Upload = (): JSX.Element => {
  const [records, setRecords] = useState<Array<string>>([]);
  const [fileData, setFileData] = useState<File>();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    setFileData(file);

    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      console.log("Solo CSV");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string;
      const recordsArray: Array<string> = [];

      const parser = parse(fileContent, {
        delimiter: ",",
        trim: true,
      });

      parser
        // .on("readable", () => {
        //   let record;
        //   while ((record = parser.read()) !== null) {
        //     setRecords(record);
        //   }
        // })
        .on("data", (row) => {
          recordsArray.push(row);
        })
        .on("end", () => {
          setRecords(recordsArray);
          console.log("Lectura de CSV Finalizada");
        });
      // TODO: Aplicar el parseo de texto plano a un Array
      // Aquí puedes realizar cualquier operación que necesites con el contenido
      // Por ejemplo, podrías parsear el CSV y mostrarlo en una tabla
    };
    reader.readAsText(file);
  };

  if (fileData) {
    return (
      <>
        <form>
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
                  <p className="pl-1">{fileData?.name} </p>{" "}
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    {" - "}
                    <span> Subir otro archivo</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".csv"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  Recuerda que deben ser .csv
                </p>
              </div>
            </div>
          </div>
        </form>
        <div>{records.length > 0 ? <Content records={records} /> : null}</div>
      </>
    );
  } else {
    return (
      <>
        <form>
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
                <p className="text-xs leading-5 text-gray-600">
                  .CSV hasta 10MB
                </p>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
};

export { Upload };
