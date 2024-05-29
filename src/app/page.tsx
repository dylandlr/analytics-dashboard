import dynamic from "next/dynamic";

const DarkModeBtn = dynamic(() => import("./components/DarkModeBtn"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <DarkModeBtn />
    </>
  );
}
