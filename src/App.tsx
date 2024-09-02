import Button from "@atoms/button";
import IconButton from "@atoms/icon-button";
import Link from "@atoms/link";
import Tag from "@atoms/tag";
import { HiOutlineDownload } from "react-icons/hi";

export function App() {
  return <section className="flex w-full items-center">
    <div>
      <Button text="Explorar Projetos" variant={"primary"}/>
    </div>
    <div>
      <IconButton icon={<HiOutlineDownload size={30}/>} variant={"outline"} />
    </div>
    <div>
      <Tag customizedColor="bg-[#FF7171]" text="NodeJs"/>
    </div>
    <div>
      <Link openNewTab={true} href="https://www.github.com" label="GitHub"/>
    </div>
    <div>
      <Link href="#home" label="Inicio" openNewTab={false}/>
    </div>
  </section>;
}

export default App;
