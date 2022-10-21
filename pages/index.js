import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "@pomelo-la/paradis";

export default function Home() {
  return (
    <div className="bg-monochrome-200 h-full">
      <Header
        className="mb-24px"
        title={"Editar usuario"}
        subtitle={"Modifica la información personal de este usuario."}
      />
    </div>
  );
}
