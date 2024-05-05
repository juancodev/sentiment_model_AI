import { ChangeEvent, useState } from "react";
import { textClassification } from "@huggingface/inference";
import { Button, Select, Spinner } from "@chakra-ui/react";
import { contentProps } from "../../Types";

const Content = ({ records }: contentProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleShowData = async () => {
    setLoading(true);
    await textClassification({
      accessToken: import.meta.env.VITE_HF_TOKEN,
      model: "finiteautomata/beto-emotion-analysis",
      inputs: `${selectedOption}`,
    })
      .then((data) => {
        setLoading(false);
        console.log(data);
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
    </>
  );
};

export { Content };
