import React, { useState } from "react";

import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { listItem } from "./components/Modal";
import { Grid } from "./components/Grid";
import { UserCard } from "./components/UserCard";
import { FruitCard } from "./components/FruitCard";
import { UserModal } from "./components/UserModal";

const modalList: listItem[] = [
  {
    title: "Primeiro Item da Lista",
    image: "https://picsum.photos/48",
  },
  {
    title: "Segundo Item da Lista",
    image: "https://picsum.photos/49",
  },
  {
    title: "Terceiro Item da Lista",
    image: "https://picsum.photos/50",
  },
  {
    title: "Matheus da Mota Nogueira",
    image: "https://picsum.photos/47",
  },
];

function App() {
  const [showModal, setModal] = useState(false);

  return (
    <div className="App">
      <Grid columns={3}>
        <UserCard
          title="Matheus"
          mainText="React Dev"
          description="Is writing this app"
        />
        <FruitCard title="Apple" mainText="Red" description="Very good" />
        <FruitCard
          title="Banana"
          mainText="Yellow"
          description="Very tasteful"
        />
        <UserCard
          title="Jones"
          mainText="Teacher"
          description="Knows everything"
        />
        <Card
          titleLabel="Generic Card"
          title="Title"
          mainLabel="Generic Main"
          mainText="Main"
          descriptionLabel="Generic Description"
          description="Description"
          customStyle={{
            labelColor: "#ffffaa",
            textColor: "#ffff22",
            cardBackground: "#333",
          }}
        />
      </Grid>
      <div className="btn-container">
        <Button
          text="MyButton"
          buttonColor="orange"
          textColor="#333"
          block
          handleClick={() => {
            setModal(true);
          }}
        />
      </div>
      <UserModal
        category="Categoria"
        items={modalList}
        handleClose={() => setModal(false)}
        showModal={showModal}
      />
    </div>
  );
}

export default App;
