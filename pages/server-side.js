import { Button, Header } from "@pomelo-la/paradis";

export function getServerSideProps() {
  // fetch
  // Connect
  // file
  return {
    props: {
      values: [1, 2],
    },
  };
}

export default function ServerSide(props) {
  return (
    <div className="bg-monochrome-200 h-full p-80px">
      <Header
        className="mb-24px"
        title={"Detalle usuario"}
        subtitle={"Modifica la información personal de este usuario."}
      />
      {props?.values}
      <Button>Guardar Cambios</Button>
    </div>
  );
}
