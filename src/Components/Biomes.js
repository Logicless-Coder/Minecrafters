import React, { Fragment } from "react";
import "./../Styles/Biomes.css";

function Biomes() {
  return (
    <div className="biomes-main">
      <h1 id="title">Biomes</h1>
      <div className="main">
        <div className="section" id="introduction">
          <p>
            Biomes are regions in a world with varying geographical features,
            flora, heights, temperatures, humidity ratings, and sky and foliage
            colors. Biomes separate every generated world into different
            environments, such as forests, jungles, deserts, and taigas.
          </p>
        </div>
        <div className="section" id="temperature">
          <h3 className="section-title">Temperature</h3>
          <p>
            Biomes have a temperature value that determines if it snows, rains,
            or does not have either kind of precipitation. The required
            temperature values are less than 0.15 for snow, 0.15 – 0.95 for
            rain, or at least 1 for neither. The temperature also drops 0.0016
            (1⁄625) per meter above the default sea level (Y=64), but does not
            change below sea level. These values can be used to determine the
            heights that snow generates at in different biomes. For example,
            mountains generate snow at Y=95, due to their highland climate, as
            their temperature value is 0.2. The temperature affects only the
            transition from rain to snowfall. Dry biomes do not transition to
            rainy ones under any circumstance. For example, savannas do not
            experience rain or snow due to their heat. Biomes are split into 5
            categories based on their temperature: snow-covered, cold,
            temperate/lush, dry/warm, and neutral. They are almost always
            separated during terrain generation to prevent biomes with huge
            temperature differences being placed side-by-side (such as a snowy
            taiga next to a desert), and to allow biomes with similar
            temperatures to be placed next to each other more often (such as
            forests and swamps).
          </p>
          <img
            className="section-image"
            src="https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/7/73/BiomesGraph.png/230px-BiomesGraph.png?version=4f3f9ff11f202383fa164c7a73f76cd8"
            alt="minecraft biome temperature-rainfall graph"
          ></img>
        </div>
        <div className="section" id="generation">
          <h3 className="section-title">Generation</h3>
          <p>
            While biomes are still split into 5 categories, generation of biomes
            between 1.7 and the current version differs somewhat from the biome
            categories described below. In general, land biomes generate in 3
            different clusters: cold, dry, and green biomes. Green biomes are
            often larger and more continuous than the other types. Cold and dry
            biomes generate in smaller clusters, but can still extend a thousand
            or more blocks. Cold biomes include the snow-covered Snowy Tundra
            and Snowy Taiga. Dry biomes consist of Savanna, Plains, and Desert.
            Green biomes consist of Swamp, Plains, Dark Forest, Birch Forest,
            Forest, Taiga, and Mountains. Plains biomes are somewhat unusual in
            that they generate in both green and dry biome clusters. However, in
            the source code, green biomes are further subdivided into temperate
            green biomes and lush green biomes. Temperate green biomes include
            Mountains, Taiga, Forest, and Plains. Lush green biomes include
            Birch Forest, Dark Forest, Forest, Plains, Swamp, and Mountains. The
            only way to differentiate between these two climates is by noting
            whether there are areas of Taiga or areas of Birch Forest, Dark
            Forest, and Swamps. Forest, Mountains, and Plains generate in both
            of these climates. In snowy climates, Snowy Tundra are weighed 3
            times more versus Snowy Taiga, meaning Snowy Taiga is much rarer
            than Snowy Tundra. In dry climates, Deserts are weighed 3 times,
            Savanna 2 times, and Plains only once, meaning in dry climates,
            Deserts are more common than Savannas, and Plains are rarer than
            Savannas. Snowy, Temperate Green, Lush Green, and dry biome
            clusters, as well as Mushroom Fields, Jungles, Giant Tree Taigas,
            Oceans and Deep Oceans, are generated and pre-determined in the
            biome climate stage of biome generation. The biome clusters then
            generate their respective biomes. Four land biomes are rarer, and
            generate separately from biome clusters: Mushroom Fields, Badlands,
            Jungles, and Giant Tree Taigas. Mushroom Fields generate in Ocean
            biomes, Badlands in dry biomes, and Jungle and Giant Tree Taigas
            generate in green biomes. These three land biomes may also
            occasionally generate standalone separate from their parent biome
            clusters. In addition, an "edge" variant biome surrounds these three
            biomes. Jungle Edges separate Jungles from most other land biomes
            aside from regular Forest or Taiga (if bordering a Swamp the Jungle
            edge extends up to 3 chunks), and Desert separates Badlands from the
            rest of the land biomes except with Modified Badlands. Taiga and its
            variants surround Giant Tree Taiga in all cases except for Snowy
            Taiga. The generation of Mushroom Fields uses Mushroom Fields Shore
            as its "technical" river biome and beach biome, but if a Deep Ocean
            touches a Mushroom Field biome then the Mushroom Field Shore biome
            doesn't generate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Biomes;
