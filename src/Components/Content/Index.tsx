import { ChangeEvent, useState } from "react";
import { textClassification } from "@huggingface/inference";
import { Button, Select, Spinner } from "@chakra-ui/react";
import { TableData } from "../Table/Index";
import { contentProps } from "../../Types";

const Content = ({ records }: contentProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [responseData, setResponseData] = useState([{}]);
  const [filteredRecords, setFilteredRecords] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(false);

  // useEffect(() => {
  //   if (selectedOption && records) {
  //     const filtered = records.filter((record) =>
  //       record.includes(selectedOption)
  //     );
  //     setFilteredRecords(filtered);
  //   }
  //   console.log(selectedOption);
  // }, []);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleShowData = async () => {
    const filtered = records.filter((record) =>
      record.includes(selectedOption)
    );
    setFilteredRecords(filtered);
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
      <h1>Content</h1>
      <Select placeholder="Select option" onChange={handleSelect}>
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
      <div>
        <Button
          colorScheme="green"
          onClick={handleShowData}
          isLoading={loading}
        >
          Show Data
        </Button>
      </div>
      <div className="text-center">
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
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
