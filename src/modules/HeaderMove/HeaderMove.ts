class HeaderMove{
  readonly header: string;
  
  constructor() {
    this.header = ".header"
  }

  private changeHeader() {
    const headerBlock = document.querySelector(`${this.header}`)
    
    window?.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        headerBlock?.classList.add("header_active")
      } else {
        headerBlock?.classList.remove("header_active")
      }
    })
  }

  public get render() {
    return this.changeHeader()
  }
}

export default HeaderMove