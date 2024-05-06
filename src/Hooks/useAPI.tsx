// import { useState, useEffect } from "react";
// import { HfInference } from "@huggingface/inference";
// import { pipeline } from "@xenova/transformers";

// export const useAPI = (file: string) => {
//   const [dataAPI, setDataAPI] = useState<Array<object>>([{}]);
//   const HF_TOKEN: string = import.meta.env.VITE_HF_TOKEN;
//   const inference = new HfInference(HF_TOKEN);

//   useEffect(() => {
//     const getDataFetch = async () => {
//       const classifier = await pipeline("sentiment-analysis");
//       const result = await classifier("I Love You");
//       return result;
//     };
//     getDataFetch()
//       .then((response) => setDataAPI(response))
//       .catch((err) => console.log(err));
//   }, []);
// };
