class Elem
{
    #p;
    #index;
    #foglalt;

    constructor(szuloElem, index)
    {
        szuloElem.append("<div><p></p></div>");
        const DIV = szuloElem.children("div:last-child");
        this.#p = DIV.find("p");
        DIV.on("click", () => window.dispatchEvent(new CustomEvent("elemKivalasztas", { detail: this })));
        this.#index = index;
        this.#foglalt = false;
    }

    elemetFoglal(jel)
    {
        this.#p.html(jel);
        this.#foglalt = true;
    }

    getIndex()
    {
        return this.#index;
    }

    getFoglalt()
    {
        return this.#foglalt;
    }
}

export default Elem;