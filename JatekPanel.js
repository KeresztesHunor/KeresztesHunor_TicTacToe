class JatekPanel
{
    #lepes;
    #jatekosSoron;
    #vege;

    constructor(szuloElem)
    {
        szuloElem.append("<p></p>");
        this.#lepes = szuloElem.children("p:last-child");
        szuloElem.append("<p></p>");
        this.#jatekosSoron = szuloElem.children("p:last-child");
        szuloElem.append("<p></p>");
        this.#vege = szuloElem.children("p:last-child");
        this.setLepes(1);
        this.setJatekosSoron("X");
        this.setVege("Nincs vége");
    }

    setLepes(lepes)
    {
        this.#lepes.html(lepes + ". lépés");
    }

    setJatekosSoron(jatekosSoron)
    {
        this.#jatekosSoron.html("Játékos soron: " + jatekosSoron);
    }

    setVege(tartalom)
    {
        this.#vege.html(tartalom);
    }
}

export default JatekPanel;