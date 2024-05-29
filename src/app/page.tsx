import dynamic from "next/dynamic";

const DarkModeBtn = dynamic(() => import("./components/DarkModeBtn"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="bg-light dark:bg-dark">
        <DarkModeBtn />
      </div>
    </>
  );
}
