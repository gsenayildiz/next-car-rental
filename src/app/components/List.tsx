import { Car } from "../types";
import Container from "./Container";

type ReturnType = {
    message: string;
    data: Car[];
};

const getCars = async (): Promise<ReturnType> => {
    try {
        const res = await fetch("http://localhost:3000/api/vehicles")

        return res.json();

    } catch (err) {
        throw new Error("Araçları alırken bir sorun oluştu")
    }
};
export async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const List = async () => {
    await delay(3000)
    const { data } = await getCars();

    return (
        <Container>
            <h1 className="text-2xl md:text-3xl font-bold">Bütün Araçları Keşfedin</h1>

            <div>
                {data.map((car) => (<div>
                    <h1>{car.make}
                        {car.model}
                    </h1>
                </div>))}
            </div>
        </Container>
    )
}

export default List;
