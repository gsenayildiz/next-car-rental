import Container from "@/app/components/Container";
import Image from "next/image";
import { Car } from "@/app/types";
import Card from "@/app/components/Card";
//veri tipini belirlemek için
type RetunType = {
  message: string;
  data: Car[];
};
//Api dan veri çekmek için
const getCars = async (): Promise<RetunType> => {
  try {
    const res = await fetch("http://localhost:3000/api/vehicles");
    return res.json();
  } catch (error) {
    throw new Error("Araç Verilerini alırken bir hata oluştu!");
  }
};

//10 saniye beklemek için
async function delay(ms: number) {
  
  return new Promise((resolve) => setTimeout(resolve, ms));
    
}

//Liste oluşturmak için
const List = async () => {
  const { data } = await getCars();
 /*  await delay(3000); */

  return (
    <Container>
      <h1 className="text-2xl md:text-3xl font-bold">
        En Üst Düzey Araçlarımızı İnceleyiniz.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {data.map((car: Car, id: number) => (
          <Card key={id} car={car} />
        ))}
      </div>
    </Container>
  );
};

export default List;