import { Button, Header } from "@pomelo-la/paradis";

export default function Home() {
  return (
    <div className="bg-monochrome-200 h-full p-80px">
      <Header
        className="mb-24px"
        title={"Detalle usuario"}
        subtitle={"Modifica la información personal de este usuario."}
      />

      <Button>Guardar Cambios</Button>
    </div>
  );
}
