import { useState } from "react";
import { episodeList } from "./data.js";

export default function App() {
  const [episodes, setEpisodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
  console.log(selectedEpisode);

  // Makes the list of episodes users can select from
  function RenderEpisodeList() {
    return (
      <div className="sidebar">
        <h2>Episodes</h2>
        <ul>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Details of the selected episode
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an Episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <RenderEpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
