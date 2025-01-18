class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: DocumentFragment;

  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById("project-input")
    );
    this.hostElement = <HTMLDivElement>document.getElementById("app");

    this.element = this.templateElement.content;
    this.render(this.element);
  }

  private render(element: DocumentFragment) {
    this.hostElement.append(element);
  }
}

const projectInput = new ProjectInput();
