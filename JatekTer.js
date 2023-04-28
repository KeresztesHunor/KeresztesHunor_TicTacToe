import Elem from "./Elem.js";
import JatekPanel from "./JatekPanel.js";

class JatekTer
{
    #lepes;

    constructor()
    {
        this.#lepes = 0;
        const ASIDE = $("aside");
        const JATEK_PANEL = new JatekPanel(ASIDE);
        const LISTA = [];
        const ARTICLE = $("article");
        for (let i = 0; i < 9; i++)
        {
            LISTA.push(new Elem(ARTICLE, i));
        }
        $(window).on("elemKivalasztas", event =>
        {
            const ELEM = LISTA[event.detail.getIndex()];
            if (!ELEM.getFoglalt())
            {
                const JATEKOS_SORON = this.#lepes++ % 2 == 0;
                ELEM.elemetFoglal(JATEKOS_SORON ? "X" : "O");
                if (this.#lepes < 9)
                {
                    JATEK_PANEL.setLepes(this.#lepes + 1);
                    JATEK_PANEL.setJatekosSoron(JATEKOS_SORON ? "O" : "X");
                }
                else
                {
                    JATEK_PANEL.setVege("Vége");
                }
            }
        });
    }
}

export default JatekTer