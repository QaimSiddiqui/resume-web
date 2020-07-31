import React from 'react';

const FinalYearProject = ({ item }) => (
  <section>
    {console.log(item)}
    <h1 className="section-header">Final Year Project</h1>
    <article className="my-5" key={item.name}>
      <h2 className="item-header">{item.name}</h2>
      <h3 className="item-sub">{item.company}</h3>
      <p className="py-4">{item.description}</p>
      <h2 className="item-header">Libraries/Technologies:</h2>
      <p>{item.tech}</p>
    </article>
  </section>
);

export default FinalYearProject;
