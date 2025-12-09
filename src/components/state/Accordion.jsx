import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <>
      <h2>Accordion Example</h2>

      <AccordionItem
        title="Was ist React?"
        children="React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen."
      />

      <AccordionItem
        title="Was macht useState?"
        children="useState ermöglicht es Komponenten, eigenen Zustand zu speichern und zu verändern."
      />

      <AccordionItem
        title="Wofür ist useEffect?"
        children="useEffect wird verwendet, um Nebenwirkungen wie API-Aufrufe nach dem Rendern auszuführen."
      />
    </>
  );
}

export default Accordion;
