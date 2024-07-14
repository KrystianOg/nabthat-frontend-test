import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./styles.scss";
import content from "./content.json";

export function App() {
  const getRandomOption = () => {
    const texts = content.map((v) => v.text);
    const randomIndex = Math.floor(Math.random() * texts.length);

    return texts[randomIndex];
  };

  return (
    <>
      <Header />
      <h1>Nagłówek h1</h1>

      <div className="group">
        <form>
          <div className="block block--first">
            <h2 className="block__title">Blok pierwszy</h2>
            <ol>
              <li>
                <input id="first-option" type="radio" name="option" />
                <label htmlFor="first-option">Opcja pierwsza</label>
              </li>
              <li>
                <input id="second-option" type="radio" name="option" />
                <label htmlFor="second-option">Opcja druga</label>
              </li>
              <li>
                <input id="random-option" type="radio" name="option" />
                <label htmlFor="random-option">Opcja losowa</label>
              </li>
            </ol>
          </div>

          <div className="block block--second">
            <h2 className="block__title">Blok drugi</h2>
            <button type="submit">Zastąp</button>
            <button type="submit">Doklej</button>
          </div>
        </form>

        <div className="block block--third">
          <h2 className="block__title block__title--ellipsis">
            Blok z długą nazwą która sama się przytnie
          </h2>
          <p></p>
        </div>
      </div>

      <Footer />
    </>
  );
}
