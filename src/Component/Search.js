import React from "react";
import Fuse from 'fuse.js'
import { useState } from "react";

import Books from '../Book_data.json'
export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const fuse=new Fuse(Books,  {
      keys: [
        'name',
        'author'],
        includeScore:true
    })
    const results=fuse.search(searchTerm);
    console.log(results);
    const BookResult=searchTerm?results.map(result=>result.item):Books;
    return (
      <div>
        <div className="container">
          <p><b>Search </b>
          <input className="mx-3"
            type="text"
            placeholder="Search ..."
            onChange={(event) => setSearchTerm(event.target.value)}
          /> </p></div>
      <table className="table container my-4">
        <thead>
        <tr>
      <th scope="col">Serial No.</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      </tr>
        </thead><tbody>
      {BookResult.map((val) => {
        return (
          
          <tr key={val.key}>
            <td>{val.key}</td>
            <td>{val.name}</td>
            <td>{val.author}</td>
            <td>{val.publication}</td>
          </tr>
        );
      })
    }</tbody></table>
    </div>
  );
}