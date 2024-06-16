import CardClient from "@/components/CardClient";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

//{id: 21, nome: 'Jaedosn', paesQuant: 1, precoPaes: 0.5}

interface dataProps {
    id:number;
    nome:string;
    paesQuant:number;
    precoPaes:number
}

const Historico = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:4001/delete/historico");
        const data = res.data;
        setData(data);
        console.log(data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-8 bg-bg-primary py-8 lg:px-80 md:px-10 px-10 relative">
        <h1 className="flex justify-center text-text-primary font-bold w-full mb-2 text-4xl">Historico</h1>
        <Link href={"/"} className="ustify-center text-text-primary font-bold w-full mb-2 text-xl">Go back Home</Link>
      {data.map((item:dataProps) =>(
        <CardClient cliente={item.nome} totalPao={item.paesQuant.toString()} totalPagar={item.precoPaes.toString()} key={item.id} showImage={false}/>
      ))}
    </div>
  );
};

export default Historico;
