import React, { FunctionComponent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  placeholder: string;
  handleChange(event: React.FormEvent<HTMLInputElement>): void;
};

export const SearchBox: FunctionComponent<SearchBoxProps> = ({
  placeholder,
  handleChange
}) => (
  <input
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
    className="search"
  />
);
