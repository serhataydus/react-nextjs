import FirstBlock from "./components/blocks/FirstBlock/FirstBlock";

export default function Home() {
  return (
    <>
      <h1>Hello NextJs + React World</h1>
      <FirstBlock
        label={"First Block Count : "}
        dataTestId={"PageFirstBlock"}
        button1Label={"Count ++"}
        button2Label={"Count --"}
      />
    </>
  );
}
