import { Button, Header } from "@pomelo-la/paradis";

export function getStaticProps() {
  console.log("getStatic");
  // fetch
  return {
    props: {
      values: [1, 2],
    },
  };
}
export default function Static() {
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
