import React from "react";

import { useState } from "react";

import Book_Data from '../Book_data.json'
export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const books=[
        {
            "key":1,
            "name":"aba",
            "author":"dhruv",
            "publication":"abcd",
        },
        {
            "key":2,
            "name":"kjhfvjfd",
            "author":"iikmuhmujm",
            "publication":"gfadsr",
        },
        {
          "key":2,
          "name":"abad",
          "author":"kak",
          "publication":"hshsg",
      }

    ]
  return (
      <div>
          <input 
            type="text"
            placeholder="Search ..."
            onChange={(event) => setSearchTerm(event.target.value)}
          />
{books.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val) => {
        return (
          <div className="BookData">
            <p>{val.name}</p>
          </div>
        );
      })}
    </div>
  );
}