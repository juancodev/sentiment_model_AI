import { ChangeEvent, useState } from "react";
import { textClassification } from "@huggingface/inference";
import { Button, Select, Spinner, Container } from "@chakra-ui/react";
import { TbDatabaseSearch } from "react-icons/tb";
import { TableData } from "../Table/Index";
import { contentProps } from "../../Types";

const Content = ({ records }: contentProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [responseData, setResponseData] = useState([{}]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(false);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleShowData = async () => {
    setShowTable(false);
    setLoading(true);
    await textClassification({
      accessToken: import.meta.env.VITE_HF_TOKEN,
      model: "finiteautomata/beto-emotion-analysis",
      inputs: `${selectedOption}`,
    })
      .then((data) => {
        setLoading(false);
        setShowTable(true);
        setResponseData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <p className="my-6">
        Selecciona un elemento de la lista que se te presenta a continuación
        para que puedas ver su data, para eso debes darle click al botón{" "}
        <span className="text-sky-600 font-bold">Show Data.</span>{" "}
      </p>
      <div className="flex mb-10">
        <Container maxW={"90%"}>
          <Select
            placeholder="Selecciona una opción"
            onChange={handleSelect}
            size={"md"}
          >
            {records
              .map((text, index) => (
                <>
                  <option key={index} value={text.slice(1)}>
                    {text.slice(1)}
                  </option>
                </>
              ))
              .slice(1)}
          </Select>
        </Container>
        <div>
          <Button
            leftIcon={<TbDatabaseSearch />}
            color="#0284c7"
            onClick={handleShowData}
            isLoading={loading}
          >
            Show Data
          </Button>
        </div>
      </div>
      <div className="text-center mt-5">
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#0284c7"
            size="xl"
          />
        )}
      </div>
      <div>
        {showTable && (
          <TableData
            records={records}
            selectedOption={selectedOption}
            responseData={responseData}
          />
        )}
      </div>
    </>
  );
};

export { Content };
