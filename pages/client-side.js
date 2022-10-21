import { Button, Header } from "@pomelo-la/paradis";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSide() {
  const { data } = useSWR(
    "https://nolaborables.com.ar/api/v2/feriados/2022?formato=mensual",
    fetcher
  );

  return (
    <div className="bg-monochrome-200 h-full p-80px">
      <Header
        className="mb-24px"
        title={"Detalle usuario"}
        subtitle={"Modifica la información personal de este usuario."}
      />

      {data?.map((item, i) => (
        <ul key={i}>{JSON.stringify(item)}</ul>
      ))}

      <Button>Guardar Cambios</Button>
    </div>
  );
}
