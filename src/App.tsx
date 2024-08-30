import Button from "@atoms/button";
import { HiOutlineDownload } from "react-icons/hi";

export function App() {
  return <h1 className="text-3xl font-bold underline">
    <Button icon={<HiOutlineDownload size={30}/>} variant={"outline"}/>
  </h1>;
}

export default App;
