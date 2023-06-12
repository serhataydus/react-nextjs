import FirstBlock from "./components/blocks/FirstBlock/FirstBlock";

export default function Home() {
  return (
    <>
      <h1>Hello NextJs World</h1>
      <FirstBlock
        label={"First Block"}
        dataTestId={"PageFirstBlock"}
        button1Label={"Button 1"}
        button2Label={"Button 2"}
      />
    </>
  );
}
