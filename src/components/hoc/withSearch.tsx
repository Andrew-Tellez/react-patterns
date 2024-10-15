import { useState } from "react";

interface WithSearchProps {
  query: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataset: any[];
}

function WithSearch(
  Component: React.ComponentType<WithSearchProps>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataset: any[],
) {
  return function (): JSX.Element {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [query, setQuery] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setQuery(e.target.value);
    }

    return (
      <div>
        <input onChange={handleChange} value={query} />
        <Component query={query} dataset={dataset} />
      </div>
    );
  };
}

export { WithSearch };
